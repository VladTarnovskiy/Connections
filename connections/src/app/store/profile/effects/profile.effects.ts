import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, tap } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
import * as ProfileActions from '../actions/profile.action';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  fetchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.FetchProfile),
      exhaustMap(() =>
        this.profileService.getProfile().pipe(
          map((profileData) => ProfileActions.AddProfile({ profileData }))
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  // changePage$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CardsActions.ChangeCurrentPage),
  //     exhaustMap(({ pageToken, searchValue }) =>
  //       this.userService.getCards(searchValue, pageToken).pipe(
  //         map((cardsInfo) => CardsActions.FetchCardsSuccess({ cardsInfo }))
  //         // catchError((error: HttpErrorResponse) => {
  //         //   const handleError = this.userService.handleError(error);
  //         //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //         // }),
  //       )
  //     )
  //   )
  // );
}
