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
/**
 * Componente que contiene la temporada en curso
 */
export class TemporadaEnCursoComponent {
  /**
   * Constructor de TemporadaEnCursoComponent
   * @param apiF1 servicio que se comunica con el servido de F1
   * @param router habilita la navegación
   * @param comentarioService  servicio que contiene los métodos para conectarse con la base de datos en lo relativo a comentarios
   */
  constructor(private apiF1: ApiF1Service, private router: Router, private comentarioService: ComentarioService){}

  /**
   * Variable que contiene las carreras de la temporada
   */
  carreras: any;
  /**
   * Variable que contiene el comentario escrito en la visya
   */
  comentario: string = "";

  /**
   * Variable que contiene la carrera seleccionada
   */
  carreraSeleccionada: any;
  /**
   * Varioable que contiene la clasificación seleccionada
   */
  clasificSeleccionada: any;
  /**
   * Variable que contiene los comentarios
   */
  comentariosRecibidos: any;

  /**
   * Array con los resultados de la carrera seleccionada
   */
  arrCarrSelec: Resultado[] = [];
  /**
   * Array con la clasificacion seleccionada
   */
  arrClasifSelec: Clasificacion[] = [];
  /**
   * Array con los comentarios
   */
  arrComentSelec: Comentario[] = [];
  /**
   * Columna de la tabla carreras
   */
  columnasCarrera: string[] = ['posicion', 'piloto', 'escuderia', 'pos. salida', 'status', 'puntos'];
  /**
   * Columna de la tabla clasificacion
   */
  columnasClasific: string[] = ['posicion', 'piloto', 'escuderia', 'puntos', 'victorias'];
  /**
   * Funcion que se ejecuta cuando se carga el componente
   */
  ngOnInit(){
    if(localStorage.getItem("login") == null){
      this.router.navigate(['/']);
    }
    this.apiF1.carrerasTempActual().subscribe(resutl => this.carreras = resutl); //Se ejecuta cuando se carga el componente para el desplegable de circuitos
  }
  /**
   * Metodo que busca la carrera seleccionada en el desplegable
   * @param numCarrera numero de la carrera seleccionada
   */
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
    this.getComentarios(numCarrera); //Obtiene los comentarios de esa carrera
  }
  /**
   * Funcion para publicar comentarios en la carrera seleccionada
   * @param numCarrera numero de la carrera para publicar el comentario
   */
  publicar(numCarrera: number){
    let username = localStorage.getItem("username");
    //Introducir fecha
    let hora = new Date().toLocaleTimeString('es-ES');
    let fecha = new Date().toLocaleDateString('es-ES');
    let fechaCompleta = `${hora} ${fecha}`;
    this.comentarioService.publicar(username, numCarrera, this.comentario, fechaCompleta).subscribe((result) => console.log("Comentado"));
    //window.location.reload();
    this.comentario = "";
  }
  /**
   * Función para obtener todos los comentarios de esa carrera
   * @param numCarrera numero de la carrera para mostrar los comentarios
   */
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
            comentario.fecha
          )
        );
      }
    });
  }
}
