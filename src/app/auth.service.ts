import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8000/api/login_check"
  

  constructor(private http: HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
}
