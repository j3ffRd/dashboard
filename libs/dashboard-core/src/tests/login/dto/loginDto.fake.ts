import { LoginDto } from '../../../lib/infrastructure/login/dto/loginDto';

export class FakeLoginDto {

  static createLoginDto(): LoginDto {
    return {
      user: {
        uid: 'uid',
        displayName: 'John Doe',
        email: 'test@gmail.com',
        photoURL: 'photoURL',
      },
      credential: {
        idToken: 'idToken',
        accessToken: 'accessToken',
        providerId: 'Google'
      }
    };
  }
}
