import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarios: any;

  nombre: String = "";

  existe: String = "";

  usuario={
    id: 0,
    username: "",
    password: ""
  }

  constructor(private usuariosServicio: UsuariosService, private router: Router){}

  ngOnInit(){
  }

  login(username: string, password: string){
    this.usuariosServicio.login(username, password).subscribe((result: any)=> {
      this.existe = result;
      if(this.existe == "true"){
        localStorage.setItem("login", "true");
        localStorage.setItem("username", this.usuario.username);
        this.router.navigate(['/']);
      }
    });

  }


}
