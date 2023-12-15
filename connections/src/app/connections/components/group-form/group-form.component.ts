import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ValidateName } from 'src/app/auth/pages/register/validators.ts/name';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    ValidateName(),
  ]);

  constructor(private store: Store) {}

  closeModal() {
    this.store.dispatch(
      GroupsActions.ChangeIsCreateGroupModal({ isCreateGroupModal: false })
    );
  }

  createGroup() {
    const name = this.name.getRawValue() as string;
    if (this.name.status === 'VALID') {
      this.store.dispatch(GroupsActions.FetchCreateGroup({ name }));
      this.closeModal();
    }
  }
}
