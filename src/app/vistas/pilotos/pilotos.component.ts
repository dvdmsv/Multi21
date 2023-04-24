import { Component } from '@angular/core';
import { Piloto } from 'src/app/clases/piloto/piloto';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';
import { SeguimientoPilotosService } from 'src/app/servicios/seguimientoPilotosBD/seguimiento-pilotos.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
/**
 * Componente que muestra todos los pilotos de la presente temporada
 */
export class PilotosComponent {
  /**
   * Variable que contiene los datos en crudo de la API
   */
  pilotos: any;
  /**
   * Array que contiene los objetos piloto
   */
  arrPilotos: Piloto[] = [];
  /**
   * Array que contiene los pilotos seguidos
   */
  arrPilotosSeguidos: any = [];
  /**
   * Variable que contiene los nombres de las columnas
   */
  columnasPiloto = ['familyName', 'seguido','seguir'];

  /**
   * Constructor de PilotosComponent
   * @param apiF1 servicio que se comunida con la API
   * @param seguimientoPilotosService servicio que se comunica con la base de datos
   */
  constructor(private apiF1: ApiF1Service, private seguimientoPilotosService: SeguimientoPilotosService){}
  /**
   * Metodo que se ejecuta al cargar el componente
   */
  ngOnInit(){
    this.pilotosInicio();
  }
  /**
   * Metodo que introduce los pilotos en la tabla y comprueba los que el usuario ya ha seguido
   */
  pilotosInicio(){
    let usuario = localStorage.getItem("username");
    //Se obtienen todos los pilotos que ya sigue el usuario
    this.seguimientoPilotosService.getPilotosSeguidos(usuario).subscribe(result=>{
      this.arrPilotosSeguidos = result;
    });

    this.apiF1.getPilotos().subscribe(result =>{
      this.pilotos = result;
      this.arrPilotos = [];
      let seguido: boolean = false;
      for(const piloto of this.pilotos.MRData.DriverTable.Drivers){ //Se recorren los pilotos de la API
        seguido = false; //Antes de comprobar un piloto seguido se stablece en false
        for (const pilotoSeguido of this.arrPilotosSeguidos) { //Se recorren los pilotos que sigue el usuario
          if(pilotoSeguido.piloto == piloto.driverId){ //Se encuentra en el array de seguidos
            seguido = true;
          }
        }
        this.arrPilotos.push(
        new Piloto(
          piloto.driverId,
          piloto.familyName,
          piloto.nationality,
          piloto.url,
          seguido
        ));
      }
    });

  }
  /**
   * Metodo que se encarga de seguir a un piloto y reflejarlo en la base de datos
   * @param pilotoId id del piloto
   * @param nombrePiloto nombre del piloto
   */
  seguir(pilotoId: string, nombrePiloto: string){
    let usuario = localStorage.getItem("username");
    this.seguimientoPilotosService.seguirPiloto(usuario, pilotoId, nombrePiloto).subscribe((result)=> console.log("Seguido"));
    setTimeout(()=>{ //Se ejecuta el refresco de página un poco mas tarde para dar tiempo a que se guarde el piloto
      document.location.reload();
    }, 1000);
  }
}
