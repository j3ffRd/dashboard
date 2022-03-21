import { IAccountsProvider } from '../../../lib/domain/accounts/ports/accountProvider';
import { Account } from '../../../lib/domain/accounts/entities/account';
import { of } from 'rxjs';

export class AccountProviderBuilder {
  private accounts: Account[] = [];

  withAccounts(accounts: Account[]) {
    this.accounts = accounts;
    return this;
  }

  build(): IAccountsProvider {
    return {
      getAccounts: () => of(this.accounts),
    };
  }
}
