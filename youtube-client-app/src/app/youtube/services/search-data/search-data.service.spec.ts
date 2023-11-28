import { TestBed } from '@angular/core/testing';
import { SearchDataService } from './search-data.service';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchDataService', () => {
  let service: SearchDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    }).compileComponents();
    service = TestBed.inject(SearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
