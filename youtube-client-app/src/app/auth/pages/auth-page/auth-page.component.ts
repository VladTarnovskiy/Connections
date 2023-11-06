import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.loginForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/youtube']);
    });
  }
}
