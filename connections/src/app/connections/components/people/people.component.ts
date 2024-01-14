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
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = this.store.select(selectPeopleTimer);
  isActive$: Observable<boolean> = this.store.select(selectPeopleIsActive);
  isLoading$: Observable<boolean> = this.store.select(selectPeopleLoading);
  peopleData$: Observable<IPerson[]> = this.store.select(selectPeopleData);
  subscription!: Subscription;
  searchValue = new FormControl('');
  peopleData!: IPerson[];
  filteredPeopleData!: IPerson[] | null;
  isActive = true;
  timer = 0;

  constructor(private store: Store) {}

  updatePeople() {
    if (this.isActive) {
      this.searchValue.setValue('');
      this.store.dispatch(PeopleActions.FetchPeople());
      this.store.dispatch(PeopleActions.ChangeIsActive({ isActive: false }));
      this.store.dispatch(PeopleActions.ChangeTimerPeople({ timer: 59 }));
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

  findPeople() {
    const searchValue = this.searchValue.getRawValue() as string;
    if (this.peopleData) {
      const filteredGroupData = this.peopleData.filter((person) =>
        person.name.includes(searchValue)
      );
      this.filteredPeopleData = filteredGroupData;
    }
  }

  ngOnInit(): void {
    this.subscription = this.timer$.subscribe((value) => {
      this.timer = value;
    });

    const secondSubscription = this.isActive$.subscribe((value) => {
      this.isActive = value;
    });

    const thirdSubscription = this.peopleData$.subscribe((peopleData) => {
      this.peopleData = peopleData;
      this.filteredPeopleData = peopleData;
    });

    this.subscription.add(secondSubscription);
    this.subscription.add(thirdSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
