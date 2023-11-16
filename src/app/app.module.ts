import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudiantesComponent,
    CursosComponent,
    MatriculasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
