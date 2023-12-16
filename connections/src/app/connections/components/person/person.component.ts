import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPerson } from '../../models/people';
import { Store } from '@ngrx/store';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';
import { Observable, Subscription } from 'rxjs';
import { IConversation } from '../../models/conversations';
import { selectConversations } from 'src/app/store/people/selectors/people.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit, OnDestroy {
  @Input() personData!: IPerson;
  conversationsData$: Observable<IConversation[] | null> =
    this.store.select(selectConversations);
  subscription!: Subscription;
  conversationsData!: IConversation[] | null;

  constructor(private store: Store, private router: Router) {}

  getConversation() {
    if (this.personData.haveConversationID && this.conversationsData) {
      this.conversationsData.forEach((conversation) => {
        if (conversation.companionID === this.personData.uid) {
          this.router.navigate([`/conversation/${conversation.id}`]);
        }
      });
    } else {
      this.store.dispatch(
        ConversationActions.FetchCreateConversation({
          companion: this.personData.uid,
        })
      );
    }
  }

  ngOnInit(): void {
    this.subscription = this.conversationsData$.subscribe(
      (conversationsData) => {
        this.conversationsData = conversationsData;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
