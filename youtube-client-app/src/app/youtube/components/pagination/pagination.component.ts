import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PagesInfo } from 'src/app/redux/cards/models/page';
import {
  selectPage,
  selectPageInfo,
} from 'src/app/redux/cards/selectors/cards.selectors';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  pagesInfo$: Observable<PagesInfo> = this.store.select(selectPageInfo);

  page$: Observable<number> = this.store.select(selectPage);

  pagesInfo!: PagesInfo;

  subscription!: Subscription;

  page!: number;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.pagesInfo$.subscribe((pagesInfo) => {
      this.pagesInfo = pagesInfo;
    });

    const childSubscription = this.page$.subscribe((storePage) => {
      this.page = storePage;
    });

    this.subscription.add(childSubscription);
  }

  nextPage() {
    if (this.pagesInfo.nextPage) {
      this.store.dispatch(
        CardsActions.ChangeCurrentPage({
          pageToken: this.pagesInfo.nextPage,
          searchValue: this.pagesInfo.searchValue,
          page: (this.page += 1),
        }),
      );
    }
  }

  prevPage() {
    if (this.pagesInfo.prevPage) {
      this.store.dispatch(
        CardsActions.ChangeCurrentPage({
          pageToken: this.pagesInfo.prevPage,
          searchValue: this.pagesInfo.searchValue,
          page: (this.page -= 1),
        }),
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
