import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost/TFG/Multi21/src/app/php/";

  constructor(private http: HttpClient) { }

  registro(usuario:any) {
    return this.http.post(`${this.url}registro.php`, JSON.stringify(usuario));
  }

  login(username: string, password: string){
    return this.http.get(`${this.url}login.php?username=${username}&password=${password}`);
  }
}
