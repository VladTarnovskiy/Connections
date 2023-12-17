import { createAction, props } from '@ngrx/store';
import {
  IMessage,
  IReqConversationMessage,
} from 'src/app/connections/models/conversation';

const actionSource = '[Group Dialog]';

export const FetchCreateGroupDialog = createAction(
  `${actionSource} Fetch Group Dialog`,
  props<{ name: string }>()
);

export const AddGroupDialogID = createAction(
  `${actionSource} Add Group Dialog ID`,
  props<{ groupID: string }>()
);

export const ChangeIsActive = createAction(
  `${actionSource} Change IsActive`,
  props<{ isActive: boolean }>()
);

export const ChangeTimerGroupDialog = createAction(
  `${actionSource} Change Timer Group Dialog`,
  props<{ timer: number }>()
);

export const FetchGroupDialogData = createAction(
  `${actionSource} Fetch Group Dialog Data`,
  props<{ groupID: string }>()
);

export const AddGroupDialogData = createAction(
  `${actionSource} Add Group Dialog Data`,
  props<{ groupData: IMessage[] }>()
);

export const FetchGroupDialogMessage = createAction(
  `${actionSource} Fetch Group Dialog Message`,
  props<{ messageData: IReqConversationMessage }>()
);

export const AddGroupDialogMessage = createAction(
  `${actionSource} Add Group Dialog Message`,
  props<{ messageData: IReqConversationMessage }>()
);

export const FetchGroupDialogDelete = createAction(
  `${actionSource} Fetch Group Dialog Delete`,
  props<{ groupID: string }>()
);

export const DeleteGroupDialog = createAction(
  `${actionSource} Delete Group Dialog `
  // props<{ messageData: IReqConversationMessage }>()
);

export const ChangeIsRemoveGroupDialogModal = createAction(
  `${actionSource} Change Remove Group Dialog Modal`,
  props<{ isRemoveGroupDialogModal: boolean }>()
);
