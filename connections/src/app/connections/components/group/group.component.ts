import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IGroup } from '../../models/groups';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit, OnDestroy {
  @Input() groupData!: IGroup;
  subscription!: Subscription;
  authData$: Observable<IUserDataStorage | null> =
    this.store.select(selectAuthData);
  authData!: IUserDataStorage | null;

  constructor(private store: Store) {}

  addRemoveGroupModal() {
    this.store.dispatch(
      GroupsActions.ChangeIsRemoveGroupModal({
        removeGroupData: {
          isRemoveGroupModal: true,
          groupID: this.groupData.id,
        },
      })
    );
  }

  ngOnInit(): void {
    this.subscription = this.authData$.subscribe((value) => {
      this.authData = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
