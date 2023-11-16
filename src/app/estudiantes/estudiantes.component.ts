import { Component } from '@angular/core';
import { Estudiante } from './estudiante.interface';
import { EstudiantesService } from './estudiantes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent {
  constructor(
    private estudianteService: EstudiantesService,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  public myForm: FormGroup = this.fb.group({
    cedula: ['', [Validators.required]],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
  });

  public modoActualizar: boolean = false;

  public idEstudianteModificar!:string

  get estudiantes(): Estudiante[] {
    return this.estudianteService.estudiantes;
  }

  onSave() {
    if (this.myForm.invalid) return;

    if (this.modoActualizar) {
      this.estudianteService.modificarEstudiante({...this.myForm.value , id_estudiante: this.idEstudianteModificar });
      this.modoActualizar=false
      this.idEstudianteModificar=''
    } else {
      const id_estudiante = this.appService.generateUniqueId();
      this.estudianteService.agregarEstudiante({
        ...this.myForm.value,
        id_estudiante,
      });
    }

    console.log(this.estudiantes);
    

    this.myForm.reset({});
  }

  llenarCamposActualizar(estudiante: Estudiante) {
    this.myForm.patchValue(estudiante);
    this.modoActualizar = true;
    this.idEstudianteModificar=estudiante.id_estudiante
  }

  onDelete(id:string){
   this.estudianteService.eliminarEstudiante(id)
  }
}
