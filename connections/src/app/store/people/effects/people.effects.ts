import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
import * as PeopleActions from '../actions/people.action';
import { PeopleService } from 'src/app/connections/services/people/people.service';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  fetchPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.FetchPeople),
      exhaustMap(() =>
        this.peopleService.getPeople().pipe(
          map((peopleData) => PeopleActions.AddPeople({ peopleData }))
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  // fetchUpdateProfile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProfileActions.FetchUpdateProfile),
  //     exhaustMap(({ name }) =>
  //       this.profileService.updateProfile(name).pipe(
  //         map((name) => ProfileActions.UpdateProfile({ name }))
  //         // catchError((error: HttpErrorResponse) => {
  //         //   const handleError = this.userService.handleError(error);
  //         //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //         // }),
  //       )
  //     )
  //   )
  // );
}
