import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ValidatePassword } from './validators/validators';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, ValidatePassword()]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.authService.login(this.loginForm.getRawValue()).subscribe(() => {
        this.router.navigate(['/youtube']);
      });
    }
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
