import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserDataStorage } from 'src/app/auth/models/registration';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import * as PeopleActions from 'src/app/store/people/actions/people.action';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit() {
    const userDetails = localStorage.getItem('userDetails');

    if (userDetails) {
      this.authService.checkLogin();
      const authData = JSON.parse(userDetails) as IUserDataStorage;
      this.store.dispatch(AuthActions.AddUserData({ authData }));
      this.store.dispatch(ProfileActions.FetchProfile());
      this.store.dispatch(PeopleActions.FetchPeople());
      this.store.dispatch(ProfileActions.FetchProfile());
      this.store.dispatch(GroupsActions.FetchGroups());
    }
  }
}
