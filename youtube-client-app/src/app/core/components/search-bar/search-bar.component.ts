import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() sortBlock = new EventEmitter<boolean>();

  private searchTerms = new Subject<string>();

  filterButton = false;

  constructor(private store: Store) {}

  onSearch(searchValue: string) {
    this.searchTerms.next(searchValue);
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        filter((data) => data.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((searchValue) =>
        this.store.dispatch(CardsActions.FetchCards({ searchValue }))
      );
  }

  turnSortBlock() {
    this.filterButton = !this.filterButton;
    this.sortBlock.emit(this.filterButton);
  }

  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }
}
