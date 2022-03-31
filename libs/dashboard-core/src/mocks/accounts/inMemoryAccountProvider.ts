import { delay, Observable, of } from 'rxjs';
import { Account, IAccountsProvider } from '../../lib/domain';
import { AppConfiguration, HttpClient } from '../../lib/infrastructure';
import { AccountsMapper } from '../../lib/infrastructure/accounts/mappers/accounts.mapper';

export const InMemoryAccountsProviderFactory = (config: AppConfiguration, httpClient: HttpClient) =>
  new InMemoryAccountsProvider(config, httpClient, new AccountsMapper());

export class InMemoryAccountsProvider implements IAccountsProvider {
  constructor(private config: AppConfiguration, private httpClient: HttpClient, private mapper: AccountsMapper) {}

  getAccounts(): Observable<Account[]> {
    const accounts = [this.createAccount()];
    return of(accounts).pipe(delay(2000));    
  }

  private createAccount(): Account {
    return Object.assign(new Account(), {
      id: 78,
      type: 'check',
      label: 'Check account',
      balance: 1234.56,
      currency: 'EUR',
      transactions: [
        {
          accountId: 78,
          date: new Date(2022, 2, 1),
          type: '',
          description: '',
          amount: 12,
          currency: 'EUR',
        },
        {
          accountId: 78,
          date: new Date(2022, 1, 1),
          type: '',
          description: '',
          amount: 120,
          currency: 'EUR',
        },
      ],
    });
  }
}
