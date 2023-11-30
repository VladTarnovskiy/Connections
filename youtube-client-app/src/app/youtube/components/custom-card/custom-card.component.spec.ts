import { YoutubeModule } from './../../youtube.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomCardComponent } from './custom-card.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockCustomCard = {
  title: 'hello',
  description: 'Incididunt laborum cillum excepteur anim irure anim aliqua.',
  img: null,
  linkVideo: null,
  date: null,
  tags: ['dog', 'cat'],
  id: 'dwdq3e23eq',
};

describe('CustomCardComponent', () => {
  let component: CustomCardComponent;
  let fixture: ComponentFixture<CustomCardComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CustomCardComponent],
      imports: [YoutubeModule],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CustomCardComponent);
    component = fixture.componentInstance;
    component.customCard = mockCustomCard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
