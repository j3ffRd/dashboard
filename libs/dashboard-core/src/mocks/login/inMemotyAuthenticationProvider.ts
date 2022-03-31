import { ILoginProvider, Login } from "../../lib/domain";
import { IExternalAuthenticationProvider } from "../../lib/infrastructure";
import { AuthenticationMapper } from "../../lib/infrastructure/login/mappers/authentication.mapper";


export const InMemoryLoginProviderFactory = (externalProvider: IExternalAuthenticationProvider) =>
  new InMemoryLoginProvider(externalProvider, new AuthenticationMapper());

export class InMemoryLoginProvider implements ILoginProvider {
  constructor(private externalProvider: IExternalAuthenticationProvider, private mapper: AuthenticationMapper) {}

  loginWithGoogle(): Promise<Login> {
    return this.login();
  }

  loginWithGitHub(): Promise<Login> {
    return this.login();
  }

  private login(): Promise<Login> {
    const login = new Login();
    login.credential = {
      accessToken: '45785212154544',
      idToken: '875421244545',
      provider: 'Google'
    },
    login.user = {
      id: '36',
      displayName: 'Angus MacGyver',
      email: 'macgyver@phoenix.com',
      photoUrl: ''
    }

    return Promise.resolve(login);
  }
}
