import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from '../entities/login';

export class AuthenticationState {
  private getLoginData$ = new BehaviorSubject<Login>(null);

  getLoginData(): Observable<Login> {
    return this.getLoginData$.asObservable();
  }

  isLogIn(): Observable<boolean> {
    return this.getLoginData().pipe(map((data) => data?.user != null));
  }

  setLogInInfo(data: Login) {
    this.getLoginData$.next(data);
  }
}
