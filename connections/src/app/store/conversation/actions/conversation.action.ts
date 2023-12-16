import { createAction, props } from '@ngrx/store';

const actionSource = '[Conversation]';

export const FetchCreateConversation = createAction(
  `${actionSource} Fetch Conversation`,
  props<{ companion: string }>()
);

export const AddConversationID = createAction(
  `${actionSource} Add Conversation ID`,
  props<{ conversationID: string }>()
);

export const ChangeIsActive = createAction(
  `${actionSource} Change IsActive`,
  props<{ isActive: boolean }>()
);

export const ChangeTimerConversation = createAction(
  `${actionSource} Change Timer Conversation`,
  props<{ timer: number }>()
);
