import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  selectGroupsData,
  selectGroupsIsActive,
  selectGroupIsCreateModal,
  selectGroupsLoading,
  selectGroupsTimer,
  selectGroupIsRemoveModal,
} from 'src/app/store/groups/selectors/groups.selectors';
import { IGroup } from '../../models/groups';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';
import { IRemoveGroupData } from 'src/app/store/groups/models/group';
import { FormControl } from '@angular/forms';

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
  isCreateGroupModal$: Observable<boolean> = this.store.select(
    selectGroupIsCreateModal
  );
  removeGroupData$: Observable<IRemoveGroupData | null> = this.store.select(
    selectGroupIsRemoveModal
  );
  isActive = true;
  timer = 0;
  subscription!: Subscription;
  searchValue = new FormControl('');
  groupsData!: IGroup[] | null;
  filteredGroupData!: IGroup[] | null;

  constructor(private store: Store) {}

  updateGroups() {
    if (this.isActive) {
      this.searchValue.setValue('');
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
    this.store.dispatch(
      GroupsActions.ChangeIsCreateGroupModal({ isCreateGroupModal: true })
    );
  }

  findGroups() {
    const searchValue = this.searchValue.getRawValue() as string;
    if (this.groupsData) {
      const filteredGroupData = this.groupsData.filter((group) =>
        group.name.includes(searchValue)
      );
      this.filteredGroupData = filteredGroupData;
    }
  }

  ngOnInit(): void {
    this.subscription = this.timer$.subscribe((value) => {
      this.timer = value;
    });

    const secondSubscription = this.isActive$.subscribe((value) => {
      this.isActive = value;
    });

    const thirdSubscription = this.groupsData$.subscribe((groupsData) => {
      this.groupsData = groupsData;
      this.filteredGroupData = groupsData;
    });

    this.subscription.add(secondSubscription);
    this.subscription.add(thirdSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
