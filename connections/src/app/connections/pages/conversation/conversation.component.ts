import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import * as ConversationActions from 'src/app/store/conversation/actions/conversation.action';
import {
  selectConversationData,
  selectConversationIsActive,
  selectConversationIsRemoveModal,
  selectConversationLoading,
  selectConversationTimer,
} from 'src/app/store/conversation/selectors/conversation.selectors';
import { IMessage } from '../../models/conversation';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import { FormControl, Validators } from '@angular/forms';

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
  isRemoveModal$: Observable<boolean> = this.store.select(
    selectConversationIsRemoveModal
  );
  timer$: Observable<number> = this.store.select(selectConversationTimer);
  conversationData$: Observable<IMessage[]> = this.store.select(
    selectConversationData
  );
  conversationData!: IMessage[];

  authData$: Observable<IUserDataStorage | null> =
    this.store.select(selectAuthData);
  subscription!: Subscription;
  isActive = true;
  timer = 0;
  message = new FormControl('', [Validators.required]);
  conversationID!: string;
  authData!: IUserDataStorage | null;
  conversationName = 'Conversation';

  constructor(private store: Store, route: ActivatedRoute) {
    route.params.pipe(map((p) => p['conversationID'])).subscribe((id) => {
      this.conversationID = id;
    });
  }

  updateConversation() {
    if (this.isActive) {
      if (this.conversationData.length) {
        this.store.dispatch(
          ConversationActions.FetchUpdateConversationData({
            conversationID: this.conversationID,
            science:
              this.conversationData[this.conversationData.length - 1].createdAt,
          })
        );
      } else {
        this.store.dispatch(
          ConversationActions.FetchConversationData({
            conversationID: this.conversationID,
          })
        );
      }

      this.store.dispatch(
        ConversationActions.ChangeIsActive({ isActive: false })
      );
      this.store.dispatch(
        ConversationActions.ChangeTimerConversation({ timer: 59 })
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

  deleteConversation() {
    this.store.dispatch(
      ConversationActions.ChangeIsRemoveConversationModal({
        isRemoveConversationModal: true,
      })
    );
  }

  sentMessage() {
    if (this.authData && this.message.valid) {
      const message = this.message.getRawValue() as string;
      const messageData = {
        conversationID: this.conversationID,
        message: message,
        authorID: this.authData.uid,
      };

      this.store.dispatch(
        ConversationActions.FetchConversationMessage({
          messageData: messageData,
        })
      );
      this.message.setValue('');
    }
  }

  getConversationName() {
    const conversationNameStorage = localStorage.getItem('conversationName');
    if (conversationNameStorage) {
      const conversationName = JSON.parse(conversationNameStorage);
      this.conversationName = conversationName;
    }
    return this.conversationName;
  }

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

    const twoChildSubscription = this.authData$.subscribe((authData) => {
      this.authData = authData;
    });

    const thirdChildSubscription = this.conversationData$.subscribe(
      (conversationData) => {
        if (conversationData) {
          this.conversationData = conversationData;
        }
      }
    );

    this.subscription.add(childSubscription);
    this.subscription.add(twoChildSubscription);
    this.subscription.add(thirdChildSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
