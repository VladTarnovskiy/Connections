import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, CardItems } from 'src/app/models/card.model';
import { SearchDataService } from 'src/app/services/search-data.service';
import { data } from 'src/data/data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
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
