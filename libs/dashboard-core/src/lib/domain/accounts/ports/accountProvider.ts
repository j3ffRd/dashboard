import { Observable } from 'rxjs';
import { Account } from '../entities/account';

export interface IAccountsProvider {
  getAccounts(clientId: number): Observable<Account[]>;
}
