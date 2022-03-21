import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { HttpClient as AngularHttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AppConfiguration, HttpClient, LoggerProvider, LogProviderFactory,} from '@dashboard-core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptorService } from './services/httpError.interceptor';
import { GlobalErrorHandlerService } from './services/globalError.handler';
import { JwtInterceptorService } from './services/jwt.interceptor';

export const IHttpClient = new InjectionToken<HttpClient>('HttpClient');

export const ENVIRONMENT = new InjectionToken<AppConfiguration>('Environment');

@NgModule({
  imports: [],
  exports: [],
  providers: [
    { provide: environment, useValue: ENVIRONMENT },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    {
      provide: IHttpClient,
      useFactory: (angularHttpClient: AngularHttpClient): HttpClient => ({
        get<T>(url: string) {
          return angularHttpClient.get<T>(url);
        },
        post<T>(url: string, body: any) {
          return angularHttpClient.post<T>(url, body);
        },
        put<T>(url: string, body: any) {
          return angularHttpClient.put<T>(url, body);
        },
        delete<T>(url: string) {
          return angularHttpClient.delete<T>(url);
        },
      }),
      deps: [AngularHttpClient],
    },
    {
      provide: LoggerProvider,
      useFactory: LogProviderFactory,
      deps: [environment, IHttpClient],
    },
  ],
})
export class CoreModule {}
