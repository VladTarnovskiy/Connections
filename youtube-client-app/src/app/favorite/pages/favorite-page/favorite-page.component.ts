import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFavoriteCards } from 'src/app/redux/favorite/selectors/fav-cards.selectors';
import { Card } from 'src/app/youtube/models/card.model';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent {
  cards!: Card[];
  favCards$: Observable<Card[] | null> = this.store.select(getFavoriteCards);

  constructor(private store: Store) {}
}
