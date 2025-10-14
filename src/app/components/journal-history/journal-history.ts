import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JournalEntry, JournlService  } from '../../services/journl-service';
import { FeelingService } from '../../services/feeling-service';
import { DeletEntry } from '../delet-entry/delet-entry';

@Component({
  selector: 'app-journal-history',
  imports: [CommonModule, DeletEntry],
  templateUrl: './journal-history.html',
  styleUrl: './journal-history.css'
})
export class JournalHistory implements OnInit {
  entries : JournalEntry[] = [];
  loading = true;

  constructor(private journalService: JournlService, private feelingService: FeelingService) { }
  ngOnInit() {
    this.loadAllEntries();
  }
  // Metod för att ladda alla anteckningar
  loadAllEntries() {
    this.journalService.getAllEntries().subscribe({
      next: (data) => {
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
}
