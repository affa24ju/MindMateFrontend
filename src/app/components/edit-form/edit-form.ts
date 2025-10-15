import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JournalEntry, JournlService } from '../../services/journl-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css'
})
export class EditForm implements OnInit{
  @Input() entry!: any;
  @Output() updated = new EventEmitter<JournalEntry>();
  @Output() cancelled = new EventEmitter<void>;

  editing = false;
  note = '';

  // Injecerar JournalService 
  constructor(private journalService: JournlService) {}

  ngOnInit(): void {
    console.log('EditForm initierades för: ', this.entry?.id);
    this.editing = true;
    this.note = this.entry?.note || '';
      
  }
  
  cancel() {
    console.log("Klick på Avbryt knapp");
    this.editing = false;
    this.cancelled.emit();
  }

  save() {
    console.log('Klick på Spara knapp');
    
    const updatedData = { ...this.entry, note: this.note };
    this.journalService.updateEntry(this.entry.id, updatedData).subscribe({
      next: (updatedEntry) => {
        this.editing = false;
        // Eventet skickar upp till journal-history/ list
        this.updated.emit(updatedEntry);
        // Lägger till i listan
        this.entry.note = this.note;
      },
      error: (err) => console.error('Fel vid uppdatering: ', err)  
    });
  }

}
