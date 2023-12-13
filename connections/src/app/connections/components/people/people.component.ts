import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectPeopleData,
  selectPeopleLoading,
} from 'src/app/store/people/selectors/people.selectors';
import { IPerson } from '../../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  isLoading$: Observable<boolean> = this.store.select(selectPeopleLoading);
  peopleData$: Observable<IPerson[] | null> =
    this.store.select(selectPeopleData);

  constructor(private store: Store) {}
}
