import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Credential, LoginUseCase } from '@dashboard-core';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private loginUseCase: LoginUseCase) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.loginUseCase.getToken().pipe(
      switchMap((credential: Credential | null) => {
        const authReq = credential
          ? request.clone({ setHeaders: { Authorization: 'Bearer ' + credential.idToken } })
          : request;
        return next.handle(authReq);
      }),
    );
  }
}
