import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from '../entities/chat';

export class ChatState {
  private chats$ = new BehaviorSubject<Chat[]>([]);

  getChats$(): Observable<Chat[]> {
    return this.chats$.asObservable();
  }

  setChats(chats: Chat[]): void {
    this.chats$.next(chats);
  }

  addOrUpdateChat(chat: Chat): void {
    const chats = this.chats$.getValue();
    const index = chats.findIndex(x => x.id === chat.id);

    if(index > 0) {
      chats[index] = chat
    }else {
      chats.push(chat);
    }

    this.chats$.next(chats);
  }
}
