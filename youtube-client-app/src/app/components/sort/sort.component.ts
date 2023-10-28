import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  sortByDateDir = 'desc';

  sortByViewDir = 'desc';

  filterString = '';

  constructor(private dataService: SearchDataService) {}

  sortByDate() {
    if (this.sortByDateDir === 'desc') {
      this.sortByDateDir = 'asc';
    } else {
      this.sortByDateDir = 'desc';
    }
    this.dataService.sort({ sortBy: 'date', direction: this.sortByDateDir });
  }

  sortByView() {
    if (this.sortByViewDir === 'desc') {
      this.sortByViewDir = 'asc';
    } else {
      this.sortByViewDir = 'desc';
    }

    this.dataService.sort({ sortBy: 'view', direction: this.sortByViewDir });
  }

  filterByString() {
    this.dataService.filterByString(this.filterString.toLowerCase());
  }
}
