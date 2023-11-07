import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

enum Position {
  ASC = 'asc',
  DESC = 'desc',
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  sortByDateDir = Position.DESC;

  sortByViewDir = Position.DESC;

  filterString = '';

  constructor(private dataService: SearchDataService) {}

  sortByDate() {
    if (this.sortByDateDir === Position.DESC) {
      this.sortByDateDir = Position.ASC;
    } else {
      this.sortByDateDir = Position.DESC;
    }
    this.dataService.sort({ sortBy: 'date', direction: this.sortByDateDir });
  }

  sortByView() {
    if (this.sortByViewDir === Position.DESC) {
      this.sortByViewDir = Position.ASC;
    } else {
      this.sortByViewDir = Position.DESC;
    }

    this.dataService.sort({ sortBy: 'view', direction: this.sortByViewDir });
  }

  filterByString() {
    this.dataService.filterByString(this.filterString.toLowerCase());
  }
}
