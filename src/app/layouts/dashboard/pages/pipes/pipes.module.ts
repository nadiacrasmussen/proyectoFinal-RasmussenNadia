import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FullNamePipe } from '../../../../shared/full-name.pipe';




@NgModule({
  declarations: [
    PipesComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule,SharedModule,
  ],
    exports: [
   PipesComponent,
   FullNamePipe
  ]
})
export class PipesModule { }
