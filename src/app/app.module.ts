import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessagesService } from './services';
import { NavbarComponent } from './navbar/navbar.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAjbX6_CXppkikqSITnOfhdorKSH8piQwI',
  authDomain: 'fir-chat-15ff3.firebaseapp.com',
  databaseURL: 'https://fir-chat-15ff3.firebaseio.com',
  storageBucket: 'fir-chat-15ff3.appspot.com',
};

@NgModule({
  declarations: [
    AppComponent,
    SelectRoomComponent,
    ChatComponent,
    ChatMessageFormComponent,
    ChatMessageListComponent,
    ChatMessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SelectRoomComponent
      },
      {
        path: 'chat/:roomId',
        component: ChatComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdProgressCircleModule
  ],
  providers: [
    ChatMessagesService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
