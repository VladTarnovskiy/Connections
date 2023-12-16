import { createReducer, on } from '@ngrx/store';
import * as ConversationActions from '../actions/conversation.action';

export interface ConversationState {
  conversationID: string | null;
  isLoading: boolean;
  timer: number;
  isActive: boolean;
}

export const initialState: ConversationState = {
  conversationID: null,
  isLoading: false,
  timer: 0,
  isActive: true,
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
  }))
  // on(PeopleActions.ChangeTimerPeople, (state, { timer }) => ({
  //   ...state,
  //   timer,
  // })),
  // on(PeopleActions.ChangeIsActive, (state, { isActive }) => ({
  //   ...state,
  //   isActive,
  // }))
);
