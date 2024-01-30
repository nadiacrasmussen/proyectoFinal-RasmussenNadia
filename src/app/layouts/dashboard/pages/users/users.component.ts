import { Component } from '@angular/core';
import {user} from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id','fullName',  'email', 'role'];
  dataSource: user[]=[
     {
      id: 1,
      firstName:'Nadia',
      lastName: 'Rasmussen',
      email: 'nadiacrasmussen@gmail.com',
      password: 'nadia123',
      role:'alumno'
     },
     {
      id:2 ,
      firstName:'Daiana',
      lastName: 'Marquez',
      email: 'daimarquez@gmail.com',
      password: 'dai1548',
      role:'alumno'
     },
     {
      id: 3,
      firstName:'Micaela',
      lastName: 'Ramirez',
      email: 'ramirezmica@gmail.com',
      password: 'lulurami',
      role:'alumno'
     },
     {
      id: 4,
      firstName:'Julieta',
      lastName: 'Zagame',
      email: 'julizagame@gmail.com',
      password: 'julieta55',
      role:'alumno'
     }
  ];
  onUserSubmitted(ev:user):void{

    this.dataSource=[...this.dataSource,{...ev,id:new Date().getTime()}];
  }
}
