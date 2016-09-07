import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models';
import { ChatMessagesService } from '../services';

@Component({
  selector: 'fc-chat-message-list',
  templateUrl: 'chat-message-list.component.html',
  styleUrls: ['chat-message-list.component.css']
})
export class ChatMessageListComponent implements OnInit {
  @Input() roomId: string;
  messages: Observable<ChatMessage[]>;

  constructor(private _cs: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this._cs.getMessagesByRoomId(this.roomId);
  }

  trackByKey(index: number, entry: ChatMessage) {
    return entry.$key;
  }

}
