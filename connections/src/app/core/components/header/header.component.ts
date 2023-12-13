import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProfile } from 'src/app/profile/models/profile';
import { selectProfileData } from 'src/app/store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
  logIn = false;

  constructor(private store: Store, public authService: AuthService) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.FetchProfile());
    this.subscription = this.authService.isLoggedIn$.subscribe((data) => {
      this.logIn = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
