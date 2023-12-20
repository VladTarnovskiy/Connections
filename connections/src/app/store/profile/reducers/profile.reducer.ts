import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.action';
import { IProfile } from 'src/app/profile/models/profile';

export interface ProfileState {
  profileData: IProfile | null;
  isLoading: boolean;
  edit: boolean;
  theme: string;
}

export const initialState: ProfileState = {
  profileData: null,
  isLoading: false,
  edit: false,
  theme: 'dark',
};

export const reducer = createReducer(
  initialState,
  on(ProfileActions.FetchProfile, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProfileActions.AddProfile, (state, { profileData }) => ({
    ...state,
    profileData,
    isLoading: false,
  })),
  on(ProfileActions.FetchUpdateProfile, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProfileActions.ChangeEditProfile, (state, { edit }) => ({
    ...state,
    edit,
  })),
  on(ProfileActions.ChangeIsLoadingProfile, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(ProfileActions.UpdateProfile, (state, { name }) => {
    if (state.profileData) {
      return {
        ...state,
        edit: false,
        profileData: { ...state.profileData, name },
        isLoading: false,
      };
    } else {
      return { ...state };
    }
  }),
  on(ProfileActions.ChangeTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
  on(ProfileActions.RemoveProfile, (state) => ({
    ...state,
    profileData: null,
  }))
);
