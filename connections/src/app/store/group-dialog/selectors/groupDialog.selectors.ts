import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupDialogState } from '../reducers/groupDialog.reducer';

export const selectConversationStore =
  createFeatureSelector<GroupDialogState>('groupDialog');

// export const selectGroupDialogID = createSelector(
//   selectConversationStore,
//   (state: GroupDialogState) => state.groupID
// );

export const selectGroupDialogData = createSelector(
  selectConversationStore,
  (state: GroupDialogState) => state.groupData
);

export const selectGroupDialogLoading = createSelector(
  selectConversationStore,
  (state: GroupDialogState) => state.isLoading
);

export const selectGroupDialogTimer = createSelector(
  selectConversationStore,
  (state: GroupDialogState) => state.timer
);

export const selectGroupDialogIsActive = createSelector(
  selectConversationStore,
  (state: GroupDialogState) => state.isActive
);

// export const selectGroupDialogIsRemoveModal = createSelector(
//   selectConversationStore,
//   (state: GroupDialogState) => state.isRemoveGroupDialogModal
// );
