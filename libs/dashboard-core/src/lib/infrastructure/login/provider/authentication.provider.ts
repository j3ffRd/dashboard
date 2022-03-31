import { ILoginProvider } from './../../../domain/login/ports/ILoginProvider';
import { AuthenticationMapper } from '../mappers/authentication.mapper';
import { IExternalAuthenticationProvider } from './externalAuthenticationProvider';
import { LoginDto } from '../dto/loginDto';
import { Login } from '../../../domain';

export const LoginProviderFactory = (externalProvider: IExternalAuthenticationProvider) =>
  new LoginProvider(externalProvider, new AuthenticationMapper());

export class LoginProvider implements ILoginProvider {
  constructor(private externalProvider: IExternalAuthenticationProvider, private mapper: AuthenticationMapper) {}

  loginWithGoogle(): Promise<Login> {
    return this.login(this.externalProvider.loginWithGoogle);
  }

  loginWithGitHub(): Promise<Login> {
    return this.login(this.externalProvider.loginWithGitHub);
  }

  private login(provider: any): Promise<Login> {
    return provider().then((data: LoginDto) => this.mapper.map(data));
  }
}
