import { Chat, Chatter, Message } from '../../../domain';
import { ChatDto } from '../dto/chatDto';
import {ChatterDto} from '../dto/chatterDto';
import { MessageDto } from '../dto/messageDto';

export class ChatMapper {
  map(chatsDto: ChatDto[]): Chat[] {
    const chats: Chat[] = [];

    if (!chatsDto) {
      return chats;
    }

    chatsDto.forEach((chatDto) => {
      const chat = Object.assign(new Chat(), {
        id: chatDto.id,
        chatter: this.mapChatter(chatDto.to),
        messages: chatDto.messages ? chatDto.messages.map(message => this.mapMessages(message)) : []
      });

      chats.push(chat);
    });

    return chats;
  }

  private mapChatter(chatterDto: ChatterDto): Chatter {
    if(!chatterDto) {
      return null;
    }

    return {
      id: chatterDto.id,
      email: chatterDto.email,
      displayName: chatterDto.displayName,
      jobTitle: chatterDto.jobTitle,
      photoUrl: chatterDto.photoUrl
    };
  }

  private mapMessages(messageDto: MessageDto): Message {
    return {
      date: messageDto.date,
      author: messageDto.author,
      value: messageDto.value
    };
  }
}
