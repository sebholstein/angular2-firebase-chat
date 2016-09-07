/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }           from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { ChatMessageComponent } from './chat-message.component';

// Shallow Testing example
// Testing the component template rendering
describe('Component: ChatMessage', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatMessageComponent],
      // render unknown elements
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create an instance', () => {
    const f = TestBed.createComponent(ChatMessageComponent);
    const author = 'max';
    const body = 'hello!';
    const created = '2010-01-01';

    f.componentInstance.message = {
      author,
      body,
      created
    };
    f.detectChanges();
    expect(f.debugElement.query(By.css('md-card-title')).nativeElement.textContent).toContain(author);
    expect(f.debugElement.query(By.css('md-card-content')).nativeElement.textContent).toContain(body);
  });
});
