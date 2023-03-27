import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Clasificacion } from 'src/app/clases/clasificacion/clasificacion';
import { Comentario } from 'src/app/clases/comentario/comentario';
import { Resultado } from 'src/app/clases/resultado/resultado';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';
import { ComentarioService } from 'src/app/servicios/comentarioBD/comentario.service';

@Component({
  selector: 'app-temporada-en-curso',
  templateUrl: './temporada-en-curso.component.html',
  styleUrls: ['./temporada-en-curso.component.css']
})
export class TemporadaEnCursoComponent {
  constructor(private apiF1: ApiF1Service, private router: Router, private comentarioService: ComentarioService){}

  carreras: any;
  comentario: string = "";

  carreraSeleccionada: any;
  clasificSeleccionada: any;
  comentariosRecibidos: any;

  arrCarrSelec: Resultado[] = [];
  arrClasifSelec: Clasificacion[] = [];
  arrComentSelec: Comentario[] = [];

  columnasCarrera: string[] = ['posicion', 'piloto', 'escuderia', 'pos. salida', 'status', 'puntos'];
  columnasClasific: string[] = ['posicion', 'piloto', 'escuderia', 'puntos', 'victorias'];

  ngOnInit(){
    if(localStorage.getItem("login") == null){
      this.router.navigate(['/']);
    }
    this.apiF1.carrerasTempActual().subscribe(resutl => this.carreras = resutl); //Se ejecuta cuando se carga el componente para el desplegable de circuitos
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
    this.getComentarios(numCarrera);
  }

  publicar(numCarrera: number){
    let username = localStorage.getItem("username");
    //Introducir fecha
    this.comentarioService.publicar(username, numCarrera, this.comentario).subscribe((result) => console.log("Comentado"));
    //window.location.reload();
    this.comentario = "";
  }

  getComentarios(numCarrera: number){
    this.comentarioService.getComentarios(numCarrera).subscribe(result => {
      this.comentariosRecibidos = result;
      this.arrComentSelec = [];
      for(const comentario of this.comentariosRecibidos){
        this.arrComentSelec.push(
          new Comentario(
            comentario.id,
            comentario.username,
            comentario.carrera,
            comentario.texto,
            comentario.date
          )
        );
      }
    });
  }
}
