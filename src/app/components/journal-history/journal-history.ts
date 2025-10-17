import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private journalService: JournlService, private feelingService: FeelingService, private cd: ChangeDetectorRef) { }
  ngOnInit() {
    // Kör loadAllEntries om token finns
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
    this.cd.detectChanges();
  }

  // Metod för att ladda alla anteckningar
  loadAllEntries() {
    this.loading = true;
    this.journalService.getAllEntries().subscribe({
      next: (data) => {
        console.log("Loaded entries: ", data);
        
        // Sorterar entries efter datum, nyaste först
        this.entries = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.loading = false;
        console.log("Loaded all journal entries", this.entries);
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error("Error loading all journal entries", error);
        this.loading = false;
        this.cd.detectChanges();
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
  // Metod som använder inne i for loop
  trackById(_index: number, entry: any) {
    return entry.id;
  }
}
