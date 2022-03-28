import { User } from '../entities/user';
import { Credential } from '../entities/credential';
import { ILoginProvider } from '../ports/ILoginProvider';
import { AuthenticationState } from '../state/authentication.state';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const GetLoginUseCaseFactory = (provider: ILoginProvider) =>
  new LoginUseCase(provider, new AuthenticationState());

export class LoginUseCase {
  constructor(private provider: ILoginProvider, private state: AuthenticationState) {}

  loginWithGoogle(): Promise<User> {
    return this.provider.loginWithGoogle().then((data) => {
      this.state.setLogInInfo(data);
      return data.user;
    });
  }

  loginWithGithub(): Promise<User> {
    return this.provider.loginWithGoogle().then((data) => {
      this.state.setLogInInfo(data);
      return data.user;
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.state.isLogIn();
  }

  getToken(): Observable<Credential> {
    return this.state.getLoginData().pipe(map(x => x.credential));
  }
}
