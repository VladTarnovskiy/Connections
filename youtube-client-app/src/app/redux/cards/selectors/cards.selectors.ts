import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../reducers/cards.reducer';
import { selectRouteParams } from '../../router/selectors/cards.selectors';
import { Card } from 'src/app/youtube/models/card.model';

export const selectCardsStore = createFeatureSelector<CardsState>('cardsInfo');
export const selectCurrentCards = createSelector(
  selectCardsStore,
  (state: CardsState) => state.cardsInfo?.items
);

export const selectPageInfo = createSelector(
  selectCardsStore,
  (state: CardsState) => state.pagesInfo
);

export const selectLoading = createSelector(
  selectCardsStore,
  (state: CardsState) => state.isLoading
);

export const selectPage = createSelector(
  selectCardsStore,
  (state: CardsState) => state.page
);

export const selectCard = createSelector(
  selectCurrentCards,
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
