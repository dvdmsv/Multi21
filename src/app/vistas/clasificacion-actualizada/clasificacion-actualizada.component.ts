import { Component } from '@angular/core';
import { Clasificacion } from 'src/app/clases/clasificacion/clasificacion';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';

@Component({
  selector: 'app-clasificacion-actualizada',
  templateUrl: './clasificacion-actualizada.component.html',
  styleUrls: ['./clasificacion-actualizada.component.css']
})
export class ClasificacionActualizadaComponent {

  columnasClasific: string[] = ['posicion', 'piloto', 'escuderia', 'puntos', 'victorias'];

  arrClasif: Clasificacion[] = [];

  clasificacion : any;

  constructor(private apiF1: ApiF1Service){}

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
