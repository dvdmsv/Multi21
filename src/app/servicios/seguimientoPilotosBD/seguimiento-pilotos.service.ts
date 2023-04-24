import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase que se comunica con la base de datos en todo lo relativo al seguimiento de pilotos
 */
export class SeguimientoPilotosService {
  /**
   * URL donde se almacenan los php que se comunican con la base de datos
   */
  url = "http://localhost/Multi21/src/assets/php/seguimiento/";
  /**
   *
   * @param http método para obtener datos de un servidor
   */
  constructor(private http: HttpClient) { }
  /**
   * Función que se encarga de hacer el seguimiento de un piloto y reflejarlo en la base de datos
   * @param username nombre del usuario
   * @param pilotoId id del piloto a seguir
   * @param nombrePiloto nombre del piloto a seguir
   */
  seguirPiloto(username: string | null, pilotoId: string, nombrePiloto: string){
    return this.http.get(`${this.url}seguirPiloto.php?username=${username}&pilotoId=${pilotoId}&nombrePiloto=${nombrePiloto}`);
  }
  /**
   * Función que se encarga de dejar de seguir a un piloto y reflejarlo en la base de datos
   * @param username nombre del usuario
   * @param idSeguimiento id del seguimiento
   */
  dejarDeSeguir(username: string | null, idSeguimiento: string){
    return this.http.get(`${this.url}dejarDeSeguir.php?username=${username}&idSeguimiento=${idSeguimiento}`);
  }
  /**
   * Función que se encagra de obtener todos los pilotos que sigue un usuario
   * @param username nombre del usuario
   * @returns observable con los datos
   */
  getPilotosSeguidos(username: string | null){
    return this.http.get(`${this.url}getPilotosSeguidos.php?username=${username}`);
  }
}
