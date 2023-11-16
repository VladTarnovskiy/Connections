import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/card.model';

import * as FavCardsActions from '../actions/fav-cards.action';

export interface FavCardsState {
  favCards: Card[] | null;
  error: string | null;
}

export const initialState: FavCardsState = {
  favCards: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(FavCardsActions.FavCards, (state, { favCards }) => ({
    ...state,
    favCards,
  })),
  on(FavCardsActions.AddFavCard, (state, { newCard }) => {
    console.log(state.favCards);

    if (state.favCards !== null) {
      const havFav = state.favCards?.find(
        (currentCard: Card) => currentCard.id === newCard.id
      );
      if (!havFav) {
        const newCards = state.favCards.concat(newCard);
        return {
          ...state,
          favCards: newCards,
        };
      } else {
        return {
          ...state,
        };
      }
    } else {
      return {
        ...state,
        favCards: [newCard],
      };
    }
  }),
  on(FavCardsActions.RemoveFavCard, (state, { key }) => {
    const havFav = state.favCards?.find(
      (currentCard) => currentCard.id === key
    );
    if (havFav) {
      const newFavCards = JSON.parse(JSON.stringify(state.favCards)).filter(
        (favCard: Card) => favCard.id !== key
      );
      return {
        ...state,
        favCards: newFavCards,
      };
    }
    return {
      ...state,
    };
  }),
  on(FavCardsActions.FavCardsFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(FavCardsActions.ClearCardsData, (state) => ({
    ...state,
    favCards: null,
  }))
);
