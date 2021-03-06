import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private headers={headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
  
  jwt: string;

  loginUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res =>{
        localStorage.setItem('token',res.token)
          console.log(localStorage)
        },
        err => {
          return console.log(err)
      
  }
  )
}}
