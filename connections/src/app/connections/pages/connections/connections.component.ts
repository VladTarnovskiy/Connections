import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import * as PeopleActions from 'src/app/store/people/actions/people.action';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {
  subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.subscription = this.isLoading$.subscribe((value) => {
    //   this.isLoading = value;
    // });
    this.store.dispatch(ProfileActions.FetchProfile());

    this.store.dispatch(GroupsActions.FetchGroups());
    this.store.dispatch(PeopleActions.FetchPeople());
  }

  // ngOnDestroy(): void {
  //   // this.subscription.unsubscribe();
  // }
}
