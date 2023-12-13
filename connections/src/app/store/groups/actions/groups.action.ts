import { createAction, props } from '@ngrx/store';
import { IGroup } from 'src/app/connections/models/groups';

const actionSource = '[Groups]';

export const FetchGroups = createAction(`${actionSource} Fetch Groups`);

// export const FetchUpdateGroups = createAction(
//   `${actionSource} Fetch Update Groups`,
//   props<{ name: string }>()
// );

export const AddGroups = createAction(
  `${actionSource} Add Groups`,
  props<{ groupsData: IGroup[] }>()
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
