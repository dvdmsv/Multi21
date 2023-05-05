import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase que contiene las funciones para conectarse con las funciones php y comunicarse con la base de datos relativa a usuarios
 */
export class UsuariosService {
  /**
   * Variable que contiene la URL donde se encuentran los archivos php que se comunican con la base de datos
   */
  url = "/assets/php/usuarios/";
  /**
   *
   * @param http método para obtener datos de un servidor
   */
  constructor(private http: HttpClient) { }
  /**
   * Función que se encarga de pasar al php encargado de registrar un usuario el nombre de usuario y la contraseña
   * @param username nombre de usuario para registrar
   * @param password contraseña del usuario
   * @returns devuelve un observable
   */
  registro(username: string, password: string) {
    return this.http.get(`${this.url}registro.php?username=${username}&password=${password}`);
  }
  /**
   * Función a servicio de un usuario administrador que permite registrar usuarios en la base de datos con permisos de administrador
   * @param username nombre de usuario para registrar
   * @param password contraseña del usuario
   * @param admin parámetro boleano para indicar si el usuario que se va a crear es admin o no
   * @returns devuelve un observable
   */
  registroAdmin(username: string, password: string, admin: boolean) {
    let esAdmin: string;
    if(admin == true){
      esAdmin = "1"
    }else{
      esAdmin = "0"
    }
    return this.http.get(`${this.url}registroAdmin.php?username=${username}&password=${password}&admin=${esAdmin}`);
  }
  /**
   * Función encargada de realizar el login
   * @param username nombre del usuario que se va a loguear
   * @param password contraseña del usuario que se va a loguear
   * @returns devuelve un observable
   */
  login(username: string, password: string){
    return this.http.get(`${this.url}login.php?username=${username}&password=${password}`);
  }
  /**
   * Función que se encarga de comprobar si el usuario que se está logueando es admin
   * @param username nombre del usuario que se va a loguear
   * @param password contraseña del usuario que se va a loguear
   * @returns devuelve un observable
   */
  loginAdmin(username: string, password: string){
    return this.http.get(`${this.url}login_admin.php?username=${username}&password=${password}`);
  }
  /**
   * Función que se encarga de obtener todos los usuarios de la base de datos
   * @returns devuelve un observable con los usuarios de la base de datos
   */
  getUsuarios(){
    return this.http.get(`${this.url}getUsuarios.php`);
  }
  /**
   * Función que se encarga de borrar un usuario en la base de datos
   * @param id numero identificativo del usuario a borrar
   * @returns
   */
  borrarUsuario(id: number){
    return this.http.get(`${this.url}borrarUsuario.php?id=${id}`);
  }
  /**
   * Función que se encarga de dar los permisos de administrador a un usuario
   * @param id numero identificativo del usuario
   * @returns
   */
  hacerAdmin(id: number){
    return this.http.get(`${this.url}hacerAdmin.php?id=${id}`);
  }
  /**
   * Función que se encarga de quitar los permisos de administrador a un usuario
   * @param id numero identificativo del usuario a borrar
   * @returns
   */
  quitarAdmin(id: number){
    return this.http.get(`${this.url}quitarAdmin.php?id=${id}`);
  }
}
