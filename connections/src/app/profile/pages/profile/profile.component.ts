import { Component } from '@angular/core';
import { IProfile } from '../../models/profile';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectProfileData,
  selectProfileLoading,
} from 'src/app/store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import { FormControl, Validators } from '@angular/forms';
import { ValidateName } from 'src/app/auth/pages/register/validators.ts/name';
import { ProfileService } from '../../services/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
  isLoading$: Observable<boolean> = this.store.select(selectProfileLoading);
  subscription!: Subscription;
  edit = false;
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(40),
    ValidateName(),
  ]);

  constructor(
    private store: Store,
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  editName() {
    this.edit = true;
  }

  cancelEdit() {
    this.edit = false;
  }

  saveName(name: string) {
    if (this.name.status === 'VALID') {
      this.store.dispatch(ProfileActions.UpdateProfile({ name }));
      this.profileService.updateProfile(name).subscribe({
        error: (err: HttpErrorResponse) => {
          this.profileService.handleError(err);
        },
      });
      this.edit = false;
    }
  }

  logout() {
    this.authService.logout();
  }
}
