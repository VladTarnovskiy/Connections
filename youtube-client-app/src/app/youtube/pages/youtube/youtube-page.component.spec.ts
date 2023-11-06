import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubePageComponent } from './youtube-page.component';

describe('YouTubePageComponent', () => {
  let component: YouTubePageComponent;
  let fixture: ComponentFixture<YouTubePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouTubePageComponent],
    });
    fixture = TestBed.createComponent(YouTubePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
