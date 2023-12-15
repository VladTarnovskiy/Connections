import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-group-remove',
  templateUrl: './group-remove.component.html',
  styleUrls: ['./group-remove.component.scss'],
})
export class GroupRemoveComponent {
  constructor(private store: Store) {}

  removeGroup() {
    console.log('ewd');
  }

  closeModal() {
    this.store.dispatch(
      GroupsActions.ChangeIsRemoveGroupModal({ isRemoveGroupModal: false })
    );
  }
}
