import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshButComponent } from './refresh-but.component';

describe('RefreshButComponent', () => {
  let component: RefreshButComponent;
  let fixture: ComponentFixture<RefreshButComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshButComponent]
    });
    fixture = TestBed.createComponent(RefreshButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
