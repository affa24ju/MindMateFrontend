import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  
  // Bas-URL för backend API
  private apiUrl = 'http://localhost:8080/api/myJournal';

  // Constructor för att injecera HttpClient
  constructor(private http: HttpClient) {}

  // Metod för att anropa backend Ai
  getRecipeSuggestion(message: string): Observable<string> {
    // Interceptor lägger Jwt token till alla anrop
    // Tar in message som param (enligt backend)
    return this.http.get(`${this.apiUrl}/suggest-recipe`, {
        params: {message},
        responseType: 'text'
      });
  }

}
