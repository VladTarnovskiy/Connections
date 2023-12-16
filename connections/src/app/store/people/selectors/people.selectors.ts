import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from '../reducers/people.reducer';

export const selectPeopleStore = createFeatureSelector<PeopleState>('people');

export const selectPeopleData = createSelector(
  selectPeopleStore,
  (state: PeopleState) => state.peopleData
);

export const selectPeopleLoading = createSelector(
  selectPeopleStore,
  (state: PeopleState) => state.isLoading
);

export const selectPeopleTimer = createSelector(
  selectPeopleStore,
  (state: PeopleState) => state.timer
);

export const selectPeopleIsActive = createSelector(
  selectPeopleStore,
  (state: PeopleState) => state.isActive
);
