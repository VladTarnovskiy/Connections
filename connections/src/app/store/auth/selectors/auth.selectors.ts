import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthStore = createFeatureSelector<AuthState>('authData');

export const selectAuthData = createSelector(
  selectAuthStore,
  (state: AuthState) => state.authData
);

export const selectLoginLoading = createSelector(
  selectAuthStore,
  (state: AuthState) => state.isLoadingLogin
);

export const selectRegisterLoading = createSelector(
  selectAuthStore,
  (state: AuthState) => state.isLoadingRegister
);
