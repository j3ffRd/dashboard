import { User } from '../../../domain/login/entities/user';
import { Credential } from '../../../domain/login/entities/credential';
import { UserDto } from '../dto/userDto';
import { CredentialDto } from '../dto/credentialDto';
import { Login } from '../../../domain/login/entities/login';
import { LoginDto } from '../dto/loginDto';

export class AuthenticationMapper {

  map(loginDto: LoginDto): Login{
    if(!loginDto){
      return null;
    }

    return {
      user: this.mapUser(loginDto.user),
      credential: this.mapCredential(loginDto.credential)
    }
  }

  private mapUser(userDto: UserDto): User {
    if(!userDto) {
      return null;
    }

    return {
      id: userDto.uid,
      displayName: userDto.displayName,
      email: userDto.email,
      photoUrl: userDto.photoURL,
    };
  }

  private mapCredential(credentialDto: CredentialDto): Credential {
    if(!credentialDto) {
      return null;
    }

    return {
      idToken: credentialDto.idToken,
      accessToken: credentialDto.accessToken,
      provider: credentialDto.providerId,
    };
  }
}
