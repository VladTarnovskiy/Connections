import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { provideMockStore } from '@ngrx/store/testing';
import { mockCardsInfo } from '../../pipes/filter/filter.pipe.spec';
import { Component } from '@angular/core';
import { YoutubeModule } from '../../youtube.module';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-button',
  template: '',
})
class MockButtonElement {}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, MockButtonElement],
      imports: [YoutubeModule, RouterTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = mockCardsInfo[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
