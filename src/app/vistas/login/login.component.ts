import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Componente que permite el login para acceder a la web
 */
export class LoginComponent {
  /**
   * Variable que contiene true o false si el usuario está ya registrado o no
   */
  usuarios: any;
  /**
   * Variable que almacena si el usuario existe o no
   */
  existe: String = "";
  /**
   * Variable que almacena si el usuario es admin o no
   */
  admin: String = "";
  /**
   * Objeto usuario que se modifica en la vista HTML con los datos introducidos en el forumulario
   */
  usuario={
    id: 0,
    username: "",
    password: "",
    admin: ""
  }
  /**
   * Constructor del componente LoginComponent
   * @param usuariosServicio servicio que contiene los métodos para conectarse con la base de datos en lo relativo a usuarios
   * @param router habilita la navegación
   * @param snackBar habilita los mensajes popup
   */
  constructor(private usuariosServicio: UsuariosService, private router: Router, private snackBar: MatSnackBar){}
  /**
   * Función que se ejecuta cuando se carga el componente
   */
  ngOnInit(){
    //Si el usuario está logueado redirige a la página principal
    if(localStorage.getItem("login") != null){
      this.router.navigate(['/']);
    }
  }
  /**
   * Función que realiza el login en la base de datos
   * @param username nombre de usuario
   * @param password contraseña del usuario
   */
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
