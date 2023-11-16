import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavCardsState } from '../reducers/fav-cards.reducer';

export const getFavoriteStore =
  createFeatureSelector<FavCardsState>('favoriteCards');
export const getFavoriteCards = createSelector(
  getFavoriteStore,
  (state: FavCardsState) => state.favCards
);

export const getFavoriteError = createSelector(
  getFavoriteStore,
  (state: FavCardsState) => state.error
);
