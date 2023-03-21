import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost/TFG/Multi21/src/app/php/";

  constructor(private http: HttpClient) { }

  alta(usuario:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(usuario));
  }

  login(username: string){
    return this.http.get(`${this.url}login.php?username=${username}`);
  }
}
