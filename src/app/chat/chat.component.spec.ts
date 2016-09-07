/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { async, inject } from '@angular/core/testing';
import { ChatComponent } from './chat.component';

describe('Component: Chat', () => {
  it('should create an instance', () => {
    const roomId = 'myRoomId';
    const router = {
      snapshot: {
        params: {
          roomId
        }
      }
    };
    let component = new ChatComponent(<any> router);
    expect(component.roomId).toEqual(roomId);
  });
});
