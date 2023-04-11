import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';


import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { TemporadaEnCursoComponent } from './vistas/temporada-en-curso/temporada-en-curso.component';
import { GestionarUsuariosComponent } from './vistas/gestionar-usuarios/gestionar-usuarios.component';
import { AnadirUsuariosComponent } from './vistas/anadir-usuarios/anadir-usuarios.component';
import { CardsInicioComponent } from './vistas/cards-inicio/cards-inicio.component';
import { RevisarComentariosEliminadosComponent } from './vistas/revisar-comentarios-eliminados/revisar-comentarios-eliminados.component';
import { RevisarComentariosComponent } from './vistas/revisar-comentarios/revisar-comentarios.component';
import { PilotosComponent } from './vistas/pilotos/pilotos.component';
import { PilotosSeguidosComponent } from './vistas/pilotos-seguidos/pilotos-seguidos.component';
import { ClasificacionActualizadaComponent } from './vistas/clasificacion-actualizada/clasificacion-actualizada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    TemporadaEnCursoComponent,
    GestionarUsuariosComponent,
    AnadirUsuariosComponent,
    CardsInicioComponent,
    RevisarComentariosEliminadosComponent,
    RevisarComentariosComponent,
    PilotosComponent,
    PilotosSeguidosComponent,
    ClasificacionActualizadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
