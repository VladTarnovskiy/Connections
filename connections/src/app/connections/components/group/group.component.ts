import { Component, Input } from '@angular/core';
import { IGroup } from '../../models/groups';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthData } from 'src/app/store/auth/selectors/auth.selectors';
import { IUserDataStorage } from 'src/app/auth/models/registration';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  authData$: Observable<IUserDataStorage> = this.store.select(selectAuthData);

  constructor(private store: Store) {}

  @Input() groupData!: IGroup;
}
