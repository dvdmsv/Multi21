import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private usuariosServicio: UsuariosService, private router: Router, private snackBar: MatSnackBar){}

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
        let notificacion = this.snackBar.open(`${username} logueado!`); //Notificacion

        this.usuariosServicio.loginAdmin(username, password).subscribe((result: any)=>{ //Comprobar si el usuario es admin
          this.admin = result;
          if(this.admin == "true"){ //Si es admin
            localStorage.setItem("esAdmin", "true"); //Se guarda en localStorange que es admin
            let notificacion = this.snackBar.open(`${username} logueado con permisos de administrador`); //Notificacion
          }else if(this.admin == "false"){
            localStorage.setItem("esAdmin", "false");
          }
        });
        setTimeout(()=>{ //Se ejecuta el refresco de página un poco mas tarde para dar tiempo a que se guarden las credenciales en local storange
          document.location.reload();
        }, 1000);
      }
    });
  }
}
