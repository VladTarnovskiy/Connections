import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from '../../models/profile';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProfileData } from 'src/app/store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
  subscription!: Subscription;
  // profileData!: IProfile;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.subscription =
    this.store.dispatch(ProfileActions.FetchProfile());
    // .subscribe({
    //   next: () => (data: IProfile) => {
    //     this.profileData = data;
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     this.profileService.handleError(err);
    //   },
    // });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
