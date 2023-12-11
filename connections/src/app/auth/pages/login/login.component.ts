import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: () => {
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (err: HttpErrorResponse) => {
          this.authService.handleError(err);
        },
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
