import { LoginDto } from './../../../lib/infrastructure/login/dto/loginDto';
import { IExternalAuthenticationProvider } from './../../../lib/infrastructure/login/provider/externalAuthenticationProvider';

export class LoginProviderBuilder {
  private loginData: LoginDto;

  withAuthenicationData(loginData: LoginDto) {
    this.loginData = loginData;
    return this;
  }

  build(): IExternalAuthenticationProvider {
    return {
      loginWithGoogle: () => Promise.resolve(this.loginData),
      loginWithGitHub: () => Promise.resolve(this.loginData),
    };
  }
}
