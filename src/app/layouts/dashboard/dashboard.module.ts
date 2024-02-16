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
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesDetailsComponent } from '../dashboards/pages/users/pages-details/pages-details.component';

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
    path:' ',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'users/:id',
    component:PagesDetailsComponent
  }

])
  ],
  exports:[DashboardComponent,]
})
export class DashboardModule { }
