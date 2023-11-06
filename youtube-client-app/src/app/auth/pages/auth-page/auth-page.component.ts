import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
