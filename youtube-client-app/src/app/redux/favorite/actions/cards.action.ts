import { createAction, props } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';

const actionSource = '[Favorite]';

export const FavCards = createAction(
  `${actionSource} Fav Cards`,
  props<{ searchValue: string }>()
);

export const FavCardsSuccess = createAction(
  `${actionSource} Fav Cards Success`,
  props<{ favCardsInfo: CardsInfo }>()
);

export const FavCardsFailed = createAction(
  `${actionSource} Fav Cards Failed`,
  props<{ error: string }>()
);

export const ClearCardsData = createAction(`${actionSource} Clear Cards Data`);
