import { Injectable } from '@angular/core';
import {INftCollection} from "../interface/INftCollection.modele";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private baseUrl = 'http://127.0.0.1:8000/api/nft_collections';

  constructor(private http: HttpClient) { }

  getAllCollection(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

  getCollection(id: number): Observable<INftCollection> {
    return this.http.get<INftCollection>(`${this.baseUrl}/${id}`);
  }
}
