import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
