import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    recordar: [''],
  })
  isInvalidForm: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  acceder(): void {
    console.log("validando");
    this.isInvalidForm = this.loginForm.invalid;
    if (this.isInvalidForm) {
      this.loginForm.markAllAsTouched();
    } else {
      console.log('OK');
    }
  }

}
