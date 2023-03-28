import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * Componente que contiene la barra de navegación
 */
export class NavbarComponent {
  /**
   * Variable que contiene si el usuario se ha logueado en el localStorange
   */
  login: any = localStorage.getItem("login");
  /**
   * Variable que contiene si el usuario es admin en el localStorange
   */
  admin: any = localStorage.getItem("esAdmin");
  /**
   * Función que hace de logoff al usuario eliminando todos los tokens del localStorange
   */
  logoff(): void{
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    localStorage.removeItem("esAdmin");
    window.location.reload();
  }
}
