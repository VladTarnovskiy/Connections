import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from '../../models/profile';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectProfileData,
  selectProfileEdit,
  selectProfileLoading,
} from 'src/app/store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import { FormControl, Validators } from '@angular/forms';
import { ValidateName } from 'src/app/auth/pages/register/validators.ts/name';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
  profileData!: IProfile | null;
  isLoading$: Observable<boolean> = this.store.select(selectProfileLoading);
  edit$: Observable<boolean> = this.store.select(selectProfileEdit);
  edit = false;
  isLoading = false;
  subscription!: Subscription;
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(40),
    ValidateName(),
  ]);

  constructor(private store: Store) {}

  editName() {
    this.store.dispatch(ProfileActions.ChangeEditProfile({ edit: true }));
  }

  cancelEdit() {
    this.store.dispatch(ProfileActions.ChangeEditProfile({ edit: false }));
    if (this.profileData) {
      this.name.setValue(this.profileData.name);
    }
  }

  saveName(name: string) {
    if (this.name.status === 'VALID') {
      this.store.dispatch(ProfileActions.FetchUpdateProfile({ name }));
    }
  }

  logout() {
    if (this.isLoading === false) {
      this.store.dispatch(ProfileActions.FetchRemoveProfile());
    }
  }

  ngOnInit(): void {
    this.subscription = this.isLoading$.subscribe((value) => {
      this.isLoading = value;
    });

    const childSubscription = this.edit$.subscribe((value) => {
      this.edit = value;
    });

    const secondChildSubscription = this.profileData$.subscribe(
      (profileData) => {
        this.profileData = profileData;
        if (this.profileData) {
          this.name.setValue(this.profileData.name);
        }
      }
    );

    this.subscription.add(childSubscription);
    this.subscription.add(secondChildSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
