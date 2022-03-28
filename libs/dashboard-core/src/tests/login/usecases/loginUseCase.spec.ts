import { GetLoginUseCaseFactory } from '../../../lib/domain';
import {LoginProviderBuilder} from './../builders/loginProviderBuilder';
import {FakeLoginDto} from './../dto/loginDto.fake';
import {LoginProviderFactory} from './../../../lib/infrastructure/login/provider/authentication.provider';
import {FakeLoginBuilder} from './../entities/login.fake';
import {LoginDto} from './../../../lib/infrastructure/login/dto/loginDto';
import {ILoginProvider} from './../../../lib/domain/login/ports/ILoginProvider';
import { filter } from 'rxjs/operators';

describe('login use case', () => {

  test('should login with google provider and return the connected user', async () => {
    const loginDataDto = FakeLoginDto.createLoginDto();

    const loginData = FakeLoginBuilder.getLoginData();  

    const provider = createProvider(loginDataDto);

    const loginUseCase = GetLoginUseCaseFactory(provider);

    const user = await loginUseCase.loginWithGoogle();

    expect(JSON.stringify(user)).toEqual(JSON.stringify(loginData.user));   
  });

  test('should login with github provider and return the connected user', async () => {
    const loginDataDto = FakeLoginDto.createLoginDto();

    const loginData = FakeLoginBuilder.getLoginData();  

    const provider = createProvider(loginDataDto);

    const loginUseCase = GetLoginUseCaseFactory(provider);

    const user = await loginUseCase.loginWithGithub();

    expect(JSON.stringify(user)).toEqual(JSON.stringify(loginData.user));   
  });

  
  test('should update login state after login', async () => {

    const loginDataDto = FakeLoginDto.createLoginDto();

    const provider = createProvider(loginDataDto);

    const loginUseCase = GetLoginUseCaseFactory(provider);

    loginUseCase.isLoggedIn().pipe(filter(x => x != null)).subscribe(isLoggedIn => {
      expect(isLoggedIn).toEqual(true);
    });

    await loginUseCase.loginWithGoogle();
  });

  test('should get authentication token', async () => {

    const loginDataDto = FakeLoginDto.createLoginDto();

    const provider = createProvider(loginDataDto);

    const loginUseCase = GetLoginUseCaseFactory(provider);

    loginUseCase.getToken().pipe(filter(x => x != null)).subscribe(token => {
      expect(token).toEqual(loginDataDto.credential.accessToken);
    });

    await loginUseCase.loginWithGoogle();
  });

  function createProvider(loginDataDto: LoginDto): ILoginProvider {
    const externalProvider = new LoginProviderBuilder().withAuthenicationData(loginDataDto).build();
    return LoginProviderFactory(externalProvider);
  }
});
