import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/user/login"

  checkVerification(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, {username,password})
  }
}
