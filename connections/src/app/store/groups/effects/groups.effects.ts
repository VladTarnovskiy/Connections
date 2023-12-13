import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, tap } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
import * as GroupsActions from '../actions/groups.action';
import { GroupsService } from 'src/app/connections/services/groups/groups.service';

@Injectable()
export class GroupsEffects {
  constructor(
    private actions$: Actions,
    private groupsService: GroupsService
  ) {}

  fetchGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsActions.FetchGroups),
      exhaustMap(() =>
        this.groupsService.getGroups().pipe(
          map((groupsData) => GroupsActions.AddGroups({ groupsData }))
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
