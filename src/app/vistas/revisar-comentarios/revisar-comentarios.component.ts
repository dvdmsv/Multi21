import { Component } from '@angular/core';
import { Comentario } from 'src/app/clases/comentario/comentario';
import { ComentarioService } from 'src/app/servicios/comentarioBD/comentario.service';

@Component({
  selector: 'app-revisar-comentarios',
  templateUrl: './revisar-comentarios.component.html',
  styleUrls: ['./revisar-comentarios.component.css']
})
/**
 * Componente para los usuarios administradores que permite revisar los comentarios publicados
 */
export class RevisarComentariosComponent {
  /**
   * Datos en crudo de los comentarios
   */
  comentarios: any;
  /**
   * Array de objetos comentario
   */
  arrComentarios: Comentario[] = [];
  /**
   * Columnas de la tabla
   */
  columnasComentario: string[] = ['id', 'username', 'texto', 'fecha', 'borrar', 'marcarBorrado'];
  /**
   * Constructor de RevisarComentariosComponent
   * @param comentariosService servicio que se comunica con la base de datos
   */
  constructor(private comentariosService: ComentarioService){}
  /**
   * Metodo que se ejecuta al cargar el componente y obtiene los comentarios publicados
   */
  ngOnInit(){
    this.comentariosService.getComentariosPublicados().subscribe(result => {
      this.comentarios = result;
      this.arrComentarios = [];
      for(const comentario of this.comentarios){
        this.arrComentarios.push(
          new Comentario(
            comentario.id,
            comentario.username,
            comentario.carrera,
            comentario.texto,
            comentario.fecha,
            comentario.eliminado
          )
        );
      }
    });
  }
  /**
   * Función para eliminar de la base de datos comentarios
   * @param id id del comentario
   */
  eliminarComentarioDefinitivamente(id: number){
    this.comentariosService.eliminarComentarioDefinitivamente(id).subscribe();
    window.location.reload();
  }
  /**
   * Función para marcar como borrado un comentario en la base de datos
   * @param id id del comentario
   */
  marcarComoBorrado(id: number){
    this.comentariosService.eliminarComentario(id).subscribe();
    window.location.reload();
  }
}
