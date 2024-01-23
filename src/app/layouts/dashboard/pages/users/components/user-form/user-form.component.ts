import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  selected = 'option2';
  userForm:FormGroup;
  @Output()
  userSubmitted = new EventEmitter();

  constructor ( private fb:FormBuilder) {
    this.userForm = this.fb.group({
        nombre: this.fb.control('',Validators.required),
        apellido: this.fb.control('',Validators.required),
        email: this.fb.control('',Validators.required),
       password: this.fb.control('',Validators.required),
        role: this.fb.control('',Validators.required)
  });

  }
  onsubmit(): void{
    this.userSubmitted.emit(this.userForm.value);
}}