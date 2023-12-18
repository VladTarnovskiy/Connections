import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as GroupDialog from '../actions/groupDialog.action';
import { GroupDialogService } from 'src/app/connections/services/group-dialog/group-dialog.service';

@Injectable()
export class GroupDialogEffects {
  constructor(
    private actions$: Actions,
    private conversationService: GroupDialogService
  ) {}

  fetchGroupDialogData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupDialog.FetchGroupDialogData),
      switchMap(({ groupID }) =>
        this.conversationService
          .getGroup(groupID)
          .pipe(
            map((groupData) => GroupDialog.AddGroupDialogData({ groupData }))
          )
      )
    )
  );

  fetchSentGroupDialogMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupDialog.FetchGroupDialogMessage),
      switchMap(({ messageData }) =>
        this.conversationService.sentMessage(messageData).pipe(
          map(() => {
            return GroupDialog.AddGroupDialogMessage({ messageData });
          })
        )
      )
    )
  );
}
