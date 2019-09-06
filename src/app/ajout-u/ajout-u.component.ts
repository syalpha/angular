import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-ajout-u',
  templateUrl: './ajout-u.component.html',
  styleUrls: ['./ajout-u.component.css']
})
export class AjoutUComponent implements OnInit {

  ajoutUUserData = {}
  ajoutU = []
  _httpClient: any;
  _userService: any;
  constructor(private _user: UserService) { }

  ngOnInit() {
    
  }

  ajoutUUser() {
    /* console.log(this.ajoutUUserData) */
    this. _user.ajoutUUser(this.ajoutUUserData)
      .subscribe(
        res =>console.log(res),
        err => console.log(err)
      )
  }
}
