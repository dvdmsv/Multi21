import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-anadir-usuarios',
  templateUrl: './anadir-usuarios.component.html',
  styleUrls: ['./anadir-usuarios.component.css']
})
/**
 * Componente para usuarios administradores que permiten añadir más usuarios
 */
export class AnadirUsuariosComponent {
  /**
   * Constructor de AnadirUsuariosComponent
   * @param usuariosServicio servicio que contiene los métodos para conectarse con la base de datos en lo relativo a usuarios
   */
  constructor(private usuariosServicio: UsuariosService){}

  /**
   * Variable que contiene true o false si el usuario está ya registrado o no
   */
  registrado: string = "";
  /**
   * Objeto usuario que se modifica en la vista HTML con los datos introducidos en el forumulario
   */
  usuario = {
    username : "",
    password: "",
    admin : false
  }
  /**
   * Método que registra el usuario
   */
  registro(){
    this.usuariosServicio.registroAdmin(this.usuario.username, this.usuario.password, this.usuario.admin).subscribe((result)=>console.log("Registrado"));
  }
}
