import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';
import { IPerson } from 'src/app/connections/models/people';
import { IConversations } from 'src/app/connections/models/conversations';

export interface PeopleState {
  peopleData: IPerson[];
  conversationsData: IConversations[];
  isLoading: boolean;
  timer: number;
  isActive: boolean;
}

export const initialState: PeopleState = {
  peopleData: [],
  conversationsData: [],
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
  on(PeopleActions.UpdatePeople, (state, { personID, conversationID }) => {
    const updatedPeopleData = state.peopleData.map((person) =>
      person.uid === personID ? { ...person, conversationID } : person
    );

    return {
      ...state,
      peopleData: updatedPeopleData,
      isLoading: false,
    };
  }),
  on(PeopleActions.ChangeTimerPeople, (state, { timer }) => ({
    ...state,
    timer,
  })),
  on(PeopleActions.ChangeIsActive, (state, { isActive }) => ({
    ...state,
    isActive,
  })),
  on(PeopleActions.AddConversations, (state, { conversationsData }) => ({
    ...state,
    conversationsData,
  })),
  on(PeopleActions.DeleteConversation, (state, { conversationID }) => {
    const filteredPeople = state.peopleData.map((person) => {
      if (person.conversationID === conversationID) {
        return { ...person, conversationID: null };
      } else {
        return person;
      }
    });
    const filteredConversations = state.conversationsData.filter(
      (conversation) => conversation.id !== conversationID
    );
    return {
      ...state,
      peopleData: filteredPeople,
      conversationsData: filteredConversations,
    };
  }),
  on(PeopleActions.AddConversation, (state, { companionID, id }) => ({
    ...state,
    conversationsData: [...state.conversationsData, { id, companionID }],
  }))
);
