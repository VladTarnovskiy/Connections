import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';
import * as CardsActions from '../actions/cards.action';

import { catchError, map, of, exhaustMap } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: SearchDataService
  ) {}

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.FetchCards),
      exhaustMap(
        this.userService.fetchUser().pipe(
          map((cards) => CardsActions.FetchCardsSuccess({ cards })),
          catchError(() => of(CardsActions.FetchCardsFailed()))
        )
      )
    )
  );

  clearData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardsActions.ClearCardsData)
        // tap(() => {
        //   this.userService.clearToken();
        // })
      ),
    { dispatch: false }
  );
}
