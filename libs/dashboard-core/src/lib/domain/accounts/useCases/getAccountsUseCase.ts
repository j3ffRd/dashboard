import { catchError, map, Observable, of, tap } from 'rxjs';
import { Account, AccountTransaction } from '../entities/account';
import { IAccountsProvider } from '../ports/accountProvider';
import { AccountsState } from '../state/accountsState';

export const GetAccountsUseCaseFactory = (accountProvider: IAccountsProvider) =>
  new AccountsUseCase(accountProvider, new AccountsState());

export class AccountsUseCase {
  constructor(private accountProvider: IAccountsProvider, private accountsState: AccountsState) {}

  loadAccounts(clientId: number): Observable<Account[]> {
    return this.accountProvider
      .getAccounts(clientId).pipe(
        tap((accounts) => this.accountsState.setAccounts(accounts)),
        catchError(() => of([])));
  }

  getSelectedTransactions(accountId: number): Observable<AccountTransaction[]> {
    return this.getAccounts().pipe(
      map((accounts) => {
        const selectedAccount = accounts.find((account) => account?.id === accountId);
        return selectedAccount ? selectedAccount.transactions : [];
      })
    );
  }

  getAccounts(): Observable<Account[]> {
    return this.accountsState.getAccounts$();
  }
}
