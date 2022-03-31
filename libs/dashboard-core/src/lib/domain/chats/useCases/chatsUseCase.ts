import { catchError, Observable, of, tap } from 'rxjs';
import { Chat } from '../entities/chat';
import { IChatProvider } from '../ports/chat.provider';
import { ChatState } from '../state/chatState';

export const ChatsUseCaseFactory = (chatProvider: IChatProvider) =>
  new ChatsUseCase(chatProvider, new ChatState());

export class ChatsUseCase {
  constructor(private chatProvider: IChatProvider, private chatState: ChatState) {}

  loadChats(): Observable<Chat[]> {
    return this.chatProvider
      .getChats().pipe(
        tap((chats) => this.chatState.setChats(chats)),
        catchError(() => of([])));
  }

  getChats$(): Observable<Chat[]> {
    return this.chatState.getChats$();
  }
}
