import { Component, Input } from '@angular/core';
import { IMessage } from '../../models/conversation';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() messageData!: IMessage;
}
