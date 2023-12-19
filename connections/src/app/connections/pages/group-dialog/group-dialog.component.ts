import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import * as GroupDialogActions from 'src/app/store/group-dialog/actions/groupDialog.action';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';
import { IMessage } from '../../models/conversation';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import {
  selectGroupDialogData,
  selectGroupDialogIsActive,
  selectGroupDialogLoading,
  selectGroupDialogTimer,
} from 'src/app/store/group-dialog/selectors/groupDialog.selectors';
import {
  selectGroupIsRemoveModal,
  selectGroupsData,
} from 'src/app/store/groups/selectors/groups.selectors';
import { IRemoveGroupData } from 'src/app/store/groups/models/group';
import { FormControl, Validators } from '@angular/forms';
import { IGroup } from '../../models/groups';

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.scss'],
})
export class GroupDialogComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(selectGroupDialogLoading);
  isActive$: Observable<boolean> = this.store.select(selectGroupDialogIsActive);
  isRemoveGroupModal$: Observable<IRemoveGroupData | null> = this.store.select(
    selectGroupIsRemoveModal
  );
  timer$: Observable<number> = this.store.select(selectGroupDialogTimer);
  groupDialogData$: Observable<IMessage[]> = this.store.select(
    selectGroupDialogData
  );
  groupDialogData!: IMessage[];
  authData$: Observable<IUserDataStorage | null> =
    this.store.select(selectAuthData);
  groupsData$: Observable<IGroup[] | null> =
    this.store.select(selectGroupsData);
  groupsData!: IGroup[] | null;
  subscription!: Subscription;
  isActive = true;
  timer = 0;
  groupID!: string;
  authData!: IUserDataStorage | null;
  message = new FormControl('', [Validators.required]);

  constructor(private store: Store, route: ActivatedRoute) {
    route.params.pipe(map((p) => p['groupID'])).subscribe((id) => {
      this.groupID = id;
    });
  }

  updateGroupDialog() {
    if (this.isActive) {
      this.store.dispatch(
        GroupDialogActions.FetchUpdateGroupDialogData({
          groupID: this.groupID,
          science:
            this.groupDialogData[this.groupDialogData.length - 1].createdAt,
        })
      );
      this.store.dispatch(
        GroupDialogActions.ChangeIsActive({ isActive: false })
      );
      this.store.dispatch(
        GroupDialogActions.ChangeTimerGroupDialog({ timer: 10 })
      );
      const interval = setInterval(() => {
        this.timer -= 1;
        this.store.dispatch(
          GroupDialogActions.ChangeTimerGroupDialog({ timer: this.timer })
        );
        if (this.timer === 0) {
          this.store.dispatch(
            GroupDialogActions.ChangeIsActive({ isActive: true })
          );
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  deleteGroupDialog() {
    this.store.dispatch(
      GroupsActions.ChangeIsRemoveGroupModal({
        removeGroupData: {
          isRemoveGroupModal: true,
          groupID: this.groupID,
        },
      })
    );
  }

  sentMessage() {
    if (this.authData && this.message.valid) {
      const message = this.message.getRawValue() as string;
      const messageData = {
        groupID: this.groupID,
        message: message,
        authorID: this.authData.uid,
        createdAt: String(Date.now()),
      };

      this.store.dispatch(
        GroupDialogActions.FetchGroupDialogMessage({
          messageData: messageData,
        })
      );
      this.message.setValue('');
    }
  }

  isDeleteButActive() {
    if (this.authData && this.groupsData) {
      const groupX = this.groupsData.find((group) => group.id === this.groupID);
      if (groupX) {
        return groupX.createdBy === this.authData.uid;
      }
    }
    return false;
  }

  ngOnInit(): void {
    this.store.dispatch(
      GroupDialogActions.FetchGroupDialogData({
        groupID: this.groupID,
      })
    );
    this.subscription = this.timer$.subscribe((value) => {
      this.timer = value;
    });

    const childSubscription = this.isActive$.subscribe((value) => {
      this.isActive = value;
    });

    const secondChildSubscription = this.authData$.subscribe((authData) => {
      this.authData = authData;
    });
    const thirdChildSubscription = this.groupsData$.subscribe((groupsData) => {
      this.groupsData = groupsData;
    });

    const forthChildSubscription = this.groupDialogData$.subscribe(
      (groupDialogData) => {
        this.groupDialogData = groupDialogData;
      }
    );

    this.subscription.add(childSubscription);
    this.subscription.add(secondChildSubscription);
    this.subscription.add(thirdChildSubscription);
    this.subscription.add(forthChildSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
