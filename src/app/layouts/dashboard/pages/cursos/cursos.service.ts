import { Injectable } from "@angular/core";
import { cursos } from './models/index';
import { of } from "rxjs";

let curso : cursos[] = [
  {
  id:1,
  nombre:'Instructurado de preparacion fisica deportiva',
   fechaDeInicio: new Date('04/03/2024'),
   fechaDeFin:new Date('29/07/2024'),
   horario: 'Lunes, Miercoles y Viernes de 16hs a 20hs',
   duracion: '4 Meses'
  },
  {
    id:1,
    nombre:'Capacitacion de Nutricion en deportiva',
     fechaDeInicio: new Date('04/04/2024'),
     fechaDeFin:new Date('30/06/2024'),
     horario: 'Martes y Jueves 15.30hs a 20.30hs',
     duracion: '2 Meses'
    },
    {
      id:1,
      nombre:'Instructurado de musculacion y entrenamiento funcional',
       fechaDeInicio: new Date('01/04/2024'),
       fechaDeFin:new Date('29/11/2024'),
       horario:'Martes y Jueves 14hs a 17hs',
       duracion: '8 Meses'
      },
      {
        id:1,
        nombre:'Instructurado de personal trainer',
         fechaDeInicio: new Date('11/03/2024'),
         fechaDeFin:new Date('25/10/2024'),
         horario: 'Lunes, Miercoles y viernes de 15hs a 19hs',
         duracion: '4 Meses'
        }
]

 @Injectable()
export class cursosService{
  getCursos(){
    return of(curso);
  }

  deleteCursoById(id:number){
    curso = curso.filter((el)=> id != id);
    return this.getCursos();
  }
}
