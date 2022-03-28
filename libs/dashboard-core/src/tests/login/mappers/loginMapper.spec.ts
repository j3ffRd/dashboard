import { AuthenticationMapper } from './../../../lib/infrastructure/login/mappers/authentication.mapper';
import { FakeLoginDto } from '../dto/loginDto.fake';
import { FakeLoginBuilder } from '../entities/login.fake';

describe('login mapper', () => {
  let loginMapper: AuthenticationMapper;

  beforeAll(() => {
    loginMapper = new AuthenticationMapper();
  });

  test('should map loginDto data to login data', async () => {
    const loginDto = FakeLoginDto.createLoginDto();

    const result = loginMapper.map(loginDto);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(FakeLoginBuilder.getLoginData()));
  });
});
