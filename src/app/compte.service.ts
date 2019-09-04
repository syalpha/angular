import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private _compteUrl = "http://localhost:8000/user/new"


  constructor() { }
}
