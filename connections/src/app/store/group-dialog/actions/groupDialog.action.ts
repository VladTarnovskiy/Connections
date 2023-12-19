import { createAction, props } from '@ngrx/store';
import { IMessage } from 'src/app/connections/models/conversation';
import { IReqGroupDialogMessage } from 'src/app/connections/models/groups';

const actionSource = '[Group Dialog]';

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

export const FetchUpdateGroupDialogData = createAction(
  `${actionSource} Fetch Update Group Dialog Data`,
  props<{ groupID: string; science: string }>()
);

export const UpdateGroupDialogData = createAction(
  `${actionSource} Update Group Dialog Data`,
  props<{ groupData: IMessage[] }>()
);

export const FetchGroupDialogMessage = createAction(
  `${actionSource} Fetch Group Dialog Message`,
  props<{ messageData: IReqGroupDialogMessage }>()
);

export const AddGroupDialogMessage = createAction(
  `${actionSource} Add Group Dialog Message`,
  props<{ messageData: IReqGroupDialogMessage }>()
);
