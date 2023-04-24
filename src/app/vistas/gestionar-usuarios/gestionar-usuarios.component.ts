import { Component } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
/**
 * Componente para usuarios administradores que permite gestionar usuarios de la base de datos
 */
export class GestionarUsuariosComponent {
  /**
   * Contiene los usuarios de la base de datos
   */
  usuarios: any;
  /**
   * Contiene un array de objetos Usuario
   */
  arrUsuarios: Usuario[] = [];
  /**
   * Columnas de la tabla
   */
  columnasUsuario: string[] = ['id', 'username', 'password', 'admin', 'borrar', 'hacerAdmin', 'quitarAdmin'];
  /**
   *  Constructor de GestionarUsuariosComponent
   * @param usuariosServicio servicio que contiene los métodos para conectarse con la base de datos en lo relativo a usuarios
   */
  constructor(private usuariosServicio: UsuariosService){}
  /**
   * Funcion que se ejecuta cuando se carga la vista
   *
   * Esta función se encarga de obtener todos los usuarios de la base de datos e introducirlos en el array de usuarios
   */
  ngOnInit(){
    this.usuariosServicio.getUsuarios().subscribe((result: any)=>{
      this.usuarios = result;
      this.arrUsuarios = [] //Vaciar el array de usuarios antes de introducir los nuevos datos
      for(const usuario of this.usuarios){ //Se recorren los usuarios creando objetos Usuario e introduciendolos en en array
        if(usuario.username != localStorage.getItem('username')){ //Se evita introducir el usuario que se ha logueado
          this.arrUsuarios.push(
            new Usuario(
              usuario.id,
              usuario.username,
              usuario.password,
              usuario.admin
            )
          );
        }
      }
    });
  }
  /**
   * Método que borra un usuario de la base de datos
   * @param id numero identificativo del usuario
   */
  borrarUsuario(id: number){
    this.usuariosServicio.borrarUsuario(id).subscribe((result:any)=> console.log("Usuario eliminado"));
    document.location.reload();
  }
  /**
   * Método que convierte en admin a un usuario de la base de datos
   * @param id numero identificativo del usuario
   */
  hacerAdmin(id: number){
    this.usuariosServicio.hacerAdmin(id).subscribe((result:any)=> console.log("Usuario admin"));
    document.location.reload();
  }
  /**
   * Método que convierte en admin a unusuario de la base de datos
   * @param id numero identificativo del usuario
   */
  quitarAdmin(id: number){
    this.usuariosServicio.quitarAdmin(id).subscribe((result:any)=> console.log("Usuario no admin"));
    document.location.reload();
  }
}
