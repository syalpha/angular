import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AjoutPComponent } from './ajout-p/ajout-p.component';
import { AjoutUComponent } from './ajout-u/ajout-u.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'ajoutU' , component:AjoutUComponent},
  {path:'ajoutP' , component:AjoutPComponent},
  {path:'compte' , component:CompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
