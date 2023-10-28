import { Component } from '@angular/core';
import { SortData } from './types/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result = false;

  sortBlock = false;

  sortInfo!: SortData;

  showResult(result: boolean) {
    this.result = result;
  }

  showSortBlock(sortBlock: boolean) {
    this.sortBlock = sortBlock;
  }

  sortBy(sortData: SortData) {
    this.sortInfo = sortData;
  }
}
