import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  selectGroupsData,
  selectGroupsIsActive,
  selectGroupsLoading,
  selectGroupsTimer,
} from 'src/app/store/groups/selectors/groups.selectors';
import { IGroup } from '../../models/groups';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(selectGroupsLoading);
  timer$: Observable<number> = this.store.select(selectGroupsTimer);
  isActive$: Observable<boolean> = this.store.select(selectGroupsIsActive);
  groupsData$: Observable<IGroup[] | null> =
    this.store.select(selectGroupsData);
  isActive = true;
  timer = 0;
  // isLoading = false;
  subscription!: Subscription;

  constructor(private store: Store) {}

  updateGroups() {
    if (this.isActive) {
      this.store.dispatch(GroupsActions.FetchGroups());
      this.store.dispatch(GroupsActions.ChangeIsActive({ isActive: false }));
      this.store.dispatch(GroupsActions.ChangeTimerGroups({ timer: 10 }));
      const interval = setInterval(() => {
        this.timer -= 1;
        this.store.dispatch(
          GroupsActions.ChangeTimerGroups({ timer: this.timer })
        );
        if (this.timer === 0) {
          this.store.dispatch(GroupsActions.ChangeIsActive({ isActive: true }));
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  createGroup() {
    this.store.dispatch(GroupsActions.ChangeIsModal({ isModal: true }));
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

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }
}
