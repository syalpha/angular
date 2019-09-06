import { Component, OnInit } from '@angular/core';
import { LispService } from './lisp.service';
import { prestataire } from './prestataire';

@Component({
  selector: 'app-listep',
  templateUrl: './listep.component.html',
  styleUrls: ['./listep.component.css']
})
export class ListepComponent implements OnInit {

  listep: any;
  _lispService: any;
  prestataire: prestataire[]

  constructor(private liste:LispService) { }

  ngOnInit() {
    this.getPres()
  }
  
  getPres()
  {
    console.log(this.prestataire)
    this.liste.getPrest()
    
    .subscribe(
      res=>{
        this.prestataire=res
        console.log(this.prestataire)
},
        err=> console.log(err)
    )
  }
}