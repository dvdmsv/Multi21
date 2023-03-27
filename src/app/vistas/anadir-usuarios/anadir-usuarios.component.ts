import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-anadir-usuarios',
  templateUrl: './anadir-usuarios.component.html',
  styleUrls: ['./anadir-usuarios.component.css']
})
export class AnadirUsuariosComponent {
  constructor(private usuariosServicio: UsuariosService){}

  registrado: string = "";

  usuario = {
    username : "",
    password: "",
    admin : false
  }

  registro(){
    this.usuariosServicio.registroAdmin(this.usuario.username, this.usuario.password, this.usuario.admin).subscribe((result)=>console.log("Registrado"));
  }
}
