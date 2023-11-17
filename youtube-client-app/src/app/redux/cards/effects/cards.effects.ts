import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';
import * as CardsActions from '../actions/cards.action';

import { catchError, map, of, exhaustMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private userService: SearchDataService
  ) {}

  fetchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.FetchCards),
      exhaustMap(({ searchValue }) =>
        this.userService.getCards(searchValue).pipe(
          map((cardsInfo) => CardsActions.FetchCardsSuccess({ cardsInfo })),
          catchError((error: HttpErrorResponse) => {
            const handleError = this.userService.handleError(error);
            return of(CardsActions.FetchCardsFailed({ error: handleError }));
          })
        )
      )
    )
  );

  changePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.ChangePage),
      exhaustMap(({ pageToken, searchValue }) =>
        this.userService.getCards(searchValue, pageToken).pipe(
          map((cardsInfo) => CardsActions.FetchCardsSuccess({ cardsInfo })),
          catchError((error: HttpErrorResponse) => {
            const handleError = this.userService.handleError(error);
            return of(CardsActions.FetchCardsFailed({ error: handleError }));
          })
        )
      )
    )
  );
}
