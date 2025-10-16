import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai-service';

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

  // Constructor för att injecera aiService
  constructor(private aiService: AiService) {}

  // Metod för att skicka frågan
  sendMessage() {
    console.log('Klick på send knapp i Ai-chat');
    
    if (!this.userMessage.trim()) return;

    this.loading = true;
    this.aiResponse = '';

    // Anropar backend via AiService
    this.aiService.getRecipeSuggestion(this.userMessage).subscribe({
      next: (response) => {
        this.aiResponse = response;
        this.loading = false;
      },
      error: (err) => {
        this.aiResponse = 'Något gick fel. Försök igen lite senare!';
        this.loading = false;
        console.error(err);      
      }
    });
    
  }

  // Metod för att stänga fönster
  close() {
    console.log('Klick på X kanpp');
    this.closed.emit();
  }
}
