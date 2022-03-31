import { Observable } from 'rxjs';
import { Chat } from '../entities/chat';

export interface IChatProvider {
  getChats(): Observable<Chat[]>;
}
