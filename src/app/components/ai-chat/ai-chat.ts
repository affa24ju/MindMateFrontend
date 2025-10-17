import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
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
  // ChangeDetectorRef känner ändring på sidan och visas den direkt
  constructor(private aiService: AiService, private cd: ChangeDetectorRef) {}

  // Metod för att skicka frågan
  sendMessage() {
    console.log('Klick på send knapp i Ai-chat');
    
    // Om skriver inte något & skickar svarar Ai med ett recept ändå
    // I backenden finns 'defaultvalue' som svarar på tom fråga
    if (!this.userMessage.trim()) {
      this.userMessage = 'Ge mig ett hälsosamt recept för idag!';
    }

    this.loading = true;
    this.aiResponse = '';

    // Anropar backend via AiService
    this.aiService.getRecipeSuggestion(this.userMessage).subscribe({
      next: (response) => {
        console.log('AI svar: ', response);
        this.aiResponse = response;
        this.loading = false;
        this.cd.detectChanges();
            
        
      },
      error: (err) => {
        console.log('Fel vid Ai-anrop', err); 
        this.aiResponse = 'Något gick fel. Försök igen lite senare!';
        this.loading = false;
        this.cd.detectChanges();
            
      }
    });
    
  }

  // Metod för att stänga fönster
  close() {
    console.log('Klick på X kanpp');
    this.closed.emit();
  }
}
