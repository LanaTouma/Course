import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from './login.module';
import { TokenResponse } from '../tokenresponse';
import { environment } from '../../global/config';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged = false;
  headers!: HttpHeaders;
  loggedInUser = new LoginModel();

  private apiUrl='http://mymovies.somee.com/';

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }

  hasAccess(): boolean {
    return this.isLogged;
  }

  getAccessToken(
    username: string,
    password: string
  ): Observable<TokenResponse> {
    let data =
      'grant_type=password&username=' + username + '&password=' + password;

    console.log('Login data: ', data);

    // Get the headers using the getHeaders method
    const headers = this.getHeaders();

    return this.http.post<TokenResponse>(this.apiUrl + 'Token', data, {
      headers: headers,
    });
  }

  login(username: string, password: string): Observable<boolean> {
    return this.getAccessToken(username, password).pipe(
      map((at) => {
        let tokenResponse: TokenResponse;
        console.log('Token data returned from the server: ', at);
        tokenResponse = at;
        if (tokenResponse) {
          this.loggedInUser.userName = tokenResponse.userName;
          this.loggedInUser.token = tokenResponse.access_token;
          this.loggedInUser.expires = new Date(tokenResponse.expires);

          this.isLogged = true;
          this.saveUserInfo(this.loggedInUser);
          console.log('NEW TOKEN: ', tokenResponse.access_token);
          return true;
        } else {
          this.isLogged = false;
          localStorage.removeItem('currentUser');
          return false;
        }
      })
    );
  }

  logout() {
    this.isLogged = false;
    // Remove user from local storage to log the user out
    localStorage.removeItem('currentUser');
  }

  readSavedUserInfo(): LoginModel {
    if (!this.loggedInUser) {
      this.loggedInUser = new LoginModel();
      this.loggedInUser.token = '';
      this.loggedInUser.userName = '';
      this.loggedInUser.expires = new Date('01-01-1980');
    }

    let lStorageUser: string | null = localStorage.getItem('currentUser');
    if (!lStorageUser || lStorageUser === 'undefined') {
      this.loggedInUser.token = '';
      this.loggedInUser.userName = '';
      this.loggedInUser.expires = new Date('01-01-1980');
    } else {
      // Decrypt info if it's encrypted
      this.loggedInUser = JSON.parse(lStorageUser);
    }
    return this.loggedInUser;
  }

  saveUserInfo(loginUser: LoginModel) {
    // Use encryption if possible
    localStorage.setItem('currentUser', JSON.stringify(loginUser));
  }
}
