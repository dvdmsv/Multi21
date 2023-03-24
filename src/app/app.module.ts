import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistroComponent } from './vistas/registro/registro.component';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TemporadaEnCursoComponent } from './vistas/temporada-en-curso/temporada-en-curso.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { GestionarUsuariosComponent } from './vistas/gestionar-usuarios/gestionar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    TemporadaEnCursoComponent,
    GestionarUsuariosComponent,
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
