import { Component, Input } from '@angular/core';
import { IPerson } from '../../models/people';
import { Store } from '@ngrx/store';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() personData!: IPerson;

  constructor(private store: Store) {}

  getConversation() {
    this.store.dispatch(
      ConversationActions.FetchConversation({ companion: this.personData.uid })
    );
  }
}
