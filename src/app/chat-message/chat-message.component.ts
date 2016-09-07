import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChatMessage } from '../models';

@Component({
  selector: 'fc-chat-message',
  template: `
  <md-card>
    <md-card-title>
      <small>{{ message.author }} - {{ message.created | date:'dd.MM.y HH:mm:ss' }}</small>
    </md-card-title>
    <md-card-content>
      {{ message.body}}
    </md-card-content>
  </md-card>
  `,
  styleUrls: ['chat-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent {
  @Input() message: ChatMessage;
}
