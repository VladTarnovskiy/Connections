import { createAction, props } from '@ngrx/store';
import {
  IConversationMessageToStore,
  IMessage,
  IReqConversationMessage,
} from 'src/app/connections/models/conversation';

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

export const FetchUpdateConversationData = createAction(
  `${actionSource} Fetch Update Conversation Data`,
  props<{ conversationID: string; science: string }>()
);

export const UpdateConversationData = createAction(
  `${actionSource} Update Conversation Data`,
  props<{ conversationData: IMessage[] }>()
);

export const FetchConversationMessage = createAction(
  `${actionSource} Fetch Conversation Message`,
  props<{ messageData: IConversationMessageToStore }>()
);

export const AddConversationMessage = createAction(
  `${actionSource} Add Conversation Message`,
  props<{ messageData: IReqConversationMessage }>()
);

export const FetchConversationDelete = createAction(
  `${actionSource} Fetch Conversation Delete`,
  props<{ conversationID: string }>()
);

export const DeleteConversation = createAction(
  `${actionSource} Delete Conversation `
);

export const ChangeIsRemoveConversationModal = createAction(
  `${actionSource} Change Remove Conversation Modal`,
  props<{ isRemoveConversationModal: boolean }>()
);
