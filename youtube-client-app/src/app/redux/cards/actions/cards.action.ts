import { createAction, props } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';

const actionSource = '[Cards]';

export const FetchCards = createAction(`${actionSource} Fetch Cards`);

export const FetchCardsSuccess = createAction(
  `${actionSource} Fetch Cards Success`,
  props<{ cards: CardsInfo }>()
);

export const FetchCardsFailed = createAction(
  `${actionSource} Fetch Cards Failed`
);

export const ClearCardsData = createAction(`${actionSource} Clear Cards Data`);
