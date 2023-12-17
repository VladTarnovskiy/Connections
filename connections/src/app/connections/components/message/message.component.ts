import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessage } from '../../models/conversation';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IPerson } from '../../models/people';
import { selectPeopleData } from 'src/app/store/people/selectors/people.selectors';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  @Input() messageData!: IMessage;
  subscription!: Subscription;
  peopleData$: Observable<IPerson[] | null> =
    this.store.select(selectPeopleData);
  peopleData!: IPerson[] | null;
  authData$: Observable<IUserDataStorage | null> =
    this.store.select(selectAuthData);
  authData!: IUserDataStorage | null;

  constructor(private store: Store) {}

  getUserName() {
    if (this.peopleData) {
      const matchedPerson = this.peopleData.find(
        (person) => person.uid === this.messageData.authorID
      );
      return matchedPerson?.name || 'Unknown user';
    }

    return 'Unknown user';
  }

  ngOnInit(): void {
    this.subscription = this.peopleData$.subscribe((value) => {
      this.peopleData = value;
    });
    const twoChildSubscription = this.authData$.subscribe((authData) => {
      this.authData = authData;
    });

    this.subscription.add(twoChildSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
