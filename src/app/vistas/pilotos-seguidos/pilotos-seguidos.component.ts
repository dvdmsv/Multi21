import { Component } from '@angular/core';
import { Piloto } from 'src/app/clases/piloto/piloto';
import { ResultadosPiloto } from 'src/app/clases/resultadosPiloto/resultados-piloto';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';
import { SeguimientoPilotosService } from 'src/app/servicios/seguimientoPilotosBD/seguimiento-pilotos.service';

@Component({
  selector: 'app-pilotos-seguidos',
  templateUrl: './pilotos-seguidos.component.html',
  styleUrls: ['./pilotos-seguidos.component.css']
})
export class PilotosSeguidosComponent {

  pilotos: any;

  resultados: any;

  arrPilotosSeguidos: any = [];

  arrResultadosPiloto: ResultadosPiloto[] = [];

  columnas = ["posicionParrilla", "posicionFinal", "status", "puntos"];


  constructor(private apiF1: ApiF1Service, private seguimientoPilotosService: SeguimientoPilotosService){}

  ngOnInit(){
    let usuario = localStorage.getItem("username");
    //Se obtienen todos los pilotos que ya sigue el usuario
    this.seguimientoPilotosService.getPilotosSeguidos(usuario).subscribe(result=>{
      this.arrPilotosSeguidos = result;
    });
  }

  resultadosPiloto(pilotoId: string){
    this.apiF1.resultadosPiloto(pilotoId).subscribe(result=>{
      this.resultados = result;
      this.arrResultadosPiloto = [];
      for (const resultado of this.resultados.MRData.RaceTable.Races) {
        this.arrResultadosPiloto.push(
          new ResultadosPiloto(
            resultado.round,
            resultado.raceName,
            resultado.date,
            resultado.Results[0].grid,
            resultado.Results[0].position,
            resultado.Results[0].status,
            resultado.Results[0].points
          )
        );
      }
    });
  }

  dejarDeSeguir(idSeguimiento: string){
    let usuario = localStorage.getItem("username");
    this.seguimientoPilotosService.dejarDeSeguir(usuario, idSeguimiento).subscribe(result=>console.log("Unfollow"));
    window.location.reload();
  }

}
