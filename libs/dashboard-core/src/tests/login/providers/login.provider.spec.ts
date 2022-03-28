import {LoginProviderBuilder} from './../builders/loginProviderBuilder';
import {FakeLoginDto} from './../dto/loginDto.fake';
import {LoginProviderFactory} from './../../../lib/infrastructure/login/provider/authentication.provider';
import {FakeLoginBuilder} from './../entities/login.fake';

describe('login provider', () => {

  test('should login with google provider and return the connected user', async () => {
    const loginDataDto = FakeLoginDto.createLoginDto();

    const loginData = FakeLoginBuilder.getLoginData();  

    const externalProvider = new LoginProviderBuilder().withAuthenicationData(loginDataDto).build();
    const provider = LoginProviderFactory(externalProvider);

    const login = await provider.loginWithGoogle();

    expect(JSON.stringify(login)).toEqual(JSON.stringify(loginData));   
  });
});
