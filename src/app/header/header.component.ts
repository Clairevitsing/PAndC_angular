import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {jwtDecode} from "jwt-decode";

const AUTH_TOKEN_KEY = 'authToken';
const USERNAME_KEY = 'username';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{
  email: string = '';
  password: string = '';
  private subscription: Subscription | undefined;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  error: string = '';


  constructor(private authService: AuthService,  private router: Router){}

  ngOnInit() {
    const authToken = localStorage.getItem('authToken');
    if (authToken){
      const decodedToken: any = jwtDecode(authToken);
      if(decodedToken.username){
        this.isLoggedIn = authToken !== null;
        if(decodedToken.roles.includes('ROLE_ADMIN')){
          this.isAdmin = true;
        }
      }
    }
    // Délai de 2 heures (en millisecondes)
    const inactivityTimeout = 2 * 60 * 60 * 1000;

    // Démarre le délai avant la déconnexion
    const timeoutId = setTimeout(() => {
      this.logout();
    }, inactivityTimeout);
  }

  onSubmit() {
    this.subscription = this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response && response.token) {
          this.storeAuthToken(response.token);
          this.storeEmail(this.email);
          console.log('Connecté avec succès !');

          window.location.reload();
        }
      },
      error: (error) => {
        console.error('Erreur lors de la connexion:', error);
        this.error = "Identifiant inconnu";
      },
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private storeAuthToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  private storeEmail(email: string) {
    localStorage.setItem(USERNAME_KEY, email);
  }

  private unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

}
