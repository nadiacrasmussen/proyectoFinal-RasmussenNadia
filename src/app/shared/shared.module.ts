import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontSizeDirective } from './font-size.directive';
import { UsersComponent } from '../layouts/dashboard/pages/users/users.component';



@NgModule({
  declarations: [
FontSizeDirective
  ],
  imports: [
    CommonModule,
  ],
exports:[FontSizeDirective]

})
export class SharedModule { }
