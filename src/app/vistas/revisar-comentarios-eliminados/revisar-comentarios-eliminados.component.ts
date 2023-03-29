import { Component } from '@angular/core';
import { Comentario } from 'src/app/clases/comentario/comentario';
import { ComentarioService } from 'src/app/servicios/comentarioBD/comentario.service';

@Component({
  selector: 'app-revisar-comentarios-eliminados',
  templateUrl: './revisar-comentarios-eliminados.component.html',
  styleUrls: ['./revisar-comentarios-eliminados.component.css']
})
export class RevisarComentariosEliminadosComponent {
/**
   * Variable que contiene todos los comentarios de la base de datos
   */
comentarios: any;

/**
 * Variable con un array de objetos Comentario
 */
arrComentarios: Comentario[] = [];

/**
 * Variable con las columnas de la tabla
 */
columnasComentario: string[] = ['id', 'username', 'carrera', 'texto', 'fecha', 'borrar', 'publicar'];
/**
 * Constructor de RevisarComentariosComponent
 * @param comentariosService servicio que contiene los métodos para conectarse con la base de datos en lo relativo a comentarios
 */
constructor(private comentariosService: ComentarioService){}
/**
 * Metodo que se ejcuta cuando se carga la vista
 */
ngOnInit(){
  this.comentariosService.getComentariosEliminados().subscribe(result=>{ //Solicita los comentarios elininados al servicio
    this.comentarios = result;
    this.arrComentarios = []; //Vacia el array antes de usarlo
    for(const comentario of this.comentarios){ //Se recorren los resultados obtenidos
      this.arrComentarios.push( //En cada vuelta se introduce en el array un objeto Comentario
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
 * Función que elimina definitivamente de la base de datos un comentario
 * @param id numero identificativo del comentario
 */
eliminarComentarioDefinitivamente(id: number){
  this.comentariosService.eliminarComentarioDefinitivamente(id).subscribe((result) => console.log("Eliminado"));
  window.location.reload();
}
/**
 * Función que publica de nuevo un comentario marcado como eliminado por un usuario
 * @param id numero identificativo del comentario
 */
publicarComentarioDeNuevo(id: number){
  this.comentariosService.publicarComentarioDeNuevo(id).subscribe((result) => console.log("Publicado"));
  window.location.reload();
}
}
