import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConversationState } from '../reducers/conversation.reducer';

export const selectConversationStore =
  createFeatureSelector<ConversationState>('conversation');

export const selectConversationID = createSelector(
  selectConversationStore,
  (state: ConversationState) => state.conversationID
);

export const selectConversationLoading = createSelector(
  selectConversationStore,
  (state: ConversationState) => state.isLoading
);

export const selectConversationTimer = createSelector(
  selectConversationStore,
  (state: ConversationState) => state.timer
);

export const selectConversationIsActive = createSelector(
  selectConversationStore,
  (state: ConversationState) => state.isActive
);

// export const selectProfileEdit = createSelector(
//   selectProfileStore,
//   (state: ProfileState) => state.edit
// );
