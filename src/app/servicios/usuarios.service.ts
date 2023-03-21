import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost/TFG/Multi21/src/app/php/";

  constructor(private http: HttpClient) { }

  registro(username: string, password: string) {
    return this.http.get(`${this.url}registro.php?username=${username}&password=${password}`);
  }

  login(username: string, password: string){
    return this.http.get(`${this.url}login.php?username=${username}&password=${password}`);
  }
}
