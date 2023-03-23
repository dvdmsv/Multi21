import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiF1Service {

  constructor(private http: HttpClient) { }

  carrerasTempActual(){
    return this.http.get("https://ergast.com/api/f1/current.json?limit=50");
  }

  carreraSeleccionada(numCarrera: number){
    return this.http.get(`https://ergast.com/api/f1/current/${numCarrera}/results.json`);
  }

  clasificacion(numCarrera: number){
    return this.http.get(`https://ergast.com/api/f1/current/${numCarrera}/driverStandings.json`);
  }
}
