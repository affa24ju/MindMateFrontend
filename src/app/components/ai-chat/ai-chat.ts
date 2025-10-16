import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChat {

  @Output() closed = new EventEmitter<void>();

  userMessage = '';
  aiResponse = '';
  loading = false;

  // Metod för att skicka frågan
  sendMessage() {
    
  }

  // Metod för att stänga fönster
  close() {
    console.log('Klick på X kanpp');
    this.closed.emit();
  }

}
