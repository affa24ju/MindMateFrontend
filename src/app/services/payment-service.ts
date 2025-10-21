import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // Bas-URL för backend API
  private apiUrl = 'http://localhost:8080/api/myJournal/payments';

  // Constructor
  constructor(private http: HttpClient) { }

  // Metod för att initiera en betalning
  createCheckoutSession(): Observable<any> {
    return this.http.post<{url: string}>(`${this.apiUrl}/create-checkout-session`, { });
  }
  
}
