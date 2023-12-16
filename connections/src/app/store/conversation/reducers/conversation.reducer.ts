import { createReducer, on } from '@ngrx/store';
import * as ConversationActions from '../actions/conversation.action';

export interface ConversationState {
  conversationID: string | null;
  isLoading: boolean;
}

export const initialState: ConversationState = {
  conversationID: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(ConversationActions.FetchConversation, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ConversationActions.AddConversation, (state, { conversationID }) => ({
    ...state,
    conversationID,
    isLoading: false,
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
