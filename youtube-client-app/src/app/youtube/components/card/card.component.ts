import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Observable, Subscription, find, from, map, switchMap,
} from 'rxjs';
import { selectFavoriteCards } from 'src/app/redux/favorite/selectors/fav-cards.selectors';
import { Card } from 'src/app/youtube/models/card.model';
import * as FavCardsActions from 'src/app/redux/favorite/actions/fav-cards.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card!: Card;

  favCards$: Observable<Card[] | null> = this.store.select(selectFavoriteCards);

  isFavorite = false;

  subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.favCards$
      .pipe(
        switchMap((favCards) => from(favCards ?? []).pipe(
          find((favCard) => favCard.id === this.card.id),
          map((value) => !!value),
        )),
      )
      .subscribe((isFav: boolean) => {
        if (isFav) {
          this.isFavorite = true;
        } else {
          this.isFavorite = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addFavorite() {
    this.store.dispatch(FavCardsActions.AddFavCard({ newCard: this.card }));
  }

  removeFavorite() {
    this.store.dispatch(FavCardsActions.RemoveFavCard({ key: this.card.id }));
  }
}
