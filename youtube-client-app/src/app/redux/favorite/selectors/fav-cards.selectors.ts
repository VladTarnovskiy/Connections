import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavCardsState } from '../reducers/fav-cards.reducer';

export const selectFavoriteStore = createFeatureSelector<FavCardsState>('favoriteCards');
export const selectFavoriteCards = createSelector(
  selectFavoriteStore,
  (state: FavCardsState) => state.favCards,
);

export const selectFavoriteError = createSelector(
  selectFavoriteStore,
  (state: FavCardsState) => state.error,
);
