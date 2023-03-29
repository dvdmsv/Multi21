import { Component } from '@angular/core';
import { Comentario } from 'src/app/clases/comentario/comentario';
import { ComentarioService } from 'src/app/servicios/comentarioBD/comentario.service';

@Component({
  selector: 'app-revisar-comentarios',
  templateUrl: './revisar-comentarios.component.html',
  styleUrls: ['./revisar-comentarios.component.css']
})
export class RevisarComentariosComponent {
  comentarios: any;

  arrComentarios: Comentario[] = [];

  columnasComentario: string[] = ['id', 'username', 'texto', 'fecha', 'borrar', 'marcarBorrado'];

  constructor(private comentariosService: ComentarioService){}

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

  eliminarComentarioDefinitivamente(id: number){
    this.comentariosService.eliminarComentarioDefinitivamente(id).subscribe();
    window.location.reload();
  }

  marcarComoBorrado(id: number){
    this.comentariosService.eliminarComentario(id).subscribe();
    window.location.reload();
  }
}
