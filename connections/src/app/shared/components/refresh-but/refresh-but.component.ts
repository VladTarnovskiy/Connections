import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-refresh-but',
  templateUrl: './refresh-but.component.html',
  styleUrls: ['./refresh-but.component.scss'],
})
export class RefreshButComponent {
  @Input() active!: boolean;
}
