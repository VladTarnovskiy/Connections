import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { YouTubePageComponent } from './youtube-page.component';

describe('YouTubePageComponent', () => {
  let component: YouTubePageComponent;
  let fixture: ComponentFixture<YouTubePageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [YouTubePageComponent],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(YouTubePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
