import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ai-chat',
  imports: [],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChat {

  @Output() closed = new EventEmitter<void>();

  // Metod för att stänga fönster
  close() {
    console.log('Klick på X kanpp');
    this.closed.emit();
  }

}
