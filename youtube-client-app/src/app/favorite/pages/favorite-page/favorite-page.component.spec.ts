import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FavoritePageComponent } from './favorite-page.component';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  template: '',
})
class MockAddTodoComponent {}

describe.only('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;
  let store: MockStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FavoritePageComponent, MockAddTodoComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(Store) as MockStore;
    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render no items message', () => {
    const bannerElement: HTMLElement = fixture.debugElement.query(
      By.css('.no-item')
    ).nativeElement;
    fixture.detectChanges();
    expect(bannerElement.textContent).toEqual('No favorite.');
  });
});
