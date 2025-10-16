import { Component } from '@angular/core';
import { JournalForm } from '../../components/journal-form/journal-form';
import { JournalList } from '../../components/journal-list/journal-list';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { JournalHistory } from '../../components/journal-history/journal-history';
import { AiChat } from '../../components/ai-chat/ai-chat';


@Component({
  selector: 'app-journal-page',
  imports: [JournalForm, JournalList, JournalHistory, RouterLink, AiChat],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.css'
})
export class JournalPage {

  constructor(private router: Router, private auth: Auth) { }

  logOut() {
    // // Rensar token från localStorage
    // localStorage.removeItem('token');

    // Använder Auth service för att logga ut
    this.auth.logout();

    // Navigerar tillbaka till startsidan
    this.router.navigate(['/']);
  }

}
