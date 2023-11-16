import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHistoryBack]',
})
export class HistoryBackDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick(): void {
    this.location.back();
  }
}
