import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { cursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, SharedModule],
  providers: [cursosService],
})
export class CursosModule {}
