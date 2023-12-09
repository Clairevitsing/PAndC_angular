import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {of, switchMap} from "rxjs";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pseudo: string = "";
  email: string = "";
  password: string = "";
  gender: string = "femme";
  lastname: string = "";
  firstname: string = "";
  birthDate!: Date;
  address: number = 0;
  street: string = "";
  ZIPCode!: number;
  city: string = "";
  success: string = "";
  error: string = "";

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit() {
    this.addressRegisterAndRegister();
  }

  addressRegisterAndRegister() {
    this.authService.adressRegister(this.street, this.ZIPCode, this.city)
      .pipe(
        switchMap((response) => {
          if (response && response.id) {
            console.log('Adresse enregistrée avec succès !');
            this.address = response.id;
            return this.authService.register(
              this.pseudo, this.email, this.password, this.gender,
              this.lastname, this.firstname, this.birthDate, this.address
            );
          }
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          if (response) {
            console.log('Enregistré avec succès !');
            this.success = "Vous avez été enregistré avec succès !";
            window.scrollTo(0, 0);
          }
        },
        error: (error) => {
          console.error('Erreur lors de la connexion:', error);
          this.error = "L'utilisateur existe déjà !";
          window.scrollTo(0, 0);
        },
      });
  }
}
