import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
import * as AuthActions from '../actions/auth.action';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  fetchLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.FetchLogin),
      exhaustMap(({ loginData }) =>
        this.authService
          .login(loginData)
          .pipe(map((authData) => AuthActions.AddUserData({ authData })))
      )
    )
  );

  fetchRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.FetchRegister),
      exhaustMap(({ registerData }) =>
        this.authService
          .register(registerData)
          .pipe(map(() => AuthActions.AddRegisterLoading()))
      )
    )
  );
}
