import { createReducer, on } from '@ngrx/store';
import * as ConversationActions from '../actions/conversation.action';
import { IMessage } from 'src/app/connections/models/conversation';

export interface ConversationState {
  conversationID: string | null;
  isLoading: boolean;
  timer: number;
  isActive: boolean;
  conversationData: IMessage[];
}

export const initialState: ConversationState = {
  conversationID: null,
  isLoading: false,
  timer: 0,
  isActive: true,
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
  on(
    ConversationActions.AddConversationData,
    (state, { conversationData }) => ({
      ...state,
      conversationData,
    })
  ),
  on(ConversationActions.DeleteConversation, (state) => ({
    ...state,
    conversationData: [],
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
  })
  // on(PeopleActions.ChangeTimerPeople, (state, { timer }) => ({
  //   ...state,
  //   timer,
  // })),
  // on(PeopleActions.ChangeIsActive, (state, { isActive }) => ({
  //   ...state,
  //   isActive,
  // }))
);
