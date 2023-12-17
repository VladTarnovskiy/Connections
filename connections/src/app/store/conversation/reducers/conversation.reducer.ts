import { createReducer, on } from '@ngrx/store';
import * as ConversationActions from '../actions/conversation.action';
import { IMessage } from 'src/app/connections/models/conversation';

export interface ConversationState {
  conversationID: string | null;
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  conversationData: IMessage[];
  isRemoveConversationModal: boolean;
}

export const initialState: ConversationState = {
  conversationID: null,
  isLoading: false,
  timer: 0,
  isActive: true,
  isRemoveConversationModal: false,
  conversationData: [],
};

export const reducer = createReducer(
  initialState,
  on(ConversationActions.FetchCreateConversation, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ConversationActions.AddConversationID, (state, { conversationID }) => ({
    ...state,
    conversationID,
    isLoading: false,
  })),
  on(ConversationActions.ChangeIsActive, (state, { isActive }) => ({
    ...state,
    isActive,
  })),
  on(ConversationActions.ChangeTimerConversation, (state, { timer }) => ({
    ...state,
    timer,
  })),
  on(ConversationActions.FetchConversationData, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    ConversationActions.AddConversationData,
    (state, { conversationData }) => ({
      ...state,
      conversationData,
      isLoading: false,
    })
  ),
  on(ConversationActions.DeleteConversation, (state) => ({
    ...state,
    conversationData: [],
    conversationID: null,
    isRemoveConversationModal: false,
  })),
  on(ConversationActions.AddConversationMessage, (state, { messageData }) => {
    const tempMessageData = {
      authorID: messageData.authorID,
      message: messageData.message,
      createdAt: messageData.createdAt,
    };

    return {
      ...state,
      conversationData: [...state.conversationData, tempMessageData],
    };
  }),
  on(
    ConversationActions.ChangeIsRemoveConversationModal,
    (state, { isRemoveConversationModal }) => ({
      ...state,
      isRemoveConversationModal,
    })
  )
);
