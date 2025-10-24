import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium-success-page',
  imports: [],
  templateUrl: './premium-success-page.html',
  styleUrl: './premium-success-page.css'
})
export class PremiumSuccessPage {

  // Constructor
  constructor(private router: Router) { }

  // Funktion för att navigera tillbaka till dagboken
  goBackToJournal() {
    // localStorage.setItem('premium', 'true');
    this.router.navigate(['/journal']);
  }

}
