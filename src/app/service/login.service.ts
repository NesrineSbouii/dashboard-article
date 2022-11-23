import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_BASEURL, GC_AUTH_TOKEN, GC_USER_ID } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  private accessToken: string | null | undefined;

  // 3
  private _isAuthenticated = new BehaviorSubject(false);


  // 4
  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }
  // 5
  saveUserData(token: string) {
    localStorage.setItem(GC_AUTH_TOKEN, token);
  }
  // 7
  logout() {
    localStorage.removeItem(GC_AUTH_TOKEN);

    this._isAuthenticated.next(false);
  }

  login(email: string, password: string) {
    return this.httpClient.post<{ token: string }>(
      `${API_BASEURL}/authentication_token`,
      {
        email,
        password
      },
      {responseType: 'json'}
    )
    .pipe(
      tap({
        next: (res) => {
          this.accessToken = res.token
          this.saveUserData(this.accessToken)
        },
        error: (error) => console.error(error)
      })
    );
    
  }

  
  // 8
  autoLogin() {
    const token = localStorage.getItem(GC_AUTH_TOKEN);

    if (token) {
      this.accessToken = token;
    }
  }
}
