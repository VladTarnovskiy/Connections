import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
import * as AuthActions from '../actions/auth.action';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  fetchLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.FetchLogin),
      exhaustMap(({ loginData }) =>
        this.authService.login(loginData).pipe(
          map((authData) => AuthActions.AddUserData({ authData }))
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  fetchRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.FetchRegister),
      exhaustMap(({ registerData }) =>
        this.authService.register(registerData).pipe(
          map(() => AuthActions.AddRegisterLoading())
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );
}
