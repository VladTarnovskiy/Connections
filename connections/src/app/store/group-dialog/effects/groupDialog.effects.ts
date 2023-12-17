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

  fetchGroupDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupDialog.FetchCreateGroupDialog),
      switchMap(({ name }) =>
        this.conversationService.createGroup(name).pipe(
          map((groupID) => GroupDialog.AddGroupDialogID(groupID))
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  fetchGroupDialogData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupDialog.FetchGroupDialogData),
      switchMap(({ groupID }) =>
        this.conversationService.getGroup(groupID).pipe(
          map((groupData) => GroupDialog.AddGroupDialogData({ groupData }))
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
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
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  fetchDeleteGroupDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupDialog.FetchGroupDialogDelete),
      switchMap(({ groupID }) =>
        this.conversationService.deleteGroup(groupID).pipe(
          map(() => {
            return GroupDialog.DeleteGroupDialog();
          })
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );
}
