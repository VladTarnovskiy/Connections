import { Component, EventEmitter, Output } from '@angular/core';
import { SortData } from 'src/app/types/sort';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Output() sortData = new EventEmitter<SortData>();
  sortByDateDir: string = 'desc';
  sortByViewDir: string = 'desc';

  sortByDate() {
    this.sortByDateDir === 'desc'
      ? (this.sortByDateDir = 'asc')
      : (this.sortByDateDir = 'desc');
    this.sortData.emit({ sortBy: 'date', direction: this.sortByDateDir });
  }

  sortByView() {
    this.sortByViewDir === 'desc'
      ? (this.sortByViewDir = 'asc')
      : (this.sortByViewDir = 'desc');
    this.sortData.emit({ sortBy: 'date', direction: this.sortByViewDir });
  }
}
