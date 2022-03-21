import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../entities/account';

export class AccountsState {
  private accounts$ = new BehaviorSubject<Account[]>([]);

  getAccounts$(): Observable<Account[]> {
    return this.accounts$.asObservable();
  }

  setAccounts(accounts: Account[]): void {
    this.accounts$.next(accounts);
  }
}
