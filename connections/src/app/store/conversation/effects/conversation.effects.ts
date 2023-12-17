import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as ConversationActions from '../actions/conversation.action';
import { ConversationService } from 'src/app/connections/services/conversation/conversation.service';

@Injectable()
export class ConversationEffects {
  constructor(
    private actions$: Actions,
    private conversationService: ConversationService
  ) {}

  fetchConversation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConversationActions.FetchCreateConversation),
      switchMap(({ companion }) =>
        this.conversationService.createConversation(companion).pipe(
          map((conversationID) =>
            ConversationActions.AddConversationID(conversationID)
          )
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  fetchConversationData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConversationActions.FetchConversationData),
      switchMap(({ conversationID }) =>
        this.conversationService.getConversation(conversationID).pipe(
          map((conversationData) =>
            ConversationActions.AddConversationData({ conversationData })
          )
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );
}
