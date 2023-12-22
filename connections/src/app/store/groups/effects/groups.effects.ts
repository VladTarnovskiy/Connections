import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
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
        this.groupsService
          .getGroups()
          .pipe(map((groupsData) => GroupsActions.AddGroups({ groupsData })))
      )
    )
  );

  fetchCreateGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsActions.FetchCreateGroup),
      exhaustMap(({ name, userID }) =>
        this.groupsService
          .createGroup(name)
          .pipe(
            map((groupID) => GroupsActions.AddGroup({ name, userID, groupID }))
          )
      )
    )
  );

  fetchDeleteGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsActions.FetchDeleteGroup),
      exhaustMap(({ groupID }) =>
        this.groupsService
          .deleteGroup(groupID)
          .pipe(map(() => GroupsActions.DeleteGroup({ groupID })))
      )
    )
  );
}
