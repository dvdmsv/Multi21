import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * ApiF1Service Clase que se encarga de conectar con la API de F1 y devolver los resultados solicitados
 */
export class ApiF1Service {
  /**
   *
   * @param http método para obtener datos de un servidor
   */
  constructor(private http: HttpClient) { }
  /**
   * Solicita al servidor las carreras de la presente temporada de F1
   * @returns devuelve un observable con los datos solicitados
   */
  carrerasTempActual(){
    return this.http.get("https://ergast.com/api/f1/current.json?limit=50");
  }
  /**
   * Solicita al servidor los resultados de una carrera seleccionada de la presente temporada de F1
   * @param numCarrera numero de la carrera seleccionada
   * @returns observable con los datos solicitados
   */
  carreraSeleccionada(numCarrera: number){
    return this.http.get(`https://ergast.com/api/f1/current/${numCarrera}/results.json`);
  }
  /**
   * Solicita al servidor la clasificación de pilotos en la carrera seleccionada de la presente temporada de F1
   * @param numCarrera numero de la carrera seleccionada
   * @returns observable con los datos solicitados
   */
  clasificacion(numCarrera: number){
    return this.http.get(`https://ergast.com/api/f1/current/${numCarrera}/driverStandings.json`);
  }
}
