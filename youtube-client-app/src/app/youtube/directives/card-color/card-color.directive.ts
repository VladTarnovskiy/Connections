import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

enum Colors {
  Red = '#f87171',
  Green = '#4ade80',
  Yellow = '#fef08a',
}

@Directive({
  selector: '[appCardColor]',
})
export class CardColorDirective implements OnInit {
  borderColor = Colors.Red;

  @Input('appCardColor') date!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorderColor();
    this.el.nativeElement.style.borderColor = this.borderColor;
  }

  setBorderColor() {
    const x = this.getDateDiff(this.date);
    if (x < 7) {
      this.borderColor = Colors.Red;
    } else if (x >= 7 && x < 30) {
      this.borderColor = Colors.Green;
    } else if (x >= 30 && x < 180) {
      this.borderColor = Colors.Yellow;
    } else {
      this.borderColor = Colors.Red;
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
