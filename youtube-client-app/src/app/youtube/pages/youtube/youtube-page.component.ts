import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from 'src/app/youtube/models/card.model';
import { getCurrentCards } from 'src/app/redux/cards/selectors/cards.selectors';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent {
  cards!: Card[];
  cards$: Observable<Card[] | undefined> = this.store.select(getCurrentCards);

  constructor(private store: Store) {}
}
