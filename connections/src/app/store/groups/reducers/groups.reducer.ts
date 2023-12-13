import { createReducer, on } from '@ngrx/store';
import * as GroupsActions from '../actions/groups.action';
import { IProfile } from 'src/app/profile/models/profile';
import { IGroup } from 'src/app/connections/models/groups';

export interface GroupsState {
  groupsData: IGroup[] | null;
  isLoading: boolean;
}

export const initialState: GroupsState = {
  groupsData: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(GroupsActions.FetchGroups, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GroupsActions.AddGroups, (state, { groupsData }) => ({
    ...state,
    groupsData,
    isLoading: false,
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
