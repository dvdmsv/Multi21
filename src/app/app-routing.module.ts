import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirUsuariosComponent } from './vistas/anadir-usuarios/anadir-usuarios.component';
import { CardsInicioComponent } from './vistas/cards-inicio/cards-inicio.component';
import { GestionarUsuariosComponent } from './vistas/gestionar-usuarios/gestionar-usuarios.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RevisarComentariosEliminadosComponent } from './vistas/revisar-comentarios-eliminados/revisar-comentarios-eliminados.component';
import { RevisarComentariosComponent } from './vistas/revisar-comentarios/revisar-comentarios.component';
import { TemporadaEnCursoComponent } from './vistas/temporada-en-curso/temporada-en-curso.component';
import { PilotosComponent } from './vistas/pilotos/pilotos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'temporadaEnCurso',
    component: TemporadaEnCursoComponent
  },
  {
    path: 'gestionar-usuarios',
    component: GestionarUsuariosComponent
  },
  {
    path: 'anadir-usuarios',
    component: AnadirUsuariosComponent
  }
  ,
  {
    path: 'cards-inicio',
    component: CardsInicioComponent
  },
  {
    path: '',
    component: CardsInicioComponent
  },
  {
    path: 'revisar-comentarios-eliminados',
    component: RevisarComentariosEliminadosComponent
  },
  {
    path: 'revisar-comentarios',
    component: RevisarComentariosComponent
  },
  {
    path: 'pilotos',
    component: PilotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
