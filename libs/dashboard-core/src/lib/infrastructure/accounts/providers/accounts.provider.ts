import { Account } from './../../../domain/accounts/entities/account';
import { IAccountsProvider } from './../../../domain/accounts/ports/accountProvider';
import { AppConfiguration } from '../../shared/appConfiguration';
import { AccountDto } from '../dto/accountDto';
import { AccountsMapper } from '../mappers/accounts.mapper';
import { HttpClient } from '../../shared/httpClient';
import { map, Observable } from 'rxjs';

export const AccountsProviderFactory = (config: AppConfiguration, httpClient: HttpClient) =>
  new AccountsProvider(config, httpClient, new AccountsMapper());

export class AccountsProvider implements IAccountsProvider {
  constructor(private config: AppConfiguration, private httpClient: HttpClient, private mapper: AccountsMapper) {}

  getAccounts(clientId: number): Observable<Account[]> {
    const url = `${this.config.baseUrl}/api/accounts/${clientId}`;

    return this.httpClient
      .get<AccountDto[]>(url)
      .pipe(map((accountDtos: AccountDto[]) => this.mapper.map(accountDtos)));
  }
}
