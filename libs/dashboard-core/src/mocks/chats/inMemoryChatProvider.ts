import { delay, Observable, of } from "rxjs";
import { Chat, IChatProvider } from "../../lib/domain";
import { AppConfiguration, HttpClient } from "../../lib/infrastructure";
import { ChatMapper } from "../../lib/infrastructure/chats/mappers/chats.mapper";

export const InMemoryChatProviderFactory = (config: AppConfiguration, httpClient: HttpClient) =>
  new InMemoryChatProvider(config, httpClient, new ChatMapper());

export class InMemoryChatProvider implements IChatProvider {
  constructor(private config: AppConfiguration, private httpClient: HttpClient, private mapper: ChatMapper) {}

  getChats(): Observable<Chat[]> {
    const chats = [{
      id: '12',
      to: {
        id: '1',
        email: 'email@gmail.com',
        displayName: 'Peter Sampton',
        jobTitle: 'Developper',
        photoUrl: './../../../assets/Jessica R Farmer.jpg'
      },
      messages: [{
        date: new Date(2022,1,2),
        author: 'email@gmail.com',
        value: 'Salut!'
      },
      {
        date: new Date(2022,1,2),
        author: 'me@gmail.com',
        value: 'Salut, ca va ?'
      }]
    },
    {
      id: '13',
      to: {
        id: '1',
        email: 'email@gmail.com',
        displayName: 'Peter Sampton',
        jobTitle: 'Developper',
        photoUrl: './../../../assets/Brian C Tackitt.jpg'
      },
      messages: [{
        date: new Date(2022,1,2),
        author: 'email@gmail.com',
        value: 'Salut!'
      },
      {
        date: new Date(2022,1,2),
        author: 'me@gmail.com',
        value: 'Salut, ca va ?'
      }]
    }];

    return of(chats).pipe(delay(1000));
  }
}
