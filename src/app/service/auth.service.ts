import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

const AUTH_TOKEN_KEY = 'authToken';
const USERNAME_KEY = 'username';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) { }

  login(pseudo: string, password: string): Observable<any> {
    const credentials = { pseudo, password };
    return this.http.post<any>(`${this.apiUrl}/login_check`, credentials);
  }

  register(pseudo: string, email: string, password: string, gender: string, lastname: string, firstname: string, birthDate: Date, adress: number): Observable<any> {
    const credentials = { pseudo, email, password, gender, lastname, firstname, birthDate, adress };
    return this.http.post<any>(`${this.apiUrl}/users`, credentials);
  }

  addressRegister(street: string, ZIPCode: number, city: string): Observable<any> {
    const credentials = { street, ZIPCode, city };
    return this.http.post<any>(`${this.apiUrl}/addresses`, credentials);
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    return !!authToken;
  }
}
