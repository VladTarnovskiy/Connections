import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  cards!: Card[];

  constructor(private dataService: SearchDataService) {
    this.dataService.sortData$.subscribe((data) => {
      this.cards = data;
    });
  }

  ngOnInit() {
    this.dataService.setData();
  }
}
