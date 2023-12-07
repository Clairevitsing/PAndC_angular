import { Injectable } from '@angular/core';
import {IAddress} from "../interface/IAddress.modele";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  addressesUrl:string = "http://localhost:8000/api/addresses";

  getAddresses(): Observable<any>{
    return this.http.get<IAddress[]>(this.addressesUrl);
  }
}
