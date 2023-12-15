import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';
import { IPerson } from 'src/app/connections/models/people';

export interface PeopleState {
  peopleData: IPerson[] | null;
  isLoading: boolean;
  timer: number;
  isActive: boolean;
}

export const initialState: PeopleState = {
  peopleData: null,
  isLoading: false,
  timer: 0,
  isActive: true,
};

export const reducer = createReducer(
  initialState,
  on(PeopleActions.FetchPeople, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PeopleActions.AddPeople, (state, { peopleData }) => ({
    ...state,
    peopleData,
    isLoading: false,
  })),
  on(PeopleActions.ChangeTimerPeople, (state, { timer }) => ({
    ...state,
    timer,
  })),
  on(PeopleActions.ChangeIsActive, (state, { isActive }) => ({
    ...state,
    isActive,
  }))
  // on(ProfileActions.FetchUpdateProfile, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(ProfileActions.ChangeEditProfile, (state, { edit }) => ({
  //   ...state,
  //   edit,
  // })),
  // on(ProfileActions.UpdateProfile, (state, { name }) => {
  //   if (state.profileData) {
  //     return {
  //       edit: false,
  //       profileData: { ...state.profileData, name },
  //       isLoading: false,
  //     };
  //   } else {
  //     return { ...state };
  //   }
  // }),
  // on(ProfileActions.RemoveProfile, (state) => ({
  //   ...state,
  //   profileData: null,
  // }))
);
