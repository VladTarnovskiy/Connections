import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import { ValidatePassword } from './validators.ts/password';
import { ValidateName } from './validators.ts/name';
import { UserDetails } from '../../models/registration';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectRegisterLoading } from 'src/app/store/auth/selectors/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(selectRegisterLoading);
  isLoading = false;
  subscription!: Subscription;
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), ValidateName()]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, ValidatePassword()]],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const formUserData = this.registerForm.getRawValue() as UserDetails;
    if (this.registerForm.status === 'VALID' && this.isLoading === false) {
      this.store.dispatch(
        AuthActions.FetchRegister({ registerData: formUserData })
      );
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
