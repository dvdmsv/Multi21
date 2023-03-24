import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarUsuariosComponent } from './vistas/gestionar-usuarios/gestionar-usuarios.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { TemporadaEnCursoComponent } from './vistas/temporada-en-curso/temporada-en-curso.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
