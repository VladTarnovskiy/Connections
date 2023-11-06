import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';
import { SortData } from 'src/app/types/sort';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YouTubePageComponent implements OnInit {
  cards!: Card[];

  result = false;

  sortBlock = false;

  sortInfo!: SortData;

  constructor(private dataService: SearchDataService) {
    this.dataService.sortData$.subscribe((data) => {
      this.cards = data;
    });
  }

  showResult(result: boolean) {
    this.result = result;
  }

  showSortBlock(sortBlock: boolean) {
    this.sortBlock = sortBlock;
  }

  sortBy(sortData: SortData) {
    this.sortInfo = sortData;
  }

  ngOnInit() {
    this.dataService.setData();
  }
}
