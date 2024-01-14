import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
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
      switchMap(() =>
        this.peopleService
          .getPeople()
          .pipe(map((peopleData) => PeopleActions.AddPeople({ peopleData })))
      )
    )
  );
}
