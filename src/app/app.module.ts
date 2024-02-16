import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { PagesDetailsComponent } from './layouts/dashboards/pages/users/pages-details/pages-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
   MatFormFieldModule
  ],
  providers: [
    {provide:  MAT_FORM_FIELD_DEFAULT_OPTIONS,
       useValue: {appearance: 'outline'},
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
