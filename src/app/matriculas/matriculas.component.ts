import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatriculasService } from './matriculas.service';
import { AppService } from '../app.service';
import { Matricula } from './matricula.interface';
import { Curso } from '../cursos/curso.interface';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css'],
})
export class MatriculasComponent {
  constructor(
    private matriculaService: MatriculasService,
    private fb: FormBuilder,
    private appService: AppService,
    private cursosService:CursosService
  ) {}

  public myForm: FormGroup = this.fb.group({
    id_estudiante: ['', [Validators.required]],
    id_curso: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    seccion: ['', [Validators.required]],
    periodo: ['', [Validators.required]],
    responsable_matricula: ['', [Validators.required]],
  });

  get matriculas(): Matricula[] {
    return this.matriculaService.matriculas;
  }

  get cursos():Curso[]{
    return this.cursosService.cursos
  }

  onSave() {
    if (this.myForm.invalid) return;

    const id_matricula = this.appService.generateUniqueId();
    this.matriculaService.agregarMatricula({
      ...this.myForm.value,
      id_matricula,
    });

    this.myForm.reset({});
  }

  onDelete(id: string) {
    this.matriculaService.eliminarMatricula(id);
  }
}
