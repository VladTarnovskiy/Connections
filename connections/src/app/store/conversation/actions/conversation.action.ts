import { createAction, props } from '@ngrx/store';
import { IMessage } from 'src/app/connections/models/conversation';

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

export const FetchConversationData = createAction(
  `${actionSource} Fetch Conversation Data`,
  props<{ conversationID: string }>()
);

export const AddConversationData = createAction(
  `${actionSource} Add Conversation Data`,
  props<{ conversationData: IMessage[] }>()
);
