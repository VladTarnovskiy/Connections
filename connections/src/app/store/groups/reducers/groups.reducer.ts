import { createReducer, on } from '@ngrx/store';
import * as GroupsActions from '../actions/groups.action';
import { IGroup } from 'src/app/connections/models/groups';
import { IRemoveGroupData } from '../models/group';

export interface GroupsState {
  groupsData: IGroup[];
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  removeGroupData: IRemoveGroupData | null;
  isCreateGroupModal: boolean;
}

export const initialState: GroupsState = {
  groupsData: [],
  isLoading: false,
  timer: 0,
  isActive: true,
  removeGroupData: null,
  isCreateGroupModal: false,
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
  on(GroupsActions.ChangeIsRemoveGroupModal, (state, { removeGroupData }) => ({
    ...state,
    removeGroupData,
  })),
  on(GroupsActions.AddGroup, (state, { name }) => {
    const temporaryGroupData: IGroup = {
      id: '',
      name: name,
      createdAt: '',
      createdBy: '',
    };
    return {
      ...state,
      groupsData: [temporaryGroupData, ...state.groupsData],
    };
  }),
  on(GroupsActions.DeleteGroup, (state, { groupID }) => {
    const groupData: IGroup[] = state.groupsData.filter(
      (group) => group.id !== groupID
    );
    return {
      ...state,
      groupsData: groupData,
    };
  })
);
