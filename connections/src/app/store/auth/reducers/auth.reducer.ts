import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';
import { IUserDataStorage } from 'src/app/auth/models/registration';

export interface AuthState {
  authData: IUserDataStorage | null;
  isLoadingLogin: boolean;
  isLoadingRegister: boolean;
}

export const initialState: AuthState = {
  authData: null,
  isLoadingLogin: false,
  isLoadingRegister: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.FetchLogin, (state) => ({
    ...state,
    isLoadingLogin: true,
  })),
  on(AuthActions.FetchRegister, (state) => ({
    ...state,
    isLoadingRegister: true,
  })),
  on(AuthActions.AddUserData, (state, { authData }) => ({
    ...state,
    authData,
    isLoadingLogin: false,
  })),
  on(AuthActions.AddRegisterLoading, (state) => ({
    ...state,
    isLoadingRegister: false,
  })),
  on(AuthActions.RemoveAuthData, (state) => ({
    ...state,
    authData: null,
  })),
  on(
    AuthActions.ChangeAuthRegisterIsLoading,
    (state, { isLoadingRegister }) => ({
      ...state,
      isLoadingRegister,
    })
  ),
  on(AuthActions.ChangeAuthLoginIsLoading, (state, { isLoadingLogin }) => ({
    ...state,
    isLoadingLogin,
  }))
);
