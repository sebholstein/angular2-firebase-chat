/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChatComponent } from './chat.component';

describe('Component: Chat', () => {
  it('should create an instance', () => {
    let component = new ChatComponent();
    expect(component).toBeTruthy();
  });
});
