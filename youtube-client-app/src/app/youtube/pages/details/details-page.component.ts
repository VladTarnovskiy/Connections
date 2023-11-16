import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Card } from '../../models/card.model';
import { SearchDataService } from '../../services/search-data/search-data.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-details',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  card!: Observable<Card>;
  isFavorite: boolean = false;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: SearchDataService,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map((params: ParamMap) => this.service.getCard(params.get('id'))))
      .subscribe((card) => {
        this.card = card;
      });
  }

  addFavorite() {
    // this.store.dispatch(FavCardsActions.AddFavCard({ newCard: this.card }));
  }
  removeFavorite() {
    // this.store.dispatch(FavCardsActions.RemoveFavCard({ key: this.card.id }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
