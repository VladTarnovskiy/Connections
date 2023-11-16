import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../reducers/cards.reducer';

export const getCardsStore = createFeatureSelector<CardsState>('cardsInfo');
export const getCurrentCards = createSelector(
  getCardsStore,
  (state: CardsState) => state.cardsInfo?.items
);
export const getIsFetched = createSelector(
  getCardsStore,
  (state: CardsState) => state.isFetched
);
