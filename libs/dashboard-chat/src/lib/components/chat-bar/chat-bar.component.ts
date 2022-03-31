import { Component, Input, OnInit } from '@angular/core';
import { Chat, ChatsUseCase } from '@dashboard-core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'dashboard-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss'] 
})
export class ChatBarComponent implements OnInit {
  @Input() expanded = false;

  chats$: Observable<Chat[]>;

  constructor(private chatsUseCase: ChatsUseCase){
  }

  ngOnInit(): void {
    this.chats$ = this.chatsUseCase.loadChats().pipe(tap(x => console.log(x)));
  }
}
