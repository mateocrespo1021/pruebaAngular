import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  public estudiantes:Estudiante[]=[]

    

  agregarEstudiante(estudiante:Estudiante){
      this.estudiantes.push(estudiante)
  }

  
  modificarEstudiante(estudiante:Estudiante){
    this.estudiantes=this.estudiantes.filter(es=>es.id_estudiante != estudiante.id_estudiante)
    this.estudiantes =[...this.estudiantes , estudiante ]
    
  }

  eliminarEstudiante(id:string){
    this.estudiantes=this.estudiantes.filter(estudiante=> estudiante.id_estudiante !=  id)
  }


  constructor() { }
}
