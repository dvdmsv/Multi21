import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Clasificacion } from 'src/app/clases/clasificacion';
import { Resultado } from 'src/app/clases/resultado';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';

@Component({
  selector: 'app-temporada-en-curso',
  templateUrl: './temporada-en-curso.component.html',
  styleUrls: ['./temporada-en-curso.component.css']
})
export class TemporadaEnCursoComponent {
  constructor(private apiF1: ApiF1Service, private router: Router){}

  carreras: any;

  carreraSeleccionada: any;
  clasificSeleccionada: any;

  arrCarrSelec: Resultado[] = [];
  arrClasifSelec: Clasificacion[] = [];

  columnasCarrera: string[] = ['posicion', 'piloto', 'escuderia', 'pos. salida', 'status', 'puntos'];
  columnasClasific: string[] = ['posicion', 'piloto', 'escuderia', 'puntos', 'victorias'];

  ngOnInit(){
    if(localStorage.getItem("login") == null){
      this.router.navigate(['/']);
    }
    this.apiF1.carrerasTempActual().subscribe(resutl => this.carreras = resutl);
  }

  buscar(numCarrera: number){

    //Almacenar en el array de la carrera seleccionada
    this.apiF1.carreraSeleccionada(numCarrera).subscribe(result => {
      this.carreraSeleccionada = result;
      this.arrCarrSelec = []; //Vaciar el array antes introducir los nuevos datos
      for(const resultado of this.carreraSeleccionada.MRData.RaceTable.Races[0].Results){
        this.arrCarrSelec.push(
          new Resultado(
            resultado.position,
            resultado.Driver.familyName,
            resultado.Constructor.name,
            resultado.grid,
            resultado.status,
            resultado.points,
        ));
      }
    });


    //Almacenar en el array de clasificacion
    this.apiF1.clasificacion(numCarrera).subscribe(result => {
      this.clasificSeleccionada = result;
      this.arrClasifSelec = []; //Vaciar el array antes introducir los nuevos datos
      for(const clasificacion of this.clasificSeleccionada.MRData.StandingsTable.StandingsLists[0].DriverStandings){
        this.arrClasifSelec.push(
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
