import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/global/config';

@Injectable({
  providedIn: 'root'
})

//<T> is a generic type which stands for "Type" (e.g., strings, numbers, custom objects)
export class MoviesService<T> {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;


  getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + endpoint);
  }
  
  getOne(endpoint: string, id: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}/${id}`);
    /* 
        **Another way to call the API without using backtick :
        return this.http.get<T>(this.apiUrl + endpoint + '/' + id);
    */ 
  }

  create(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, item);
  }

  update(endpoint: string, id: any, item: T): Observable<T> {
    debugger
    return this.http.put<T>(`${this.apiUrl}${endpoint}/${id}`, item);
  }


  delete(endpoint: string, id: any): Observable<any> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}/${id}`);
  }
  
}
