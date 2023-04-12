import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase que se comunica con la base de datos en todo lo relativo a comentarios
 */
export class ComentarioService {
  /**
   * URL donde se almacenan los php que se comunican con la base de datos
   */
  url = "http://localhost/Multi21/src/app/php/comentarios/";
  /**
   *
   * @param http método para obtener datos de un servidor
   */
  constructor(private http: HttpClient) {}
  /**
   * Función que se encarga de insertar un comentario en la base de datos
   * @param username nombre del usuario que va a publicar el comentario
   * @param carrera carrera sobre la que se escribe el comentario
   * @param texto texto escrito por el usuario
   * @param fecha fecha en la que se ha escrito el comentario
   * @returns devuelve un observable con los datos solicitados
   */
  publicar(username: any, carrera: number, texto: string, fecha: string) {
    return this.http.get(`${this.url}setComentario.php?username=${username}&carrera=${carrera}&texto=${texto}&fecha=${fecha}`);
  }
  /**
   * Función que se encarga de obtener todos los comentarios de la base de datos según la carrera
   * @param carrera carrera seleccionada para mostrar los comentarios
   * @returns devuelve un observable con los datos solicitados
   */
  getComentariosCarrera(carrera: number){
    return this.http.get(`${this.url}getComentariosCarrera.php?carrera=${carrera}`);
  }
  /**
   * Función que devuelve todos los comentarios publicados
   * @returns
   */
  getComentariosPublicados(){
    return this.http.get(`${this.url}getComentariosPublicados.php`);
  }
  /**
   * Función que se encarga de marcar como eliminado un comentario en la base de datos
   * @param id numero identificativo del comentario a marcar
   */
  eliminarComentario(id: number){
    return this.http.get(`${this.url}eliminarComentario.php?id=${id}`);
  }
  /**
   * Función que devuelve a un usuario administrador los comentarios marcados como eliminados
   */
  getComentariosEliminados(){
    return this.http.get(`${this.url}getComentariosEliminados.php`);
  }
  /**
   * Funcion que elimina definitivamente un comentario a partir de su id
   * @param id numero identificativo del comentario
   * @returns
   */
  eliminarComentarioDefinitivamente(id: number){
    return this.http.get(`${this.url}eliminarComentarioDefinitivamente.php?id=${id}`);
  }
  /**
   * Funcion que publica de nuevo un comentario marcado como eliminado por el usuario
   * @param id numero identificativo del comentario
   * @returns
   */
  publicarComentarioDeNuevo(id: number){
    return this.http.get(`${this.url}publicarComentarioDeNuevo.php?id=${id}`);
  }
}
