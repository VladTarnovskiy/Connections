import { Component, Input } from '@angular/core';
import { IPerson } from '../../models/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() personData!: IPerson;
}
