import { FakeAccountBuilder } from '../entities/account.fake';
import { FakeAccountBuilderDto } from '../dto/accountDto.fake';
import { FireBaseConfig } from '../../../lib/infrastructure/shared/appConfiguration';
import { AccountsProvider } from '../../../lib/infrastructure/accounts/providers/accounts.provider';
import { FakeHttpBuilder } from '../../shared/http.fake';
import { AccountsMapper } from '../../../lib/infrastructure/accounts/mappers/accounts.mapper';

describe('account provider', () => {
  const clientId = 23455543;

  test('should get accounts and transactions', (done) => {
    const config = { production: true, baseUrl: 'https://myServer', firebase: <FireBaseConfig>{} };

    const httpClient = new FakeHttpBuilder()
      .withReponse(FakeAccountBuilderDto.getAccountDtos())
      .withUrl(`https://myServer/api/accounts/${clientId}`)
      .build();

    const provider = new AccountsProvider(config, httpClient, new AccountsMapper());

    provider.getAccounts(clientId).subscribe((accounts) => {
      expect(JSON.stringify(accounts)).toEqual(JSON.stringify(FakeAccountBuilder.getAccounts()));
      done();
    });
  });
});
