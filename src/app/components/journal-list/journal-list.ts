import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JournalEntry, JournlService } from '../../services/journl-service';
import { FeelingService } from '../../services/feeling-service';
import { DeletEntry } from '../delet-entry/delet-entry';
import { EditForm } from '../edit-form/edit-form';

@Component({
  selector: 'app-journal-list',
  imports: [CommonModule, DeletEntry, EditForm],
  templateUrl: './journal-list.html',
  styleUrl: './journal-list.css'
})
export class JournalList implements OnInit {

  entries : JournalEntry[] = [];
  loading = true;
  editingId: string | null = null;

  constructor(private journalService: JournlService, private feelingService: FeelingService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // loadTodayEntries() körs, om token finns
    const tokenCheck = setInterval(() => {
    if (localStorage.getItem('token')) {
        clearInterval(tokenCheck);
        this.loadTodayEntries();
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
  // Metod för att ladda dagens anteckningar
  loadTodayEntries() {
    this.loading = true;
    this.journalService.getTodayEntries().subscribe({
      next: (data) => {
        this.entries = data;
        this.loading = false;
        console.log("Loaded today's journal entries", data);
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error("Error loading today's journal entries", error);
        this.loading = false;
        this.cd.detectChanges();
      }
    });

  }
  // Emojis
  getEmoji(feeling: any){
    return this.feelingService.getEmoji(feeling);
  }
  // Text översättning av känslor
  getFeelingText(feeling: any){
    return this.feelingService.translateFeelingText(feeling);
  }
  // Uppdatera sidan efter ändringar
  reloadAfterChange() {
    this.loadTodayEntries();
  }
  trackById(_index: number, entry: any) {
    return entry.id;
  }    
}
