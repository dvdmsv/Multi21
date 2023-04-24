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
/**
 * Componente que muestra los pilotos que sigue el usuario
 */
export class PilotosSeguidosComponent {
  /**
   * Datos en crudo de los pilotos
   */
  pilotos: any;
  /**
   * Datos en crudo de los resultados
   */
  resultados: any;
  /**
   * Array de pilotos seguidos
   */
  arrPilotosSeguidos: any = [];
  /**
   * Array de resultados de cada piloto
   */
  arrResultadosPiloto: ResultadosPiloto[] = [];
  /**
   * Columnas de la tabla
   */
  columnas = ["posicionParrilla", "posicionFinal", "status", "puntos"];

  /**
   * Constructor de PilotosSeguidosComponent
   * @param apiF1 servicio que se comunida con la API
   * @param seguimientoPilotosService servicio que se comunica con la base de datos
   */
  constructor(private apiF1: ApiF1Service, private seguimientoPilotosService: SeguimientoPilotosService){}
  /**
   * Metodo que se usa cuando se carga el componente para obtener los pilotos que sigue el usuario
   */
  ngOnInit(){
    let usuario = localStorage.getItem("username");
    //Se obtienen todos los pilotos que ya sigue el usuario
    this.seguimientoPilotosService.getPilotosSeguidos(usuario).subscribe(result=>{
      this.arrPilotosSeguidos = result;
    });
  }
  /**
   * Función para obtener los resultados del piloto
   * @param pilotoId id del piloto
   */
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
  /**
   * Funcion para dejar de seguir a un piloto
   * @param idSeguimiento id del seguimiento
   */
  dejarDeSeguir(idSeguimiento: string){
    let usuario = localStorage.getItem("username");
    this.seguimientoPilotosService.dejarDeSeguir(usuario, idSeguimiento).subscribe(result=>console.log("Unfollow"));
    window.location.reload();
  }
}
