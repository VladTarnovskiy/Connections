import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/youtube/models/card.model';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent implements OnInit, OnDestroy {
  cards!: Card[];

  subscription!: Subscription;

  constructor(private dataService: SearchDataService) {}

  ngOnInit() {
    this.subscription = this.dataService.sortData$.subscribe((data) => {
      this.cards = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
