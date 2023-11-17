import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/card.model';

const actionSource = '[Favorite]';

export const FavCards = createAction(
  `${actionSource} Fav Cards`,
  props<{ favCards: Card[] }>()
);

export const AddFavCard = createAction(
  `${actionSource} Add Fav Card`,
  props<{ newCard: Card }>()
);

export const RemoveFavCard = createAction(
  `${actionSource} Remove Fav Card`,
  props<{ key: string }>()
);

export const FavCardsFailed = createAction(
  `${actionSource} Fav Cards Failed`,
  props<{ error: string }>()
);
