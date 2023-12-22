import { Component, Input } from '@angular/core';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';
import * as PeopleActions from 'src/app/store/people/actions/people.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-conversation-remove',
  templateUrl: './conversation-remove.component.html',
  styleUrls: ['./conversation-remove.component.scss'],
})
export class ConversationRemoveComponent {
  @Input() conversationID!: string;

  constructor(private store: Store) {}

  removeConversation() {
    this.store.dispatch(
      ConversationActions.FetchConversationDelete({
        conversationID: this.conversationID,
      })
    );
    this.store.dispatch(
      PeopleActions.DeleteConversation({
        conversationID: this.conversationID,
      })
    );
    this.closeModal();
  }

  closeModal() {
    this.store.dispatch(
      ConversationActions.ChangeIsRemoveConversationModal({
        isRemoveConversationModal: false,
      })
    );
  }
}
