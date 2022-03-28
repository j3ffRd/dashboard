import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoggerProvider } from '@dashboard-core';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private logger: LoggerProvider) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (!(error.error instanceof ErrorEvent)) {
            this.logger.logError(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:
                this.router.navigate(['login']);
                break;
              case 403:
                this.router.navigate(['error/unauthorized']);
                break;
            }
          }
        }

        return throwError(() => error);
      }),
    );
  }
}
