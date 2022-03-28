import { Login } from '../../../lib/domain/login/entities/login';

export class FakeLoginBuilder {

  static getLoginData(): Login {
    return {
      user: {
        id: 'uid',
        displayName: 'John Doe',
        email: 'test@gmail.com',
        photoUrl: 'photoURL',
      },
      credential: {
        idToken: 'idToken',
        accessToken: 'accessToken',
        provider: 'Google'
      }
    }
  }
}
