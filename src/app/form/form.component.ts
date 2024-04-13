import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { customNumberValidator } from '../validators/customNumberValidator';
import { MessageComponent } from '../message/message.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MessageComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  showErrorText: boolean = false
  inputFocus: boolean = false
  messageText = ''
  messageType = 'info'
  
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    experience: ['', [Validators.required, customNumberValidator(1,1)]]
  })

  onFormSubmit(){
    console.log(this.userForm.value)
      if(this.userForm.status === 'INVALID'){
        this.messageText = 'Form is not valid'
        this.messageType = 'error'
      }
      if(this.userForm.status === 'VALID'){
        this.messageText = 'Success'
        this.messageType = 'success'
      }
    }
  
  resetForm(){
    this.userForm.reset()
    this.messageText = 'Form cleared'
    this.messageType = 'info'
  }

  onInputBlur(){
    this.showErrorText = true
    this.inputFocus = false
  }

  onFocus(){
    this.inputFocus = true
    this.messageText = ''
    this.messageType = 'info'
  }

  onInput(){
    this.showErrorText = false
  }

  constructor(private formBuilder: FormBuilder){}
}

