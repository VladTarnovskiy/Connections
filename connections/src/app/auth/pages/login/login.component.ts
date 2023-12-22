import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import { Observable, Subscription } from 'rxjs';
import { selectLoginLoading } from 'src/app/store/auth/selectors/auth.selectors';
import { UserDetails } from '../../models/registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(selectLoginLoading);
  isLoading = false;
  subscription!: Subscription;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const formUserData = this.loginForm.getRawValue() as Omit<
      UserDetails,
      'name'
    >;
    if (this.loginForm.status === 'VALID' && this.isLoading === false) {
      this.store.dispatch(AuthActions.FetchLogin({ loginData: formUserData }));
    }
  }

  ngOnInit(): void {
    this.subscription = this.isLoading$.subscribe((value) => {
      this.isLoading = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
