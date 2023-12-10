import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidatePassword } from './validators.ts/password';
import { ValidateName } from './validators.ts/name';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), ValidateName()]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, ValidatePassword()]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  onSubmit() {
    if (this.registerForm.status === 'VALID') {
      this.authService
        .register(this.registerForm.getRawValue())
        .subscribe(() => {
          this.router.navigate(['auth/login']);
        });
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
