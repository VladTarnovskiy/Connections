import { Component } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardColorDirective } from './card-color.directive';
import { YoutubeModule } from '../../youtube.module';

@Component({
  standalone: true,
  template: `
    <h2 appCardColor="">About</h2>
    <h3>Quote of the day:</h3>
  `,
  imports: [YoutubeModule],
})
export class StubComponent {}
describe('CardColorDirective', () => {
  let fixture: ComponentFixture<StubComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [StubComponent],
    }).createComponent(StubComponent);
    fixture.detectChanges();
  });

  it('should have red border <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.borderColor;
    expect(bgColor).toBe('#f87171');
  });
});
