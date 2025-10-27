import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-premium-success-page',
  imports: [],
  templateUrl: './premium-success-page.html',
  styleUrl: './premium-success-page.css'
})
export class PremiumSuccessPage implements OnInit{

  // Constructor
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.userService.getPremiumStatus().subscribe({
        next: (response) => {
          console.log('Användarens premium status efter köp:', response);
        },
        error: (error) => {
          console.error('Fel vid hämtning av användarens premium status efter köp:', error);
        }});
  }

  // Funktion för att navigera tillbaka till dagboken
  goBackToJournal() {
    // localStorage.setItem('premium', 'true');
    this.router.navigate(['/journal'], { queryParams: { upgraded: 'true' } });
  }

}
