import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.action';
import { IPerson } from 'src/app/connections/models/people';
import { IConversations } from 'src/app/connections/models/conversations';

export interface PeopleState {
  peopleData: IPerson[] | null;
  conversationsData: IConversations[] | null;
  isLoading: boolean;
  timer: number;
  isActive: boolean;
}

export const initialState: PeopleState = {
  peopleData: null,
  conversationsData: null,
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
  }))
);
