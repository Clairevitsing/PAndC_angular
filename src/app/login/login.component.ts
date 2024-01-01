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
    pseudo: "",
    password: ""
  }

  constructor(private authService: AuthService, private tokenService: TokenService, private toastr: ToastrService){ }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.form.pseudo, this.form.password).subscribe(
      data => {
        this.tokenService.saveToken(data.token)
        this.tokenService.saveUserCredentials(this.form.password);
        this.toastr.success("Welcome " + this.form.pseudo)
      },
      () =>  this.toastr.error("Connection failed, please check your information.")
    )
  }
}
