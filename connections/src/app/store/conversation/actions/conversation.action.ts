import { createAction, props } from '@ngrx/store';

const actionSource = '[Conversation]';

export const FetchConversation = createAction(
  `${actionSource} Fetch Conversation`,
  props<{ companion: string }>()
);

export const AddConversation = createAction(
  `${actionSource} Add Conversation`,
  props<{ conversationID: string }>()
);
