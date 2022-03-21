import { User } from './../../../domain/login/entities/user';
import { ILoginProvider } from './../../../domain/login/ports/ILoginProvider';
import { Credential } from './../../../domain/login/entities/credential';
import { AuthenticationMapper } from '../mappers/authentication.mapper';
import { IExternalAuthenticationProvider } from './externalAuthenticationProvider';
import { UserDto } from '../dto/userDto';
import { CredentialDto } from '../dto/credentialDto';

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
    return provider().then((data: { user: UserDto; credential: CredentialDto }) => {
      const user = this.mapper.mapUser(data.user);
      const credential = this.mapper.mapCredential(data.credential);
      return { user, credential };
    });
  }
}
