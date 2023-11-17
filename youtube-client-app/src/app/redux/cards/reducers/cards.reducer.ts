import { CustomCard } from './../../../youtube/models/customCard.model';
import { createReducer, on } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';
import * as CardsActions from '../actions/cards.action';
import { SortData } from 'src/app/youtube/models/sort';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByViewAsc,
  sortByViewDesc,
} from '../utils/sort';

export interface CardsState {
  cardsInfo: CardsInfo | null;
  customCards: CustomCard[] | null;
  isLoading: boolean;
  error: string | null;
  sortData: SortData;
  pagesInfo: PagesInfo;
}

export interface PagesInfo {
  nextPage: string | null;
  prevPage: string | null;
  searchValue: string;
}

export const initialState: CardsState = {
  cardsInfo: null,
  customCards: null,
  isLoading: false,
  error: null,
  pagesInfo: {
    nextPage: null,
    prevPage: null,
    searchValue: '',
  },
  sortData: {
    sortBy: '',
    direction: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(CardsActions.FetchCards, (state, { searchValue }) => ({
    ...state,
    searchValue,
    isLoading: true,
  })),
  on(CardsActions.FetchCardsSuccess, (state, { cardsInfo }) => ({
    ...state,
    cardsInfo,
    isLoading: false,
  })),
  on(CardsActions.FetchCardsFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(CardsActions.SortCards, (state, { sortData }) => {
    if (state.cardsInfo) {
      const cards = state.cardsInfo?.items;
      const { sortBy, direction } = sortData;
      let sortedData = [];
      if (sortBy === 'view') {
        if (direction === 'asc') {
          sortedData = sortByViewAsc(cards);
        } else {
          sortedData = sortByViewDesc(cards);
        }
      } else if (direction === 'asc') {
        sortedData = sortByDateAsc(cards);
      } else {
        sortedData = sortByDateDesc(cards);
      }
      const cardsInfo: CardsInfo = { ...state.cardsInfo, items: sortedData };
      return {
        ...state,
        cardsInfo,
        isLoading: true,
      };
    } else {
      return {
        ...state,
      };
    }
  }),
  on(CardsActions.FilterCards, (state, { filter }) => {
    if (state.cardsInfo) {
      const filteredCardsData = state.cardsInfo.items.filter((card) =>
        card.snippet.title.toLowerCase().includes(filter)
      );
      const cardsInfo: CardsInfo = {
        ...state.cardsInfo!,
        items: filteredCardsData,
      };
      return {
        ...state,
        cardsInfo,
        isLoading: true,
      };
    } else {
      return {
        ...state,
      };
    }
  }),

  on(CardsActions.SetPagesInfo, (state, { pagesInfo }) => ({
    ...state,
    pagesInfo,
    isLoading: true,
  })),
  on(CardsActions.ChangePage, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CardsActions.AddCustomCard, (state, { customCard }) => {
    let newCustomCard = [];
    if (state.customCards) {
      newCustomCard = [...state.customCards, customCard];
    } else {
      newCustomCard = [customCard];
    }
    console.log(customCard);
    return {
      ...state,
      customCards: newCustomCard,
    };
  })
);
