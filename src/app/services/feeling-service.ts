import { Injectable } from '@angular/core';

// Syftet med denna service är att översätta känslor  till svenska
// och deras representation med emojis.
// Den här service filen används för att visa emojis & känslobeskrivning inne i journal-list, 
// journal-history och statistic-page

@Injectable({
  providedIn: 'root'
})
export class FeelingService {
  private emojis: Record<string, string> = {
    // Skapar emojis: samma som enum klass Feeling i backenden
    // Emojis har jag bara i frontened, i databas sparas bara en sträng
    GLAD: '😊',
    SAD: '😢',
    ANGRY: '😡',
    TIRED: '😴',
    EXCITED: '😃',
    WORRIED: '😟',
    NEUTRAL: '😐',
    DISAPPOINTED: '😞',
    NERVOUS: '😬',
    STRESSED: '😫',
    RELIEVED: '😌',
    PROUD: '😎',
    HOPEFUL: '🤞'
  };
  // Översättning av engelska till svenska
  private translations: Record<string, string> = {
    GLAD: 'Glad',
    SAD: 'Ledsen',
    ANGRY: 'Arg',
    TIRED: 'Trött',
    EXCITED: 'Uppspelt',
    WORRIED: 'Orolig',
    NEUTRAL: 'Neutral',
    DISAPPOINTED: 'Besviken',
    NERVOUS: 'Nervös',
    STRESSED: 'Stressad', 
    RELIEVED: 'Lättad',
    PROUD: 'Stolt',
    HOPEFUL: 'Hoppfull'
  };

  // Tar in feeling & returnerar respektiv emoji
  // Om det inte finns i listan, returnerar ?
  getEmoji(feeling: any): string {
    return this.emojis[feeling] || '❓';
  }
  // Metod för att översätta feeling till svenska
  translateFeelingText(feeling: any): string {
    return this.translations[feeling] || feeling;
  }
}
