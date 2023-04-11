import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoPilotosService {

  url = "http://localhost/TFG/Multi21/src/app/php/seguimiento/";

  constructor(private http: HttpClient) { }

  seguirPiloto(username: string | null, pilotoId: string, nombrePiloto: string){
    return this.http.get(`${this.url}seguirPiloto.php?username=${username}&pilotoId=${pilotoId}&nombrePiloto=${nombrePiloto}`);
  }

  dejarDeSeguir(username: string | null, idSeguimiento: string){
    return this.http.get(`${this.url}dejarDeSeguir.php?username=${username}&idSeguimiento=${idSeguimiento}`);
  }

  getPilotosSeguidos(username: string | null){
    return this.http.get(`${this.url}getPilotosSeguidos.php?username=${username}`);
  }
}
