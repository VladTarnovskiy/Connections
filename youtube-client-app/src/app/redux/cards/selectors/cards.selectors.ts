import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../reducers/cards.reducer';

export const getCardsStore = createFeatureSelector<CardsState>('cards');
export const getCurrentCards = createSelector(
  getCardsStore,
  (state: CardsState) => state.cards
);
export const getIsFetched = createSelector(
  getCardsStore,
  (state: CardsState) => state.isFetched
);
