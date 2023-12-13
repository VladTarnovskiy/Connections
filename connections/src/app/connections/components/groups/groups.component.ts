import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectGroupsData,
  selectGroupsLoading,
} from 'src/app/store/groups/selectors/groups.selectors';
import { IGroup } from '../../models/groups';
// import * as GroupsActions from 'src/app/store/groups/actions/groups.action';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent {
  isLoading$: Observable<boolean> = this.store.select(selectGroupsLoading);
  groupsData$: Observable<IGroup[] | null> =
    this.store.select(selectGroupsData);

  // isLoading = false;
  // subscription!: Subscription;
  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required]],
  // });

  constructor(private store: Store) {}

  // ngOnInit(): void {
  //   this.subscription = this.isLoading$.subscribe((value) => {
  //     this.isLoading = value;
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }
}
