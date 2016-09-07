import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fc-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  roomId: string;

  constructor(private _route: ActivatedRoute) {
    this.roomId = this._route.snapshot.params['roomId'];
  }
}
