import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url = "http://localhost/TFG/Multi21/src/app/php/comentarios/";

  constructor(private http: HttpClient) {}

  publicar(username: any, carrera: number, texto: string, fecha: string) {
    return this.http.get(`${this.url}setComentario.php?username=${username}&carrera=${carrera}&texto=${texto}&fecha=${fecha}`);
  }

  getComentarios(carrera: number){
    return this.http.get(`${this.url}getComentarios.php?carrera=${carrera}`)
  }
}