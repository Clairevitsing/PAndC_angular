import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormGroup} from "@angular/forms";
import {IUser} from "../interface/IUser.modele";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //la router de api pour récupérer les informations
  private userUrl = 'http://127.0.0.1:8000/api/users'
  public baseUrl:string = "http://localhost:8000"

  //A chaque appels de cette classe, je vais utiliser le contenu du constructor
  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.userUrl}/${id}`);
  }
  addUser(formData: FormGroup): Observable<any>{
    return this.http.post(this.userUrl, formData.getRawValue());
  }
  //récupérer tous les users
  //observable permet de gérer le caractère asynchrone de ta requête
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
}
