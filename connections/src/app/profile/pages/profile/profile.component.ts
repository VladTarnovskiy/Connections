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
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import { FormControl, Validators } from '@angular/forms';
import { ValidateName } from 'src/app/auth/pages/register/validators.ts/name';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
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

  constructor(private store: Store, private authService: AuthService) {}

  editName() {
    this.store.dispatch(ProfileActions.ChangeEditProfile({ edit: true }));
    // this.edit = true;
  }

  cancelEdit() {
    this.store.dispatch(ProfileActions.ChangeEditProfile({ edit: false }));

    // this.edit = false;
  }

  saveName(name: string) {
    if (this.name.status === 'VALID') {
      this.store.dispatch(ProfileActions.FetchUpdateProfile({ name }));
      // this.edit = false;
    }
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(ProfileActions.RemoveProfile());
    this.store.dispatch(AuthActions.RemoveAuthData());
  }

  ngOnInit(): void {
    this.subscription = this.isLoading$.subscribe((value) => {
      this.isLoading = value;
    });

    const childSubscription = this.edit$.subscribe((value) => {
      this.edit = value;
    });

    this.subscription.add(childSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
