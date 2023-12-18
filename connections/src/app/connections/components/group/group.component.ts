import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IGroup } from '../../models/groups';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';
import { Router } from '@angular/router';

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

  // groupsData$: Observable<IConversations[] | null> =
  //   this.store.select(selectGroupDialogData);
  // groupsData!: IConversations[] | null;

  constructor(private store: Store, private router: Router) {}

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

  getGroupDialog() {
    // if (this.personData.haveConversationID && this.conversationsData) {
    //   this.conversationsData.forEach((conversation) => {
    //     if (conversation.companionID === this.personData.uid) {
    this.router.navigate([`/group/${this.groupData.id}`]);
    //     }
    //   });
    // } else {
    //   this.store.dispatch(
    //     ConversationActions.FetchCreateConversation({
    //       companion: this.personData.uid,
    //     })
    //   );
    // }
  }

  ngOnInit(): void {
    this.subscription = this.authData$.subscribe((value) => {
      this.authData = value;
    });
    // const childSubs = this.groupsData$.subscribe((groupsData) => {
    //   this.groupsData = groupsData;
    // });

    // this.subscription.add(childSubs);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
