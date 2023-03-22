import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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

  //@ViewChild(MatTable) tabla1: MatTable<any>;

  columnas: string[] = ["posicion", "piloto",	"escudería",	"pos. Salida",	"status",	"puntos"];

  ngOnInit(){
    this.apiF1.carrerasTempActual().subscribe(resutl => this.carreras = resutl);
  }

  buscar(numCarrera: number){
    this.apiF1.carreraSeleccionada(numCarrera).subscribe(result => {
      this.carreraSeleccionada = result;
      console.log(this.carreraSeleccionada.MRData.RaceTable.Races[0].Results);
    });
  }
}
