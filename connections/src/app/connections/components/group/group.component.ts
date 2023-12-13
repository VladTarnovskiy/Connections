import { Component, Input } from '@angular/core';
import { IGroup } from '../../models/groups';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  @Input() groupData!: IGroup;
}
