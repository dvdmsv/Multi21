import { Component } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent {
  usuarios: any; //Contiene los usuarios de la base de datos

  arrUsuarios: Usuario[] = [];

  columnasUsuario: string[] = ['id', 'username', 'password', 'admin', 'borrar', 'hacerAdmin', 'quitarAdmin'];


  constructor(private usuariosServicio: UsuariosService){}

  ngOnInit(){
    this.usuariosServicio.getUsuarios().subscribe((result: any)=>{
      this.usuarios = result;
      this.arrUsuarios = [] //Vaciar el array de usuarios antes de introducir los nuevos datos
      for(const usuario of this.usuarios){
        if(usuario.username != localStorage.getItem('username')){
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

  borrarUsuario(id: number){
    this.usuariosServicio.borrarUsuario(id).subscribe((result:any)=> console.log("Usuario eliminado"));
    document.location.reload();
  }

  hacerAdmin(id: number){
    this.usuariosServicio.hacerAdmin(id).subscribe((result:any)=> console.log("Usuario admin"));
    document.location.reload();
  }

  quitarAdmin(id: number){
    this.usuariosServicio.quitarAdmin(id).subscribe((result:any)=> console.log("Usuario no admin"));
    document.location.reload();
  }

}
