import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }
  baseUrl = "http://127.0.0.1:8000/api"

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  setUser(userid: number, pseudo: string, email: string, gender: string, lastname: string, firstname: string, birthDate: Date, address: number): Observable<any> {
    const credentials = {pseudo, email, gender, lastname, firstname, birthDate, address};
    return this.http.post(`${this.baseUrl}/users/${userid}/editAdmin`, credentials);
  }

  setAddress(addressId: number, street: string, ZIPCode: number, city: string){
    const credentials = {addressId, street,ZIPCode, city};
    return this.http.post(`${this.baseUrl}/addresses/${addressId}/edit`, credentials);
  }

  getNfts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/nfts`);
  }

  getPurchases(): Observable<any> {
    return this.http.get(`${this.baseUrl}/purchaseNfts`);
  }

  deleteUser(UserId: number){
    return this.http.delete<any>(`${this.baseUrl}/users/${UserId}`);
  }

  deleteNft(NftId: number){
    return this.http.delete<any>(`${this.baseUrl}/nfts/${NftId}`);
  }
}
