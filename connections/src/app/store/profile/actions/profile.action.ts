import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/profile/models/profile';

const actionSource = '[Profile]';

export const FetchProfile = createAction(`${actionSource} Fetch Profile`);

export const FetchUpdateProfile = createAction(
  `${actionSource} Fetch Update Profile`,
  props<{ name: string }>()
);

export const AddProfile = createAction(
  `${actionSource} Add Profile`,
  props<{ profileData: IProfile }>()
);

export const UpdateProfile = createAction(
  `${actionSource} Update Profile`,
  props<{ name: string }>()
);

export const ChangeEditProfile = createAction(
  `${actionSource} Change Edit Profile`,
  props<{ edit: boolean }>()
);

export const ChangeIsLoadingProfile = createAction(
  `${actionSource} Change IsLoading Profile`,
  props<{ isLoading: boolean }>()
);

export const RemoveProfile = createAction(`${actionSource} Remove Profile`);
