import { Component, EventEmitter, Output } from '@angular/core';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchResult = new EventEmitter<boolean>();

  @Output() sortBlock = new EventEmitter<boolean>();

  filterButton = false;

  onSearch(data: boolean) {
    this.searchResult.emit(data);
  }

  turnSortBlock() {
    this.filterButton = !this.filterButton;
    this.sortBlock.emit(this.filterButton);
  }
}
