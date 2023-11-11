import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/global/config';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string) {
    debugger
    const url = `${this.apiUrl}Movies/Search/${searchTerm}`;
    return this.http.get(url);
  }

  searchGeneres(searchTerm: string) {
    debugger
    const url = `${this.apiUrl}Generes/Search/${searchTerm}`;
    return this.http.get(url);
  }

  searchActors(searchTerm: string) {
    debugger
    //moviesId
    const url = `${this.apiUrl}Movies/Search/${searchTerm}`;
    return this.http.get(url);
  }

}
