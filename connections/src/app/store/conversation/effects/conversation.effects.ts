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
        this.conversationService
          .createConversation(companion)
          .pipe(
            map((conversationID) =>
              ConversationActions.AddConversationID(conversationID)
            )
          )
      )
    )
  );

  fetchConversationData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConversationActions.FetchConversationData),
      switchMap(({ conversationID }) =>
        this.conversationService
          .getConversation(conversationID)
          .pipe(
            map((conversationData) =>
              ConversationActions.AddConversationData({ conversationData })
            )
          )
      )
    )
  );

  fetchSentConversationMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConversationActions.FetchConversationMessage),
      switchMap(({ messageData }) =>
        this.conversationService.sentMessage(messageData).pipe(
          map(() => {
            return ConversationActions.AddConversationMessage({ messageData });
          })
        )
      )
    )
  );

  fetchDeleteConversation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConversationActions.FetchConversationDelete),
      switchMap(({ conversationID }) =>
        this.conversationService.deleteConversation(conversationID).pipe(
          map(() => {
            return ConversationActions.DeleteConversation();
          })
        )
      )
    )
  );
}
