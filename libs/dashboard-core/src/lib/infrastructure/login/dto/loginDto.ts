import { UserDto } from './userDto';
import { CredentialDto } from './credentialDto';

export interface LoginDto {
    user: UserDto;
    credential: CredentialDto;
}
