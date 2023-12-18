import { createReducer, on } from '@ngrx/store';
import * as GroupDialogActions from '../actions/groupDialog.action';
import { IMessage } from 'src/app/connections/models/conversation';

export interface GroupDialogState {
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  groupData: IMessage[];
  // isRemoveGroupDialogModal: boolean;
}

export const initialState: GroupDialogState = {
  isLoading: false,
  timer: 0,
  isActive: true,
  // isRemoveGroupDialogModal: false,
  groupData: [],
};

export const reducer = createReducer(
  initialState,
  // on(GroupDialogActions.FetchCreateGroupDialog, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(GroupDialogActions.AddGroupDialogID, (state, { groupID }) => ({
  //   ...state,
  //   groupID,
  //   isLoading: false,
  // })),
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
  // on(GroupDialogActions.DeleteGroupDialog, (state) => ({
  //   ...state,
  //   conversationData: [],
  //   conversationID: null,
  //   isRemoveConversationModal: false,
  // })),
  on(GroupDialogActions.AddGroupDialogMessage, (state, { messageData }) => {
    const tempMessageData = {
      authorID: messageData.authorID,
      message: messageData.message,
      createdAt: messageData.createdAt,
    };

    return {
      ...state,
      groupData: [...state.groupData, tempMessageData],
    };
  })
  // on(
  //   GroupDialogActions.ChangeIsRemoveGroupDialogModal,
  //   (state, { isRemoveGroupDialogModal }) => ({
  //     ...state,
  //     isRemoveGroupDialogModal,
  //   })
  // )
);
