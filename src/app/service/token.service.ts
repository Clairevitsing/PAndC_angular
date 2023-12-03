import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private isLoggedin = false;

  constructor(private router: Router, private toastr: ToastrService) {}

  // Saves the provided token to localStorage and navigates to the home page
  saveToken(token: string): void{
    localStorage.setItem('token', token);
    this.router.navigateByUrl('/');
  }

  // Sets the isLoggedin property based on the provided boolean value
  setIsLogged(value: boolean): void {
    this.isLoggedin = value;
  }

  // Retrieves the value of the isLoggedin property
  getIsLogged(): boolean {
    return this.isLoggedin;
  }

  // Removes the 'token' and 'auth_user' from localStorage, sets isLoggedin to false, and navigates to the login page
  clearTokenAndUserInfos(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('auth_user');
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }

  // Saves the provided user pseudo to localStorage with the key 'auth_user'
  saveUserCredentials(pseudo: string): void {
    localStorage.setItem('auth_user', pseudo);
  }

  // Retrieves the stored token from localStorage
  getUserCredentials(): string | null {
    return localStorage.getItem('token');
  }

  // Retrieves the stored user pseudo from localStorage
  getUserPseudo(): string | null {
    return localStorage.getItem('auth_user');
  }
}
