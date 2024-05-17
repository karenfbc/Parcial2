import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './anime';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = environment.baseUrl + 'animes.json';

constructor(private http: HttpClient) { }

getAnimes(): Observable<Anime[]> {
  return this.http.get<Anime[]>(this.apiUrl);

}

}
