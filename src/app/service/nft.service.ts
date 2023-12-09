import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../interface/ICategory.modele";
import {INft} from "../interface/INft.modele";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  private baseUrl = 'http://127.0.0.1:8000/api/nfts';

  constructor(private http: HttpClient) { }

  getAllNfts(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getAllCategories():Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/nfts_categories')
  }

  getCategory(url: string): Observable<ICategory> {
    return this.http.get<ICategory>(url);
  }
  setNft($id: any, name: string, category: number, description: string, img: string, stock: number): Observable<any>{
    const credentials = { name, category, description, img, stock };
    return this.http.post(`${this.baseUrl}/${$id}/edit`, credentials);
  }
  getNft(id: number): Observable<INft> {
    return this.http.get<INft>(`${this.baseUrl}/${id}`);
  }
  createNft(formData: FormGroup): Observable<any>{
    return this.http.post(this.baseUrl, formData.getRawValue());
  }
}
