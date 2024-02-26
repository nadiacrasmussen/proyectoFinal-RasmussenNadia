import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontSizeDirective } from './font-size.directive';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
FontSizeDirective
  ],
  imports: [
    CommonModule,MatTableModule,MatIconModule,MatFormFieldModule
  ],
exports:[FontSizeDirective,MatTableModule,MatIconModule,MatCardModule,MatFormFieldModule  ,ReactiveFormsModule,
]

})
export class SharedModule { }
