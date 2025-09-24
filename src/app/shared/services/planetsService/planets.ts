import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private _HttpClient: HttpClient) {}

  getPlanets(planetId: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/planets/${planetId}?limit=20`);
  }
}
