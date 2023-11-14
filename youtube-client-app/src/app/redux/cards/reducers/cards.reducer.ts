import { createReducer, on } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';

import * as CardsActions from '../actions/cards.action';

export interface CardsState {
  cards: CardsInfo | null;
  isFetched: boolean;
  isLoading: boolean;
}

export const initialState: CardsState = {
  cards: null,
  isFetched: false,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(CardsActions.FetchCards, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CardsActions.FetchCardsSuccess, (state, { cards }) => ({
    ...state,
    cards,
    isFetched: true,
    isLoading: false,
  })),
  on(CardsActions.FetchCardsFailed, (state) => ({
    ...state,
    isFetched: true,
    isLoading: false,
  })),
  on(CardsActions.ClearCardsData, (state) => ({
    ...state,
    user: null,
  }))
);
