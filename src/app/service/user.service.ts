import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //la router de api pour récupérer les informations
  private baseUrl = 'http://127.0.0.1:8000/api/users'

  //A chaque appels de cette classe, je vais utiliser le contenu du constructor
  constructor(private http: HttpClient) { }

  //récupérer tous les users
  //observable permet de gérer le caractère asynchrone de ta requête
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
}
