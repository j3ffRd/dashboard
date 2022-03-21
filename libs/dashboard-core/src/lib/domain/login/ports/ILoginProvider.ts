import { User } from '../entities/user';
import { Credential } from '../entities/credential';

export interface ILoginProvider {
  loginWithGoogle(): Promise<{ user: User; credential: Credential }>;
  loginWithGitHub(): Promise<{ user: User; credential: Credential }>;
}
