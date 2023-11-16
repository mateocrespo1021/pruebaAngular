import { Injectable } from '@angular/core';
import { Curso } from './curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursos:Curso[]=[]

    

  agregarCurso(curso:Curso){
      this.cursos.push(curso)
  }

  
  modificarCurso(curso:Curso){
    this.cursos=this.cursos.filter(es=>es.id_curso != curso.id_curso)
    this.cursos =[...this.cursos , curso ]
    
  }

  eliminarCurso(id:string){
    this.cursos=this.cursos.filter(curso=> curso.id_curso !=  id)
  }
  constructor() { }
}
