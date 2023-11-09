import { Component } from '@angular/core';
import { SortData } from 'src/app/youtube/models/sort';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  result = false;

  sortBlock = false;

  sortInfo: SortData = {
    sortBy: 'date',
    direction: 'asc',
  };

  showSortBlock(sortBlock: boolean) {
    this.sortBlock = sortBlock;
  }

  sortBy(sortData: SortData) {
    this.sortInfo = sortData;
  }
}
