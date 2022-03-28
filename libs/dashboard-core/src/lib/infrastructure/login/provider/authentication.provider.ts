import { User } from './../../../domain/login/entities/user';
import { ILoginProvider } from './../../../domain/login/ports/ILoginProvider';
import { Credential } from './../../../domain/login/entities/credential';
import { AuthenticationMapper } from '../mappers/authentication.mapper';
import { IExternalAuthenticationProvider } from './externalAuthenticationProvider';
import { LoginDto } from '../dto/loginDto';

export const LoginProviderFactory = (externalProvider: IExternalAuthenticationProvider) =>
  new LoginProvider(externalProvider, new AuthenticationMapper());

export class LoginProvider implements ILoginProvider {
  constructor(private externalProvider: IExternalAuthenticationProvider, private mapper: AuthenticationMapper) {}

  loginWithGoogle(): Promise<{ user: User; credential: Credential }> {
    return this.login(this.externalProvider.loginWithGoogle);
  }

  loginWithGitHub(): Promise<{ user: User; credential: Credential }> {
    return this.login(this.externalProvider.loginWithGitHub);
  }

  private login(provider: any): Promise<{ user: User; credential: Credential }> {
    return provider().then((data: LoginDto) => this.mapper.map(data));
  }
}
