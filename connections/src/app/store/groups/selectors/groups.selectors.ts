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

export const selectGroupsTimer = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.timer
);

export const selectGroupsIsActive = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.isActive
);

export const selectGroupIsCreateModal = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.isCreateGroupModal
);

export const selectGroupIsRemoveModal = createSelector(
  selectGroupsStore,
  (state: GroupsState) => state.removeGroupData
);
