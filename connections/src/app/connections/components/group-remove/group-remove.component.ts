import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-group-remove',
  templateUrl: './group-remove.component.html',
  styleUrls: ['./group-remove.component.scss'],
})
export class GroupRemoveComponent {
  @Input() groupID!: string;

  constructor(private store: Store) {}

  removeGroup() {
    this.store.dispatch(
      GroupsActions.FetchDeleteGroup({ groupID: this.groupID })
    );
    this.closeModal();
  }

  closeModal() {
    this.store.dispatch(
      GroupsActions.ChangeIsRemoveGroupModal({ removeGroupData: null })
    );
  }
}
