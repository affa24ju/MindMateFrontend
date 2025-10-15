import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JournlService } from '../../services/journl-service';

@Component({
  selector: 'app-edit-form',
  imports: [],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css'
})
export class EditForm {
  @Input() entry!: any;
  @Output() updated = new EventEmitter<void>();

  editing = false;
  note = '';

  // Injecerar JournalService 
  constructor(private journalService: JournlService) {}

  startEdit() {
    this.editing = true;
    this.note = this.entry.note;
  }

  cancet() {
    this.editing = false;
  }


}
