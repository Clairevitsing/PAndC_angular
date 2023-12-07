import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../interface/ICredentials..modele";
import {IToken} from "../interface/IToken.modele";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8000/api/login_check'

  constructor(private http: HttpClient) {}

  login(credential: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.url, credential)
  }
}
