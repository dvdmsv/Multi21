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
  url = "http://localhost/TFG/Multi21/src/app/php/comentarios/";
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
  getComentarios(carrera: number){
    return this.http.get(`${this.url}getComentarios.php?carrera=${carrera}`);
  }

  eliminarComentario(id: number){
    return this.http.get(`${this.url}eliminarComentario.php?id=${id}`);
  }
}
