import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LisuService {
  getUser() {
    throw new Error("Method not implemented.");
  }

  private _listeuUrl = "http://localhost:8000/user" 

  constructor(private http: HttpClient) {

  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this._listeuUrl)

  }
}
