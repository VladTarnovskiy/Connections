import { Component, EventEmitter, Output } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
