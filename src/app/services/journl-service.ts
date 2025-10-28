import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface för att ta emot Journal entries, motsvarar JournalEntryRequest dto i backend
export interface JournalEntryRequest {
  note: string;
  feeling: string;
}
// Interface för att spara entries i backend med id och createdAt
export interface JournalEntry {
  id: string;
  note: string;
  feeling: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class JournlService {
  // Bas-URL för backend API
  private apiUrl = 'https://mindmateapi.onrender.com/api/myJournal'; 

  constructor(private http: HttpClient) { }

  // Metod för att skapa en ny journal entry
  // Anropar /createJournalEntry endpoint med post request
  createEntry(request: JournalEntryRequest): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(`${this.apiUrl}/createJournalEntry`, request);
  }

  // Metod för att hämta dagens journal entries
  getTodayEntries(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(`${this.apiUrl}/today`);
  }

  // Metod för att hämta alla journal entries
  getAllEntries(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(`${this.apiUrl}/getAllEntries`);
  }
  // Metod för att hämta statistik mellan två datum
  getStats(startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getStats`, {
      params: {
        startDate,
        endDate
      }
    });
  }

  // Metod för att anropa delete endpoint i backend
  deleteEntry(entryId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteJournalEntry/${entryId}`, {responseType: 'text'});   
  }
  // Metod för att anropa update endpoint från backend
  updateEntry(entryId: string, updatedEntry: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateJournalEntry/${entryId}`, updatedEntry, {responseType: 'text'});
  }

}
