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
  admin: String = "";

  usuario={
    id: 0,
    username: "",
    password: "",
    admin: ""
  }

  constructor(private usuariosServicio: UsuariosService, private router: Router){}

  ngOnInit(){
    //Si el usuario está logueado redirige a la página principal
    if(localStorage.getItem("login") != null){
      this.router.navigate(['/']);
    }
  }

  login(username: string, password: string){
    this.usuariosServicio.login(username, password).subscribe((result: any)=> { //Login del usuario
      this.existe = result;
      if(this.existe == "true"){ //Si existe se comprueba si es admin
        localStorage.setItem("login", "true"); //Se guarda en localStorange que está logueado
        localStorage.setItem("username", this.usuario.username); //Se guarda su username

        this.usuariosServicio.loginAdmin(username, password).subscribe((result: any)=>{
          this.admin = result;
          if(this.admin == "true"){
            localStorage.setItem("admin", "true");
            console.log("Es admin");
          }
        });
        document.location.reload()
      }
    });

  }


}
