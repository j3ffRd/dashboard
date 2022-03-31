import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBarComponent } from './components/chat-bar/chat-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChatBarComponent
  ],
  exports: [ChatBarComponent],
  providers: [
  ]
})
export class DashboardChatModule {}
