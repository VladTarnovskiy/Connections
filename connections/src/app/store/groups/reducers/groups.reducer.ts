import { createReducer, on } from '@ngrx/store';
import * as GroupsActions from '../actions/groups.action';
import { IGroup } from 'src/app/connections/models/groups';

export interface GroupsState {
  groupsData: IGroup[];
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  isCreateGroupModal: boolean;
  isRemoveGroupModal: boolean;
}

export const initialState: GroupsState = {
  groupsData: [],
  isLoading: false,
  timer: 0,
  isActive: true,
  isCreateGroupModal: false,
  isRemoveGroupModal: false,
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
  })),
  on(GroupsActions.ChangeTimerGroups, (state, { timer }) => ({
    ...state,
    timer,
  })),
  on(GroupsActions.ChangeIsActive, (state, { isActive }) => ({
    ...state,
    isActive,
  })),
  on(
    GroupsActions.ChangeIsCreateGroupModal,
    (state, { isCreateGroupModal }) => ({
      ...state,
      isCreateGroupModal,
    })
  ),
  on(
    GroupsActions.ChangeIsRemoveGroupModal,
    (state, { isRemoveGroupModal }) => ({
      ...state,
      isRemoveGroupModal,
    })
  ),
  on(GroupsActions.AddGroup, (state, { name }) => {
    const temporaryGroupData: IGroup = {
      id: '',
      name: name,
      createdAt: '',
      createdBy: '',
    };

    return {
      ...state,
      groupsData: [...state.groupsData, temporaryGroupData],
    };
  })
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
