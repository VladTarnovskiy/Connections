import { Component, EventEmitter, Output } from '@angular/core';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchResult = new EventEmitter<boolean>();

  @Output() sortBlock = new EventEmitter<boolean>();

  filterButton = false;

  constructor(private dataService: SearchDataService) {}

  onSearch(data: boolean) {
    this.dataService.setData();
    this.searchResult.emit(data);
  }

  turnSortBlock() {
    this.filterButton = !this.filterButton;
    this.sortBlock.emit(this.filterButton);
  }
}
