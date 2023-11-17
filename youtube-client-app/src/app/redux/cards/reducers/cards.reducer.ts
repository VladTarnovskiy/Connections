import { createReducer, on } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';
import { SortData } from 'src/app/youtube/models/sort';
import * as CardsActions from '../actions/cards.action';
import { CustomCard } from '../../../youtube/models/customCard.model';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByViewAsc,
  sortByViewDesc,
} from '../utils/sort';
import { PagesInfo } from '../models/page';

export interface CardsState {
  cardsInfo: CardsInfo | null;
  customCards: CustomCard[] | null;
  isLoading: boolean;
  error: string | null;
  sortData: SortData;
  pagesInfo: PagesInfo;
  page: number;
}

const initialCustomCards = (): CustomCard[] | null => {
  const storageCustomCards = localStorage.getItem('customCards');
  if (storageCustomCards) {
    const customCards = JSON.parse(storageCustomCards) as CustomCard[];
    return customCards;
  }
  return null;
};

export const initialState: CardsState = {
  cardsInfo: null,
  customCards: initialCustomCards(),
  isLoading: false,
  error: null,
  pagesInfo: {
    nextPage: null,
    prevPage: null,
    searchValue: '',
  },
  page: 1,

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
      };
    }
    return {
      ...state,
    };
  }),
  on(CardsActions.FilterCards, (state, { filter }) => {
    if (state.cardsInfo) {
      const filteredCardsData = state.cardsInfo.items.filter((card) => card.snippet.title.toLowerCase().includes(filter));
      const cardsInfo: CardsInfo = {
        ...state.cardsInfo,
        items: filteredCardsData,
      };
      return {
        ...state,
        cardsInfo,
      };
    }
    return {
      ...state,
    };
  }),

  on(CardsActions.SetPagesInfo, (state, { pagesInfo }) => ({
    ...state,
    pagesInfo,
    isLoading: true,
  })),
  on(CardsActions.ChangeCurrentPage, (state, { page }) => ({
    ...state,
    page,
    isLoading: true,
  })),
  on(CardsActions.AddCustomCard, (state, { customCard }) => {
    let newCustomCard = [];
    if (state.customCards) {
      newCustomCard = [...state.customCards, customCard];
    } else {
      newCustomCard = [customCard];
    }
    return {
      ...state,
      customCards: newCustomCard,
    };
  }),
  on(CardsActions.RemoveCustomCard, (state, { customCardId }) => {
    if (state.customCards) {
      const newCustomCard = state.customCards.filter(
        (customCard) => customCard.id !== customCardId,
      );
      return {
        ...state,
        customCards: newCustomCard,
      };
    }
    return {
      ...state,
    };
  }),
);
