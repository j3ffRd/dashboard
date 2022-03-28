import { Login } from '../entities/login';

export interface ILoginProvider {
  loginWithGoogle(): Promise<Login>;
  loginWithGitHub(): Promise<Login>;
}
