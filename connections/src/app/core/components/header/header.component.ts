import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProfile } from 'src/app/profile/models/profile';
import { selectProfileData } from 'src/app/store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  profileData$: Observable<IProfile | null> =
    this.store.select(selectProfileData);
  logIn = false;

  constructor(private store: Store, public router: Router) {}

  // ngOnInit() {
  // this.subscription = this.authService.isLoggedIn$.subscribe((data) => {
  //   this.logIn = data;
  // });
  // }

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.FetchProfile());
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
