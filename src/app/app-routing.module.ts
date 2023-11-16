import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CursosComponent } from './cursos/cursos.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'cursos', component:   CursosComponent},
  {path: 'matriculas', component:   MatriculasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
