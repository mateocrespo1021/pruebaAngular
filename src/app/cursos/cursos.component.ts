import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from './curso.interface';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent {
  constructor(
    private cursosService: CursosService,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  public myForm: FormGroup = this.fb.group({
    nombre_curso: ['', [Validators.required]],
    paralelo: ['', [Validators.required]],
  });

  public modoActualizar: boolean = false;

  public idCursoModificar!:string

  get cursos(): Curso[] {
    return this.cursosService.cursos;
  }

  onSave() {
    if (this.myForm.invalid) return;

    if (this.modoActualizar) {
      this.cursosService.modificarCurso({...this.myForm.value , id_curso: this.idCursoModificar });
      this.modoActualizar=false
      this.idCursoModificar=''
    } else {
      const id_curso = this.appService.generateUniqueId();
      this.cursosService.agregarCurso({
        ...this.myForm.value,
        id_curso,
      });
    }


    

    this.myForm.reset({});
  }

  llenarCamposActualizar(curso: Curso) {
    this.myForm.patchValue(curso);
    this.modoActualizar = true;
    this.idCursoModificar=curso.id_curso
  }

  onDelete(id:string){
   this.cursosService.eliminarCurso(id)
  }
}
