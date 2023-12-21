import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
import * as ProfileActions from '../actions/profile.action';
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  fetchProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.FetchProfile),
      exhaustMap(() =>
        this.profileService
          .getProfile()
          .pipe(
            map((profileData) => ProfileActions.AddProfile({ profileData }))
          )
      )
    )
  );

  fetchUpdateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.FetchUpdateProfile),
      exhaustMap(({ name }) =>
        this.profileService
          .updateProfile(name)
          .pipe(map((name) => ProfileActions.UpdateProfile({ name })))
      )
    )
  );

  fetchRemoveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.FetchRemoveProfile),
      exhaustMap(() =>
        this.authService
          .logout()
          .pipe(map(() => ProfileActions.RemoveProfile()))
          .pipe(map(() => AuthActions.RemoveAuthData()))
      )
    )
  );
}
