import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PurchaseNftService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  deleteNftFromUser(PurchaseId: number){
    return this.http.post<any>(`${this.baseUrl}/purchaseNft/${PurchaseId}`,"" );
  }
}
