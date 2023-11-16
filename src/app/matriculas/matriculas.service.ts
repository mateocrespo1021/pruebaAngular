import { Injectable } from '@angular/core';
import { Matricula } from './matricula.interface';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
  public matriculas:Matricula[]=[]

    

  agregarMatricula(matricula:Matricula){
      this.matriculas.push(matricula)
  }

  

  eliminarMatricula(id:string){
    this.matriculas=this.matriculas.filter(matricula=> matricula.id_matricula !=  id)
  }
  
  constructor() { }
}
