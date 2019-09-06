import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  roles: Array <string>

  private _ajoutUUrl = "http://localhost:8000/user/new" 

  headers: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "events"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; };
  
  constructor(private http: HttpClient) { }
  
  ajoutUUser(user:any){
        const endpoint = 'http://localhost:8000/user/new';
        const formData: FormData  = new FormData();
        formData.append('username',user.username);
        formData.append('password',user.password);
        formData.append('nom',user.nom);
        formData.append('prenom',user.prenom);
        formData.append('adresseuser',user.adresseuser);
        formData.append('teluser',user.teluser);
        formData.append('cni',user.cni);
        formData.append("role",user.roles);
         /* formData.append('imageName',user.imageName); */ 
        return this.http.post<any>(endpoint, formData,this.headers);
  }

  
}