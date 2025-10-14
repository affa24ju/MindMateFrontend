import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

// Typ för svaret från backend vid inloggning/registrering, (AuthResponse i backend) 
export interface AuthResponse {
  message: string;
  token: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // Bas-URL för backend API
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient, private router: Router) { }

  // Metod för användarregistrering
  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { username, password })
    .pipe(tap(response => {
      // Spara token i localStorage vid lyckad registrering
      localStorage.setItem('token', response.token);
    }));
  }

  // Metod för användarinloggning
  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password })
    .pipe(tap(response => {
      // Spara token i localStorage vid lyckad inloggning
      localStorage.setItem('token', response.token);
    }));
  }
  // Metod för att logga ut användaren
  logout():void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
