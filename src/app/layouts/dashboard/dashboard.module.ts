
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { adminGuard } from '../../core/guards/admin.guard';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
MatListModule,
RouterModule.forChild([
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'user',
    canActivate:[adminGuard],
    loadChildren:()=>
    import('./pages/users/users.module').then((m) => m.UsersModule)
  },
  {
    path:'cursos',
    loadChildren:()=>
    import('./pages/cursos/cursos.module').then((m) => m.CursosModule)
  },
])
  ],
  exports:[DashboardComponent,]
})
export class DashboardModule { }
