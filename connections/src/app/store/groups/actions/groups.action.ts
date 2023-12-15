import { createAction, props } from '@ngrx/store';
import { IGroup } from 'src/app/connections/models/groups';

const actionSource = '[Groups]';

export const FetchGroups = createAction(`${actionSource} Fetch Groups`);

export const AddGroups = createAction(
  `${actionSource} Add Groups`,
  props<{ groupsData: IGroup[] }>()
);

export const ChangeTimerGroups = createAction(
  `${actionSource} Change Timer Groups`,
  props<{ timer: number }>()
);

export const ChangeIsActive = createAction(
  `${actionSource} Change IsActive`,
  props<{ isActive: boolean }>()
);

export const ChangeIsModal = createAction(
  `${actionSource} Change IsModal`,
  props<{ isModal: boolean }>()
);

export const FetchCreateGroup = createAction(
  `${actionSource} Fetch Create Groups`,
  props<{ name: string }>()
);

export const AddGroup = createAction(
  `${actionSource} Add Group`,
  props<{ name: string }>()
);

// export const UpdateGroups = createAction(
//   `${actionSource} Update Groups`,
//   props<{ name: string }>()
// );

// export const ChangeEditGroups = createAction(
//   `${actionSource} Change Edit Groups`,
//   props<{ edit: boolean }>()
// );

export const RemoveGroup = createAction(`${actionSource} Remove Groups`);
