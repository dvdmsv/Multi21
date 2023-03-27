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

  registroAdmin(username: string, password: string, admin: boolean) {
    let esAdmin: string;
    if(admin == true){
      esAdmin = "1"
    }else{
      esAdmin = "0"
    }
    return this.http.get(`${this.url}registroAdmin.php?username=${username}&password=${password}&admin=${esAdmin}`);
  }

  login(username: string, password: string){
    return this.http.get(`${this.url}login.php?username=${username}&password=${password}`);
  }

  loginAdmin(username: string, password: string){
    return this.http.get(`${this.url}login_admin.php?username=${username}&password=${password}`);
  }

  getUsuarios(){
    return this.http.get(`${this.url}getUsuarios.php`);
  }

  borrarUsuario(id: number){
    return this.http.get(`${this.url}borrarUsuario.php?id=${id}`);
  }

  hacerAdmin(id: number){
    return this.http.get(`${this.url}hacerAdmin.php?id=${id}`);
  }

  quitarAdmin(id: number){
    return this.http.get(`${this.url}quitarAdmin.php?id=${id}`);
  }
}
