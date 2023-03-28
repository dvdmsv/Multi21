import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuariosBD/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
/**
 * Componente que contiene el registro de usuarios
 */
export class RegistroComponent {
  /**
   * Variable que indica si el suaurio que se va a registra existe ya en la base de datos
   */
  registrado: string = "";

  /**
   * Objeto usuario que se modifica en la vista HTML con los datos introducidos en el forumulario
   */
  usuario={
    id: 0,
    username: "",
    password: ""
  }
  /**
   * Constructor de RegistroComponent
   * @param usuariosServicio servicio que contiene los métodos para conectarse con la base de datos en lo relativo a usuarios
   * @param router habilita la navegación
   */
  constructor(private usuariosServicio: UsuariosService, private router: Router){}
  /**
   * @ignore
   */
  ngOnInit(){
  }
  /**
   * Función que registra un usuario en la base de datos
   * @param username nombre del usuario
   * @param password contraseña del usuario
   */
  registro(username: string, password: string){
    this.usuariosServicio.registro(username, password).subscribe((result: any)=> {
      this.registrado = result;
      if(this.registrado == "true"){
        this.router.navigate(['/login']);
      }
    });
  }
}
