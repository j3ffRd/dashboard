import { AppConfiguration } from '../../shared/appConfiguration';
import { HttpClient } from '../../shared/httpClient';
import { map, Observable } from 'rxjs';
import { ChatMapper } from '../mappers/chats.mapper';
import { Chat, IChatProvider } from '../../../domain';
import { ChatDto } from '../dto/chatDto';

export const ChatsProviderFactory = (config: AppConfiguration, httpClient: HttpClient) =>
  new HttpChatProvider(config, httpClient, new ChatMapper());

export class HttpChatProvider implements IChatProvider {
  constructor(private config: AppConfiguration, private httpClient: HttpClient, private mapper: ChatMapper) {}

  getChats(): Observable<Chat[]> {
    const url = `${this.config.baseUrl}/api/chats/`;

    return this.httpClient
      .get<ChatDto[]>(url)
      .pipe(map((chatDtos: ChatDto[]) => this.mapper.map(chatDtos)));
  }
}
