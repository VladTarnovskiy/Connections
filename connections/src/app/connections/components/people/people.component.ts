import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  selectPeopleData,
  selectPeopleIsActive,
  selectPeopleLoading,
  selectPeopleTimer,
} from 'src/app/store/people/selectors/people.selectors';
import { IPerson } from '../../models/people';
import * as PeopleActions from 'src/app/store/people/actions/people.action';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = this.store.select(selectPeopleTimer);
  isActive$: Observable<boolean> = this.store.select(selectPeopleIsActive);
  isLoading$: Observable<boolean> = this.store.select(selectPeopleLoading);
  peopleData$: Observable<IPerson[] | null> =
    this.store.select(selectPeopleData);
  subscription!: Subscription;
  isActive = true;
  timer = 0;

  constructor(private store: Store) {}

  updatePeople() {
    if (this.isActive) {
      this.store.dispatch(PeopleActions.FetchPeople());
      this.store.dispatch(PeopleActions.ChangeIsActive({ isActive: false }));
      this.store.dispatch(PeopleActions.ChangeTimerPeople({ timer: 10 }));
      const interval = setInterval(() => {
        this.timer -= 1;
        this.store.dispatch(
          PeopleActions.ChangeTimerPeople({ timer: this.timer })
        );
        if (this.timer === 0) {
          this.store.dispatch(PeopleActions.ChangeIsActive({ isActive: true }));
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
