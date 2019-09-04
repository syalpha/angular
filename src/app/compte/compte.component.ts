import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  _httpClient: any;
  compteUserData = {}

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  compteuser() {
    /* console.log(this.ajoutUUserData) */
    this._httpClient.compteUser(this.compteUserData)
      .subscribe(
        res =>console.log(res),
        err => console.log(err)
      )
  }
}
