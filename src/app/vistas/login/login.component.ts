import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarios: any;

  nombre: String = "";

  usuario={
    id: 0,
    username: "",
    password: ""
  }

  constructor(private usuariosServicio: UsuariosService){}

  ngOnInit(){
  }

  seleccionar(username: string){
    this.usuariosServicio.seleccionar(username).subscribe((result: any)=> this.usuario = result[0]);
  }

  hayRegistros() {
    return true;
  }
}
