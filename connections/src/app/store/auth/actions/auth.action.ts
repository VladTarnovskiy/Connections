import { createAction, props } from '@ngrx/store';
import {
  IUserDataStorage,
  UserDetails,
} from 'src/app/auth/models/registration';

const actionSource = '[Auth]';

export const FetchRegister = createAction(
  `${actionSource} Fetch Register`,
  props<{ registerData: UserDetails }>()
);

export const FetchLogin = createAction(
  `${actionSource} Fetch Login`,
  props<{ loginData: Omit<UserDetails, 'name'> }>()
);

export const AddUserData = createAction(
  `${actionSource} Add UserData`,
  props<{ authData: IUserDataStorage }>()
);

export const ChangeAuthRegisterIsLoading = createAction(
  `${actionSource} Change Auth Register IsLoading`,
  props<{ isLoadingRegister: boolean }>()
);

export const ChangeAuthLoginIsLoading = createAction(
  `${actionSource} Change Auth Login IsLoading`,
  props<{ isLoadingLogin: boolean }>()
);

export const AddRegisterLoading = createAction(
  `${actionSource} Add RegisterLoading`
);

export const RemoveAuthData = createAction(`${actionSource} Remove AuthData`);
