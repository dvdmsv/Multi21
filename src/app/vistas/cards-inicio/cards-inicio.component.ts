import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-inicio',
  templateUrl: './cards-inicio.component.html',
  styleUrls: ['./cards-inicio.component.css']
})
export class CardsInicioComponent {
  constructor(private router: Router){}

  temporadaEnCurso(){
    this.router.navigate(['/temporadaEnCurso']);
  }
}
