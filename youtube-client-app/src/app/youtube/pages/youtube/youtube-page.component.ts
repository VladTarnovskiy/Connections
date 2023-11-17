import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from 'src/app/youtube/models/card.model';
import {
  selectCurrentCards,
  selectCustomCards,
  selectLoading,
} from 'src/app/redux/cards/selectors/cards.selectors';
import { CustomCard } from '../../models/customCard.model';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent implements OnDestroy {
  cards$: Observable<Card[] | undefined> =
    this.store.select(selectCurrentCards);
  isLoading$: Observable<boolean> = this.store.select(selectLoading);
  customCards$: Observable<CustomCard[] | null> =
    this.store.select(selectCustomCards);

  constructor(private store: Store) {}

  ngOnDestroy() {
    this.customCards$.subscribe((customCards) =>
      localStorage.setItem('customCards', JSON.stringify(customCards))
    );
  }
}
