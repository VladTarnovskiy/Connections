import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.action';
import { IProfile } from 'src/app/profile/models/profile';

export interface ProfileState {
  profileData: IProfile | null;
}

export const initialState: ProfileState = {
  profileData: null,
};

export const reducer = createReducer(
  initialState,
  on(ProfileActions.FetchProfile, (state) => ({
    ...state,
  })),
  on(ProfileActions.AddProfile, (state, { profileData }) => ({
    ...state,
    profileData,
  }))
  // on(FavCardsActions.AddFavCard, (state, { newCard }) => {
  //   if (state.favCards !== null) {
  //     const havFav = state.favCards?.find(
  //       (currentCard: Card) => currentCard.id === newCard.id,
  //     );
  //     if (!havFav) {
  //       const newCards = state.favCards.concat(newCard);
  //       return {
  //         ...state,
  //         favCards: newCards,
  //       };
  //     }
  //     return {
  //       ...state,
  //     };
  //   }
  //   return {
  //     ...state,
  //     favCards: [newCard],
  //   };
  // }),
  // on(FavCardsActions.RemoveFavCard, (state, { key }) => {
  //   const havFav = state.favCards?.find(
  //     (currentCard) => currentCard.id === key,
  //   );
  //   if (havFav) {
  //     const newFavCards = JSON.parse(JSON.stringify(state.favCards)).filter(
  //       (favCard: Card) => favCard.id !== key,
  //     );
  //     return {
  //       ...state,
  //       favCards: newFavCards,
  //     };
  //   }
  //   return {
  //     ...state,
  //   };
  // }),
  // on(FavCardsActions.FavCardsFailed, (state, { error }) => ({
  //   ...state,
  //   error,
  // })),
);
