import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Card } from 'src/app/youtube/models/card.model';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';
import { getCurrentCards } from 'src/app/redux/cards/selectors/cards.selectors';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})

// export class YouTubePageComponent implements OnInit, OnDestroy {
export class YouTubePageComponent {
  cards!: Card[];
  cards$: Observable<Card[] | undefined> = this.store.select(getCurrentCards);

  // subscription!: Subscription;

  constructor(private dataService: SearchDataService, private store: Store) {}

  // ngOnInit() {
  //   this.subscription = this.dataService.sortData$.subscribe((data) => {
  //     this.cards = data;
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
