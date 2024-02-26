import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { UsersComponent } from './users.component';
import { PagesDetailsComponent } from '../pages-details/pages-details.component';

@NgModule({
  imports:[
    RouterModule.forChild([
 {
  path:'',
  component:UsersComponent,
 },
 {
  path:':id',
  component:PagesDetailsComponent,
 }])
  ],
  exports:[RouterModule]
})
export class  UserRoutingModule{

}
