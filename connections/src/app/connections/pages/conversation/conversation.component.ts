import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';
import {
  selectConversationIsActive,
  selectConversationLoading,
  selectConversationTimer,
} from 'src/app/store/conversation/selectors/conversation.selectors';

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
  subscription!: Subscription;
  isActive = true;
  timer = 0;

  constructor(private store: Store) {}

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

  ngOnInit(): void {
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
