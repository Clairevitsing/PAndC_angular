import {Component, OnInit} from '@angular/core';
import {ICredentials} from "../interface/ICredentials..modele";
import {AuthService} from "../service/auth.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: ICredentials = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private tokenService: TokenService, private toastr: ToastrService){ }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenService.saveToken(data.token)
        this.tokenService.saveUserCredentials(this.form.email);
        this.toastr.success("Connexion réussie ")
      },
      () =>  this.toastr.error("Echec de la connexion, veuillez vérifier vos informations")
    )
  }
}
