import { createAction, props } from '@ngrx/store';
import { IPerson } from 'src/app/connections/models/people';

const actionSource = '[People]';

export const FetchPeople = createAction(`${actionSource} Fetch People`);

// export const FetchUpdateGroups = createAction(
//   `${actionSource} Fetch Update Groups`,
//   props<{ name: string }>()
// );

export const AddPeople = createAction(
  `${actionSource} Add People`,
  props<{ peopleData: IPerson[] }>()
);

export const ChangeTimerPeople = createAction(
  `${actionSource} Change Timer People`,
  props<{ timer: number }>()
);

export const ChangeIsActive = createAction(
  `${actionSource} Change IsActive`,
  props<{ isActive: boolean }>()
);

// export const UpdateGroups = createAction(
//   `${actionSource} Update Groups`,
//   props<{ name: string }>()
// );

// export const ChangeEditGroups = createAction(
//   `${actionSource} Change Edit Groups`,
//   props<{ edit: boolean }>()
// );

export const RemovePeople = createAction(`${actionSource} Remove People`);