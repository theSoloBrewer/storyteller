import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  // CRUD operations

  // Create a new character
  createCharacter(characterData: any): Observable<any> {
    return this.http.post<any>('/api/characters', characterData);
  }

  // Get all characters
  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>('/api/characters');
  }

  // Get a character by ID
  getCharacterById(characterId: string): Observable<any> {
    return this.http.get<any>(`/api/characters/${characterId}`);
  }

  // Update a character
  updateCharacter(characterId: string, characterData: any): Observable<any> {
    return this.http.put<any>(`/api/characters/${characterId}`, characterData);
  }

  // Delete a character
  deleteCharacter(characterId: string): Observable<any> {
    return this.http.delete<any>(`/api/characters/${characterId}`);
  }
}
