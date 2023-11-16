import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCardComponent } from './fav-card.component';

describe('FavCardComponent', () => {
  let component: FavCardComponent;
  let fixture: ComponentFixture<FavCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavCardComponent]
    });
    fixture = TestBed.createComponent(FavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
