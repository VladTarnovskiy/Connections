import { Component } from '@angular/core';
import { Card } from 'src/app/youtube/models/card.model';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent {
  cards!: Card[];

  constructor(private dataService: SearchDataService) {
    this.dataService.sortData$.subscribe((data) => {
      this.cards = data;
    });
  }
}
