import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Characters {
  private readonly _HttpClient = inject(HttpClient);

  getCharacters(char_id: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/characters/${char_id}`, {
      params: { limit: 20 },
    });
  }
  getSingleCharacter(char_id: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/characters/${char_id}`, {
      params: { limit: 20 },
    });
  }
}
