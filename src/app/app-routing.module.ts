import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
  },
    {  path:'login',
      component:LoginComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
