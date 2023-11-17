import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectFavoriteCards } from 'src/app/redux/favorite/selectors/fav-cards.selectors';
import { Card } from 'src/app/youtube/models/card.model';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit, OnDestroy {
  cards!: Card[];

  haveCards = false;

  subscription!: Subscription;

  favCards$: Observable<Card[] | null> = this.store.select(selectFavoriteCards);

  ngOnInit() {
    this.subscription = this.favCards$.subscribe((favCards: Card[] | null) => {
      if (favCards && favCards.length) {
        this.haveCards = true;
      } else {
        this.haveCards = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private store: Store) {}
}
