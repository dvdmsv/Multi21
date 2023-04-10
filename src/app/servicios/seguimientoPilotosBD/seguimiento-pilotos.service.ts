import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoPilotosService {

  url = "http://localhost/TFG/Multi21/src/app/php/seguimiento/";

  constructor(private http: HttpClient) { }

  seguirPiloto(username: string | null, piloto: string){
    return this.http.get(`${this.url}seguirPiloto.php?username=${username}&piloto=${piloto}`);
  }

  getPilotosSeguidos(username: string | null){
    return this.http.get(`${this.url}getPilotosSeguidos.php?username=${username}`);
  }
}
