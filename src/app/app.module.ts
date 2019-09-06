import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AjoutPComponent } from './ajout-p/ajout-p.component';
import { AjoutUComponent } from './ajout-u/ajout-u.component';
import { CompteComponent } from './compte/compte.component';
import { AuthService } from     './login/auth.service';
import { ListeuComponent } from './listeu/listeu.component';
import { ListepComponent } from './listep/listep.component';
import { NavComponent } from './nav/nav.component';
import { AjoutupComponent } from './ajoutup/ajoutup.component';
import { UserService } from './ajout-u/user.service';
import { AjoutService } from './ajout-p/ajout.service';
import { LisuService } from './listeu/lisu.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AjoutPComponent,
    AjoutUComponent,
    CompteComponent,
    ListeuComponent,
    ListepComponent,
    NavComponent,
    AjoutupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
    
  ],
  providers: [AuthService, UserService, AjoutService, LisuService , LisuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
