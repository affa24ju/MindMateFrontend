import { Routes } from '@angular/router';
import { WelcomeText } from './components/welcome-text/welcome-text';
import { JournalPage } from './pages/journal-page/journal-page';
import { StatisticsPage } from './pages/statistics-page/statistics-page';
import { PremiumSuccessPage } from './pages/premium-success-page/premium-success-page';

export const routes: Routes = [
    { path: '', component: WelcomeText },
    { path: 'journal', component: JournalPage},
    { path: 'premium-success', component: PremiumSuccessPage},
    { path: 'statistics', component: StatisticsPage},
    { path: 'journal', component: JournalPage}
];
