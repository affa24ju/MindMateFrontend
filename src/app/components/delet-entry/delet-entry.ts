import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JournlService } from '../../services/journl-service';

@Component({
  selector: 'app-delet-entry',
  imports: [],
  templateUrl: './delet-entry.html',
  styleUrl: './delet-entry.css'
})
export class DeletEntry {

  @Input() entryId!: string;
  @Output() deleted = new EventEmitter<void>();

  constructor(private journalService: JournlService) {}

  deleteEntry() {
    if (confirm('Är du säker på att du vill radera denna anteckning?')) {
      this.journalService.deleteEntry(this.entryId).subscribe({
        next: () => {
          this.deleted.emit();
        },
        error: (err) => console.error('Fel vid radering: ', err)
        
      });
    }
  }
}
