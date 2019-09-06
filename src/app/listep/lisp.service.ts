import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { prestataire } from './prestataire';

@Injectable({
  providedIn: 'root'
})
export class LispService {
  getPrestataire() {
    throw new Error("Method not implemented.");
  }
  
  private _listepUrl = "http://localhost:8000/prestataire" 

  constructor(private http: HttpClient) {

  }
  getPrest():Observable<prestataire[]>{
    return this.http.get<prestataire[]>(this._listepUrl)

  }
}
