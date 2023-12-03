import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ICategory } from 'src/app/interface/ICategory.modele';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http:HttpClient) {}

  getAllCategory():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

 getCategory(id:number):Observable<ICategory>{

    return this.http.get<ICategory>(`${this.baseUrl}/${id}`);

  }
}
