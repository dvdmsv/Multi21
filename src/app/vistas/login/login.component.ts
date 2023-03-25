import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

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

        this.usuariosServicio.loginAdmin(username, password).subscribe((result: any)=>{ //Comprobar si el usuario es admin
          this.admin = result;
          if(this.admin == "true"){ //Si es admin
            localStorage.setItem("esAdmin", "true"); //Se guarda en localStorange que es admin
          }else if(this.admin == "false"){
            localStorage.setItem("esAdmin", "false");
          }
        });
        setTimeout(()=>{ //Se ejecuta el refresco de página un poco mas tarde para dar tiempo a que se guarden las credenciales en local storange
          document.location.reload();
        }, 100);
      }
    });
  }
}
