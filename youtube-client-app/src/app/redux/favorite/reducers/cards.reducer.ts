import { CustomCard } from './../../../youtube/models/customCard.model';
import { createReducer, on } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';

import * as CardsActions from '../actions/cards.action';

export interface CardsState {
  favCardsInfo: CardsInfo | null;
  customCards: CustomCard[] | null;
  isFetched: boolean;
  isLoading: boolean;
  error: string | null;
}

export const initialState: CardsState = {
  favCardsInfo: null,
  customCards: null,
  isFetched: false,
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(CardsActions.FavCards, (state, { searchValue }) => ({
    ...state,
    searchValue,
    isLoading: true,
  })),
  on(CardsActions.FavCardsSuccess, (state, { favCardsInfo }) => ({
    ...state,
    favCardsInfo,
    isFetched: true,
    isLoading: false,
  })),
  on(CardsActions.FavCardsFailed, (state, { error }) => ({
    ...state,
    error,
    isFetched: true,
    isLoading: false,
  })),
  on(CardsActions.ClearCardsData, (state) => ({
    ...state,
    favCardsInfo: null,
  }))
);
