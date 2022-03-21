import { AccountsMapper } from './../../../lib/infrastructure/accounts/mappers/accounts.mapper';
import { FakeAccountBuilderDto } from '../dto/accountDto.fake';
import { FakeAccountBuilder } from '../entities/account.fake';

describe('accounts mapper', () => {
  let accountMapper: AccountsMapper;

  beforeAll(() => {
    accountMapper = new AccountsMapper();
  });

  test('should map accounts to accountDtos', async () => {
    const accountDtos = FakeAccountBuilderDto.getAccountDtos();

    const result = accountMapper.map(accountDtos);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(FakeAccountBuilder.getAccounts()));
  });
});
