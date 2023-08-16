import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materials } from '../models/materials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServService {

  constructor(private http: HttpClient) {}

  url: string = "http://localhost:3000/inventory"

  inventory: Materials[] = []

  // ALL CRUD
  // READ
  getAllItems(): Observable<Materials[]>{
    return this.http.get<Materials[]>(this.url)
  }

  // UPDATE
  // updateQuantity(_id: string, quantity: number): Observable<Materials>{
  //   return this.http.put<Materials>(`${this.url}/${_id}`, {quantity})
  // }
}
