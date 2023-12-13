import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/profile/models/profile';

const actionSource = '[People]';

export const FetchPeople = createAction(`${actionSource} Fetch People`);

export const FetchUpdatePeople = createAction(
  `${actionSource} Fetch Update People`,
  props<{ name: string }>()
);

export const AddPeople = createAction(
  `${actionSource} Add People`,
  props<{ peopleData: IProfile }>()
);

export const UpdatePeople = createAction(
  `${actionSource} Update People`,
  props<{ name: string }>()
);

// export const ChangeEditPeople = createAction(
//   `${actionSource} Change Edit Profile`,
//   props<{ edit: boolean }>()
// );

export const RemovePeople = createAction(`${actionSource} Remove People`);
