import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';
import {
  selectConversationData,
  selectConversationIsActive,
  selectConversationLoading,
  selectConversationTimer,
} from 'src/app/store/conversation/selectors/conversation.selectors';
import { IMessage } from '../../models/conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(
    selectConversationLoading
  );
  isActive$: Observable<boolean> = this.store.select(
    selectConversationIsActive
  );
  timer$: Observable<number> = this.store.select(selectConversationTimer);
  conversationData$: Observable<IMessage[]> = this.store.select(
    selectConversationData
  );
  subscription!: Subscription;
  isActive = true;
  timer = 0;
  message = '';
  conversationID!: string;

  constructor(private store: Store, route: ActivatedRoute) {
    route.params.pipe(map((p) => p['conversationID'])).subscribe((id) => {
      this.conversationID = id;
    });
  }

  updateConversation() {
    if (this.isActive) {
      // this.store.dispatch(ConversationActions.FetchPeople());
      this.store.dispatch(
        ConversationActions.ChangeIsActive({ isActive: false })
      );
      this.store.dispatch(
        ConversationActions.ChangeTimerConversation({ timer: 10 })
      );
      const interval = setInterval(() => {
        this.timer -= 1;
        this.store.dispatch(
          ConversationActions.ChangeTimerConversation({ timer: this.timer })
        );
        if (this.timer === 0) {
          this.store.dispatch(
            ConversationActions.ChangeIsActive({ isActive: true })
          );
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  // getMessages() {
  //   this.store.dispatch(ConversationActions.FetchConversationData());
  // }

  ngOnInit(): void {
    this.store.dispatch(
      ConversationActions.FetchConversationData({
        conversationID: this.conversationID,
      })
    );
    this.subscription = this.timer$.subscribe((value) => {
      this.timer = value;
    });

    const childSubscription = this.isActive$.subscribe((value) => {
      this.isActive = value;
    });

    this.subscription.add(childSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
