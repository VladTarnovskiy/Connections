import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import { ValidateName } from 'src/app/auth/pages/register/validators.ts/name';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent implements OnInit, OnDestroy {
  authData$: Observable<IUserDataStorage | null> =
    this.store.select(selectAuthData);
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    ValidateName(),
  ]);
  subscription!: Subscription;
  authData!: IUserDataStorage | null;

  constructor(private store: Store) {}

  closeModal() {
    this.store.dispatch(
      GroupsActions.ChangeIsCreateGroupModal({ isCreateGroupModal: false })
    );
  }

  createGroup() {
    const name = this.name.getRawValue() as string;
    if (this.name.status === 'VALID' && this.authData) {
      this.store.dispatch(
        GroupsActions.FetchCreateGroup({ name, userID: this.authData.uid })
      );
      this.closeModal();
    }
  }
  ngOnInit(): void {
    this.subscription = this.authData$.subscribe((authData) => {
      this.authData = authData;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
