import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from '../reducers/profile.reducer';

export const selectProfileStore =
  createFeatureSelector<ProfileState>('profile');

export const selectProfileData = createSelector(
  selectProfileStore,
  (state: ProfileState) => state.profileData
);

export const selectProfileLoading = createSelector(
  selectProfileStore,
  (state: ProfileState) => state.isLoading
);

export const selectProfileEdit = createSelector(
  selectProfileStore,
  (state: ProfileState) => state.edit
);

export const selectProfileTheme = createSelector(
  selectProfileStore,
  (state: ProfileState) => state.theme
);
