import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registrado: string = "";

  usuario={
    id: 0,
    username: "",
    password: ""
  }

  constructor(private usuariosServicio: UsuariosService, private router: Router){}

  ngOnInit(){
  }

  registro(username: string, password: string){
    this.usuariosServicio.registro(username, password).subscribe((result: any)=> {
      this.registrado = result;
      if(this.registrado == "true"){
        this.router.navigate(['/login']);
      }
    });
  }
}
