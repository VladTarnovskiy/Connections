import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data/search-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() sortBlock = new EventEmitter<boolean>();
  private searchTerms = new Subject<string>();

  filterButton = false;
  constructor(private dataService: SearchDataService) {}

  onSearch(searchValue: string) {
    this.searchTerms.next(searchValue);
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        filter((data) => data.length > 2),
        debounceTime(1000),
        tap((x) => console.log(x)),
        distinctUntilChanged()
      )
      .subscribe((searchValue) => this.dataService.getCards(searchValue));
  }

  turnSortBlock() {
    this.filterButton = !this.filterButton;
    this.sortBlock.emit(this.filterButton);
  }
}
