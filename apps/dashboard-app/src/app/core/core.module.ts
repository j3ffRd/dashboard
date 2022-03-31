import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { HttpClient as AngularHttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AppConfiguration, ChatsUseCase, ChatsUseCaseFactory, HttpClient, InMemoryChatProvider, InMemoryChatProviderFactory, LoggerProvider, LogProviderFactory} from '@dashboard-core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptorService } from './http-interceptors/httpError.interceptor';
import { GlobalErrorHandlerService } from './error-handlers/globalError.handler';
import { JwtInterceptorService } from './http-interceptors/jwt.interceptor';

export const IHttpClient = new InjectionToken<HttpClient>('HttpClient');

export const ENVIRONMENT = new InjectionToken<AppConfiguration>('Environment');

@NgModule({
  imports: [],
  exports: [],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
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
      deps: [ENVIRONMENT, IHttpClient],
    },
    {
      provide: InMemoryChatProvider,
      useFactory: InMemoryChatProviderFactory,
      deps: [ENVIRONMENT, IHttpClient],
    },
    {
      provide: ChatsUseCase,
      useFactory: ChatsUseCaseFactory,
      deps: [InMemoryChatProvider],
    },
  ],
})
export class CoreModule {}
