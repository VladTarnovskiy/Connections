import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/card.model';
import { CardsState } from '../reducers/cards.reducer';
import { selectRouteParams } from '../../router/selectors/cards.selectors';

export const selectCardsStore = createFeatureSelector<CardsState>('cardsInfo');
export const selectCurrentCards = createSelector(
  selectCardsStore,
  (state: CardsState) => state.cardsInfo?.items,
);

export const selectPageInfo = createSelector(
  selectCardsStore,
  (state: CardsState) => state.pagesInfo,
);

export const selectLoading = createSelector(
  selectCardsStore,
  (state: CardsState) => state.isLoading,
);

export const selectPage = createSelector(
  selectCardsStore,
  (state: CardsState) => state.page,
);

export const selectCustomCards = createSelector(
  selectCardsStore,
  (state: CardsState) => state.customCards,
);

export const selectCard = createSelector(
  selectCurrentCards,
  selectRouteParams,
  (cards, { detailsId }) => {
    if (cards) {
      const card = cards.find(
        (currentCard: Card) => currentCard.id === (detailsId as string),
      );
      const cardResult = card || null;
      return cardResult;
    }
    return null;
  },
);
