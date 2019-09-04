import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutService {
  
  private _ajoutPUrl = "http://localhost:8000/prestataire/new"

  constructor(private http: HttpClient) { }

  ajoutPUser(user){
    const endpoint = 'http://localhost:8000/prestataire/new';
        const formData: FormData  = new FormData();
        formData.append('nomentreprise',user.nomentreprise);
        formData.append('ninea',user.ninea);
        formData.append('numregistre',user.numregistre);
        formData.append('email',user.email);
        formData.append('adresse',user.adresse);
        formData.append('telephone',user.telephone);
        formData.append('statut',user.statut);
        formData.append('username',user.username);
        formData.append('password',user.password);
        formData.append('nom',user.nom);
        formData.append('prenom',user.prenom);
        formData.append('adresseuser',user.adresseuser);
        formData.append('teluser',user.teluser);
        formData.append('cni',user.cni);
        formData.append('roles',user.roles);
        /* formData.append('roles',user.roles); */
       /*  formData.append('imageName',user.imageName); */
        /* return this.http.post<any>(endpoint, formData,this. ); */
    return this.http.post<any>(endpoint, this._ajoutPUrl, user)
  }
}
