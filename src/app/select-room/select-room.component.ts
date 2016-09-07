import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'fc-select-room',
  templateUrl: 'select-room.component.html',
  styleUrls: ['select-room.component.css']
})
export class SelectRoomComponent implements OnInit {
  rooms: FirebaseListObservable<any>;

  constructor(private _af: AngularFire) { }

  ngOnInit() {
    this.rooms = this._af.database.list('/rooms');

  
  }

}
