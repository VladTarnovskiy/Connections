import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCardColor]',
})
export class CardColorDirective {
  borderColor: string = '#f87171';
  @Input('appCardColor') date!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorderColor();
    this.el.nativeElement.style.borderColor = this.borderColor;
  }

  setBorderColor() {
    const x = this.getDateDiff(this.date);
    if (x < 7) {
      this.borderColor = '#f87171';
    } else if (x >= 7 && x < 30) {
      this.borderColor = '#4ade80';
    } else if (x >= 30 && x < 180) {
      this.borderColor = '#fef08a';
    } else {
      this.borderColor = '#f87171';
    }
  }

  getDateDiff(data: string) {
    const date1 = Date.parse(data);
    const date2 = Date.now();
    const diffInMs = Math.abs(date2 - date1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  }
}
