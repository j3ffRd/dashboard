import { CredentialDto } from '../dto/credentialDto';
import { UserDto } from '../dto/userDto';

export interface IExternalAuthenticationProvider {
  loginWithGitHub(): Promise<{ user: UserDto; credential: CredentialDto }>;
  loginWithGoogle(): Promise<{ user: UserDto; credential: CredentialDto }>;
}
