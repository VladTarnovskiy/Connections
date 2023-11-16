import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../reducers/cards.reducer';
import { selectRouteParams } from '../../router/selectors/cards.selectors';
import { Card } from 'src/app/youtube/models/card.model';

export const getCardsStore = createFeatureSelector<CardsState>('cardsInfo');
export const getCurrentCards = createSelector(
  getCardsStore,
  (state: CardsState) => state.cardsInfo?.items
);

export const getIsFetched = createSelector(
  getCardsStore,
  (state: CardsState) => state.isFetched
);

export const selectCard = createSelector(
  getCurrentCards,
  selectRouteParams,
  (cards, { detailsId }) => {
    if (cards) {
      const card = cards.find(
        (card: Card) => card.id === (detailsId as string)
      );
      const cardResult = card ? card : null;
      return cardResult;
    } else {
      return null;
    }
  }
);
