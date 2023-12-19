import { createReducer, on } from '@ngrx/store';
import * as GroupDialogActions from '../actions/groupDialog.action';
import { IMessage } from 'src/app/connections/models/conversation';

export interface GroupDialogState {
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  groupData: IMessage[];
}

export const initialState: GroupDialogState = {
  isLoading: false,
  timer: 0,
  isActive: true,
  groupData: [],
};

export const reducer = createReducer(
  initialState,
  on(GroupDialogActions.ChangeIsActive, (state, { isActive }) => ({
    ...state,
    isActive,
  })),
  on(GroupDialogActions.ChangeTimerGroupDialog, (state, { timer }) => ({
    ...state,
    timer,
  })),
  on(GroupDialogActions.FetchGroupDialogData, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GroupDialogActions.AddGroupDialogData, (state, { groupData }) => ({
    ...state,
    groupData,
    isLoading: false,
  })),
  on(GroupDialogActions.FetchUpdateGroupDialogData, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GroupDialogActions.UpdateGroupDialogData, (state, { groupData }) => {
    return {
      ...state,
      groupData: [...state.groupData].concat(groupData),
      isLoading: false,
    };
  }),
  on(GroupDialogActions.FetchGroupDialogMessage, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GroupDialogActions.AddGroupDialogMessage, (state, { messageData }) => {
    const tempMessageData = {
      authorID: messageData.authorID,
      message: messageData.message,
      createdAt: messageData.createdAt,
    };
    return {
      ...state,
      groupData: [...state.groupData, tempMessageData],
      isLoading: false,
    };
  })
);
