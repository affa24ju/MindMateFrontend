import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JournalForm } from '../../components/journal-form/journal-form';
import { JournalList } from '../../components/journal-list/journal-list';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { JournalHistory } from '../../components/journal-history/journal-history';
import { AiChat } from '../../components/ai-chat/ai-chat';
import { PaymentService } from '../../services/payment-service';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'app-journal-page',
  imports: [JournalForm, JournalList, JournalHistory, AiChat],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.css'
})
export class JournalPage implements OnInit{

  showAiChat = false;
  premiumActive = false; // Ändrar till true för att simulera premiumanvändare

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private auth: Auth, 
    private paymentService: PaymentService, 
    private userService: UserService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Prenumerar på queryParams för att kolla om användaren just uppgraderat till premium
    this.route.queryParams.subscribe(params => {
      const upgraded = params['upgraded'] === 'true';
      if (upgraded) {
        //  this.premiumActive = true;
        console.log('Användaren har just uppgraderat till premium.');
      }
      this.loadPremiumStatus();
    });

  }
  // Metod för att ladda användarens premium status
  loadPremiumStatus() {
    console.log('Hämtar premiumstatus från backend...');
    
    this.userService.getPremiumStatus().subscribe({
      next: (response) => {
        Promise.resolve().then(() => {
          this.premiumActive = response.premium;
          console.log('Användarens premium status:', response.premium);
          this.cdr.detectChanges();
        }); 
/*         this.premiumActive = response.premium;
        console.log('Användarens premium status:', response.premium); */
      },
      error: (error) => {
        console.error('Fel vid hämtning av användarens premium status:', error);
      }
    });
  }

  logOut() {
    // Använder Auth service för att logga ut
    this.auth.logout();
    // Navigerar tillbaka till startsidan
    this.router.navigate(['/']);
  }

  // Funktion för att öppna Ai chat
  toggleAiChat() {
    console.log('Klick på Ai knapp');
    this.showAiChat = !this.showAiChat;
  }
  // Funktion för att initiera betalning
  buyPremium() {
    console.log('Klick på premium knapp');
    
    this.paymentService.createCheckoutSession().subscribe({
      next: (response) => {
        // Omdirigera användaren till Stripe checkout sidan
        window.location.href = response.url;
      },
      error: (error) => {
        console.error('Fel vid skapande av checkout session:', error);
        alert('Ett fel uppstod vid initiering av betalningen. Försök igen senare.');
      } 
    });
  }
  // Funktion för att nevigera till statistik sidan
  goToStatistics() {
    this.router.navigate(['/statistics']);
  }
}

