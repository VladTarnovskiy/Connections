import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupsState } from '../reducers/groups.reducer';

export const selectGroupsStore = createFeatureSelector<GroupsState>('groups');

export const selectGroupsData = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.groupsData
);

export const selectGroupsLoading = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.isLoading
);

// export const selectProfileEdit = createSelector(
//   selectProfileStore,
//   (state: ProfileState) => state.edit
// );
