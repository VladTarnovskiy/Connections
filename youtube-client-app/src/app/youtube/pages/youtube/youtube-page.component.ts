import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Card } from 'src/app/youtube/models/card.model';
import {
  selectCurrentCards,
  selectCustomCards,
  selectLoading,
  selectPage,
} from 'src/app/redux/cards/selectors/cards.selectors';
import { CustomCard } from '../../models/customCard.model';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent implements OnDestroy, OnInit {
  cards$: Observable<Card[] | undefined> =
    this.store.select(selectCurrentCards);

  isLoading$: Observable<boolean> = this.store.select(selectLoading);

  page$: Observable<number> = this.store.select(selectPage);

  customCards$: Observable<CustomCard[] | null> =
    this.store.select(selectCustomCards);

  customCardsCount!: number;

  subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.customCards$.subscribe((customCards) => {
      if (customCards) {
        this.customCardsCount = 20 - customCards.length;
      }
    });
  }

  ngOnDestroy() {
    const setLocalDataSubscription = this.customCards$.subscribe(
      (customCards) =>
        localStorage.setItem('customCards', JSON.stringify(customCards))
    );
    this.subscription.unsubscribe();
    setLocalDataSubscription.unsubscribe();
  }
}
