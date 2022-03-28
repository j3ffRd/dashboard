import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginUseCase } from '@dashboard-core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private loginUseCase: LoginUseCase) {}

  canActivate(): Observable<boolean> {
    return this.loginUseCase.isLoggedIn().pipe(
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          return this.navigateToLoginPage();
        }
        return true;
      }),
      catchError(() => of(this.navigateToLoginPage())),
    );
  }

  private navigateToLoginPage(): boolean {
    this.router.navigate(['login']);
    return false;
  }
}
