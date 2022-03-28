import { LoginDto } from '../dto/loginDto';

export interface IExternalAuthenticationProvider {
  loginWithGitHub(): Promise<LoginDto>;
  loginWithGoogle(): Promise<LoginDto>;
}
