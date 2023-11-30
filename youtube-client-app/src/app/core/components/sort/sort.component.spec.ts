import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [FormsModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
