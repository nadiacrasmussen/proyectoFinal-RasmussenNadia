import { cursos } from './models/index';
import { Component } from '@angular/core';
import { cursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  displayedColumns=['id','nombre','fecha de inicio','fecha de inicio','horario','duracion','inscripcion'];

  cursos :cursos[]=[]
constructor (private cursosService: cursosService){
  this.cursosService.getCursos().subscribe({
    next:(cursos)=>{
      this.cursos = cursos;
    }
  });}
  oneDelete(id:number){
    this.cursosService.deleteCursoById(id).subscribe({
      next :(cursos) =>{
      this.cursos =cursos;

      }
    })
  }
}

