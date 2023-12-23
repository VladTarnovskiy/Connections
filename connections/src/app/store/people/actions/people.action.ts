import { createAction, props } from '@ngrx/store';
import { IConversations } from 'src/app/connections/models/conversations';
import { IPerson } from 'src/app/connections/models/people';

const actionSource = '[People]';

export const FetchPeople = createAction(`${actionSource} Fetch People`);

export const AddPeople = createAction(
  `${actionSource} Add People`,
  props<{ peopleData: IPerson[] }>()
);

export const ChangeTimerPeople = createAction(
  `${actionSource} Change Timer People`,
  props<{ timer: number }>()
);

export const ChangeIsActive = createAction(
  `${actionSource} Change IsActive`,
  props<{ isActive: boolean }>()
);

export const AddConversations = createAction(
  `${actionSource} Add Conversations`,
  props<{ conversationsData: IConversations[] }>()
);

export const AddConversation = createAction(
  `${actionSource} Add Conversation`,
  props<{ companionID: string; id: string }>()
);

export const DeleteConversation = createAction(
  `${actionSource} Delete Conversation`,
  props<{ conversationID: string }>()
);

export const UpdatePeople = createAction(
  `${actionSource} Update People`,
  props<{ personID: string; conversationID: string | null }>()
);

export const RemovePeople = createAction(`${actionSource} Remove People`);
