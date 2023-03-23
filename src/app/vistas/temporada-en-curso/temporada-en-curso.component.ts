import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Resultado } from 'src/app/clases/resultado';
import { ApiF1Service } from 'src/app/servicios/api-f1.service';

@Component({
  selector: 'app-temporada-en-curso',
  templateUrl: './temporada-en-curso.component.html',
  styleUrls: ['./temporada-en-curso.component.css']
})
export class TemporadaEnCursoComponent {
  constructor(private apiF1: ApiF1Service){}

  carreras: any;

  carreraSeleccionada: any;

  arrCarrSelec: Resultado[] = [];

  //arrCarrSelec: string[] = [];

  ngOnInit(){
    this.apiF1.carrerasTempActual().subscribe(resutl => this.carreras = resutl);
  }

  buscar(numCarrera: number){
    this.apiF1.carreraSeleccionada(numCarrera).subscribe(result => {
      this.carreraSeleccionada = result;

      for(const resultado of this.carreraSeleccionada.MRData.RaceTable.Races[0].Results){

        this.arrCarrSelec.push(
          new Resultado(
            resultado.position,
            resultado.Driver.givenName,
            resultado.Constructor.name,
            resultado.grid,
            resultado.status,
            resultado.points
        ));
        //console.log(resultado.position);
        // this.arrCarrSelec.push(resultado.position);
        // this.arrCarrSelec.push(resultado.Driver.givenName);
        // this.arrCarrSelec.push(resultado.Constructor.name);
        // this.arrCarrSelec.push(resultado.grid);
        // this.arrCarrSelec.push(resultado.status);
        // this.arrCarrSelec.push(resultado.points);
      }
      console.log(this.arrCarrSelec);
    });
  }
}
