import { Injectable } from '@angular/core';
import { User } from '../../../domain/login/entities/user';
import { Credential } from '../../../domain/login/entities/credential';
import { UserDto } from '../dto/userDto';
import { CredentialDto } from '../dto/credentialDto';

@Injectable({ providedIn: 'root' })
export class AuthenticationMapper {
  mapUser(user: UserDto): User {
    return {
      id: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
    };
  }

  mapCredential(credential: CredentialDto): Credential {
    return {
      idToken: credential.idToken,
      accessToken: credential.accessToken,
      provider: credential.providerId,
    };
  }
}
