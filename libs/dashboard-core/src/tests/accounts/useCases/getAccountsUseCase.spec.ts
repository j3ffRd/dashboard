import { AccountProviderBuilder } from '../builders/accountProviderBuilder';
import { GetAccountsUseCaseFactory } from '../../../lib/domain';
import { FakeAccountBuilder } from '../entities/account.fake';
import { filter } from 'rxjs';

describe('get accounts use case', () => {
  const clientId = 235533;

  test('should get accounts and transactions', (done) => {
    const accounts = FakeAccountBuilder.getAccounts();

    const accountProvider = new AccountProviderBuilder().withAccounts(accounts).build();

    const getAccountsUseCase = GetAccountsUseCaseFactory(accountProvider);

    getAccountsUseCase.loadAccounts(clientId).subscribe((accounts) => {
      expect(JSON.stringify(accounts)).toEqual(JSON.stringify(accounts));
      done();
    });
  });

  test('should update account state after loading accounts', (done) => {
    const accounts = FakeAccountBuilder.getAccounts();

    const accountProvider = new AccountProviderBuilder().withAccounts(accounts).build();

    const getAccountsUseCase = GetAccountsUseCaseFactory(accountProvider);

    getAccountsUseCase.getAccounts().pipe(filter(x => x.length > 0)).subscribe(stateAccounts => {
      expect(stateAccounts).toEqual(accounts);
      done();
    });

    getAccountsUseCase.loadAccounts(clientId).subscribe();
  });
});
