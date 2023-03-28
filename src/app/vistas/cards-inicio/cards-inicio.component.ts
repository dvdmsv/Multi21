import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-inicio',
  templateUrl: './cards-inicio.component.html',
  styleUrls: ['./cards-inicio.component.css']
})
/**
 * Componente que contiene cartas en el inicio de la web
 */
export class CardsInicioComponent {
  /**
   * Constructor de CardsInicioComponent
   * @param router método para habilitar navegación
   */
  constructor(private router: Router){}
  /**
   * Función que se encarga de redirigir la vista a /temporadaEnCurso
   */
  temporadaEnCurso(){
    this.router.navigate(['/temporadaEnCurso']);
  }
}
