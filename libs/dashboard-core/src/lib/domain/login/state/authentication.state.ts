import { User } from '../entities/user';
import { Credential } from '../entities/credential';
import { BehaviorSubject, map, Observable } from 'rxjs';

export class AuthenticationState {
  private getUser$ = new BehaviorSubject<User | null>(null);
  private getCredential$ = new BehaviorSubject<Credential | null>(null);

  getUser(): Observable<User | null> {
    return this.getUser$.asObservable();
  }

  isLogIn(): Observable<boolean> {
    return this.getUser().pipe(map((user) => user != null));
  }

  getCredential(): Observable<Credential | null> {
    return this.getCredential$.asObservable();
  }

  setLogInInfo(user: User, credential: Credential) {
    this.getUser$.next(user);
    this.getCredential$.next(credential);
  }
}
