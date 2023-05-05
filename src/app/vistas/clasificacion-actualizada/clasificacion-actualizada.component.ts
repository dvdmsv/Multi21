import { Component } from '@angular/core';
import { Clasificacion } from 'src/app/clases/clasificacion/clasificacion';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';

@Component({
  selector: 'app-clasificacion-actualizada',
  templateUrl: './clasificacion-actualizada.component.html',
  styleUrls: ['./clasificacion-actualizada.component.css']
})
/**
 * Componente para mostrar la clasificación actualizada
 */
export class ClasificacionActualizadaComponent {
  /**
   * Array que contiene los nombres de las columnas
   */
  columnasClasific: string[] = ['posicion', 'piloto', 'escuderia', 'puntos', 'victorias'];
  /**
   * Array que contiene objetos clasificacion
   */
  arrClasif: Clasificacion[] = [];
  /**
   * Variable que obtiene la clasificación de la API
   */
  clasificacion : any;
  /**
   * Constructor de ClasificacionActualizadaComponent
   * @param apiF1 servicio que se conecta con la API de F1
   */
  constructor(private apiF1: ApiF1Service){}
  /**
  * Metodo que se ejecuta al cargar el componente y que muestra en la vista la clasificación actualizada
  */
  ngOnInit(){
    this.apiF1.clasificacionActualizada().subscribe(result => {
      this.clasificacion = result;
      this.arrClasif = []; //Vaciar el array antes introducir los nuevos datos
      for(const clasificacion of this.clasificacion.MRData.StandingsTable.StandingsLists[0].DriverStandings){
        this.arrClasif.push(
          new Clasificacion(
            clasificacion.position,
            clasificacion.Driver.familyName,
            clasificacion.Constructors[0].name,
            clasificacion.points,
            clasificacion.wins,
          ));
      }
    });
  }
}
