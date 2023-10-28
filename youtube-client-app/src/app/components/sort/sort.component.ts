import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  sortByDateDir: string = 'desc';
  sortByViewDir: string = 'desc';
  filterString: string = '';

  constructor(private dataService: SearchDataService) {}

  sortByDate() {
    this.sortByDateDir === 'desc'
      ? (this.sortByDateDir = 'asc')
      : (this.sortByDateDir = 'desc');
    this.dataService.sort({ sortBy: 'date', direction: this.sortByDateDir });
  }

  sortByView() {
    this.sortByViewDir === 'desc'
      ? (this.sortByViewDir = 'asc')
      : (this.sortByViewDir = 'desc');
    this.dataService.sort({ sortBy: 'view', direction: this.sortByViewDir });
  }

  filterByString() {
    this.dataService.filterByString(this.filterString);
  }
}
