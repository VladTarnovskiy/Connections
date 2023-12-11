import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/profile/models/profile';

const actionSource = '[Profile]';

export const FetchProfile = createAction(`${actionSource} Fetch Profile`);

export const AddProfile = createAction(
  `${actionSource} Add Profile`,
  props<{ profileData: IProfile }>()
);

export const UpdateProfile = createAction(
  `${actionSource} Update Profile`,
  props<{ name: string }>()
);

// export const RemoveFavCard = createAction(
//   `${actionSource} Remove Fav Card`,
//   props<{ key: string }>(),
// );

// export const FavCardsFailed = createAction(
//   `${actionSource} Fav Cards Failed`,
//   props<{ error: string }>(),
// );
