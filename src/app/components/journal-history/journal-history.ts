import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JournalEntry, JournlService  } from '../../services/journl-service';
import { FeelingService } from '../../services/feeling-service';
import { DeletEntry } from '../delet-entry/delet-entry';
import { EditForm } from '../edit-form/edit-form';

@Component({
  selector: 'app-journal-history',
  imports: [CommonModule, DeletEntry, EditForm],
  templateUrl: './journal-history.html',
  styleUrl: './journal-history.css'
})
export class JournalHistory implements OnInit {
  entries : JournalEntry[] = [];
  loading = true;
  editingId: string | null = null;

  constructor(private journalService: JournlService, private feelingService: FeelingService) { }
  ngOnInit() {
    // this.loadAllEntries();
    const tokenCheck = setInterval(() => {
      if (localStorage.getItem('token')) {
        clearInterval(tokenCheck);
        this.loadAllEntries();
      }
    }, 200);
  }
  startEditing(id: string) {
    this.editingId = id;
    console.log('Klick på edit button');
    
  }

  onEntryUpdated(updatedEntry: JournalEntry) {
    const index = this.entries.findIndex(e => e.id === updatedEntry.id);
    if (index !== -1) {
      this.entries[index] = updatedEntry;
    }
    this.editingId = null; // stänger edit-läge
    // this.reloadAfterChange();
  }

  // Metod för att ladda alla anteckningar
  loadAllEntries() {
    this.journalService.getAllEntries().subscribe({
      next: (data) => {
        console.log("Loaded entries: ", data);
        
        // Sorterar entries efter datum, nyaste först
        this.entries = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.loading = false;
        console.log("Loaded all journal entries", data);
      },
      error: (error) => {
        console.error("Error loading all journal entries", error);
        this.loading = false;
      }
    });
  }
  // Emojies
  getEmoji(feeling: any){
    return this.feelingService.getEmoji(feeling);
  }

  // Uppdatera sidan efter ändringar
  reloadAfterChange() {
    this.loadAllEntries();
  }  
  trackById(_index: number, entry: any) {
    return entry.id;
  }
}
