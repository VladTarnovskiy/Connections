import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PagesInfo } from 'src/app/redux/cards/reducers/cards.reducer';
import { selectPageInfo } from 'src/app/redux/cards/selectors/cards.selectors';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  pages$: Observable<PagesInfo> = this.store.select(selectPageInfo);
  pagesInfo!: PagesInfo;
  subscription!: Subscription;
  page: number = 1;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.pages$.subscribe(
      (pagesInfo) => (this.pagesInfo = pagesInfo)
    );
  }

  nextPage() {
    if (this.pagesInfo.nextPage) {
      console.log(this.pagesInfo.nextPage);
      this.page += 1;
      this.store.dispatch(
        CardsActions.ChangePage({
          pageToken: this.pagesInfo.nextPage,
          searchValue: this.pagesInfo.searchValue,
        })
      );
    }
  }
  prevPage() {
    if (this.pagesInfo.prevPage) {
      console.log(this.pagesInfo.prevPage);
      this.page -= 1;
      this.store.dispatch(
        CardsActions.ChangePage({
          pageToken: this.pagesInfo.prevPage,
          searchValue: this.pagesInfo.searchValue,
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
