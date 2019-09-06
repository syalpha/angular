import { Component, OnInit } from '@angular/core';
import { LisuService } from './lisu.service';
import { User } from './user';

@Component({
  selector: 'app-listeu',
  templateUrl: './listeu.component.html',
  styleUrls: ['./listeu.component.css']
})
export class ListeuComponent implements OnInit {
  listeu: any;
  _lisuService: any;
  user: User[]

  constructor(private liste:LisuService) { }

  ngOnInit() {
    this.getUse()
  }
  getUse()
  {
    console.log(this.user)
    this.liste.getUsers()
    
    .subscribe(
      res=>{
        this.user=res
        console.log(this.user)
},
        err=> console.log(err)
    )
  }
 

 
}
