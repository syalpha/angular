import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout-p',
  templateUrl: './ajout-p.component.html',
  styleUrls: ['./ajout-p.component.css']
})
export class AjoutPComponent implements OnInit {

  ajoutPUserData = {}
  constructor( private _http: HttpClient   ) { }

  ngOnInit() {
  }

  ajoutPUser(){
    console.log(this.ajoutPUserData)
  }
}
