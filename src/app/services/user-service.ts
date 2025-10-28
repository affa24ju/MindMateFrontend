import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Bas-URL för backend API
  private apiUrl = 'https://mindmateapi.onrender.com/api/myJournal/users';

  // Constructor
  constructor(private http: HttpClient) { }

  // Metod för att hämta premium status för användaren
  getPremiumStatus(): Observable<{ premium: boolean }> {
    return this.http.get<{ premium: boolean }>(`${this.apiUrl}/me/premium`);
  }
  
}
