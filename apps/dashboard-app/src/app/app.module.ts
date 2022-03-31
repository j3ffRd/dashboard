import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GetLoginUseCaseFactory, IExternalAuthenticationProvider, LoginUseCase, InMemoryLoginProvider, 
         InMemoryLoginProviderFactory } from '@dashboard-core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserDto } from '@dashboard-core';
import { DashboardHeaderModule } from '@dashboard-header';
import { DashboardMenuModule } from '@dashboard-menu';
import { DashboardChatModule } from '@dashboard/dashboard-chat';

export const IAuthenticationProvider = new InjectionToken<IExternalAuthenticationProvider>(
  'IExternalAuthenticationProvider',
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    DashboardHeaderModule,
    DashboardMenuModule,
    DashboardChatModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
      provide: IAuthenticationProvider,
      useFactory: (provider: AngularFireAuth): IExternalAuthenticationProvider => ({
        loginWithGoogle() {
          return provider
            .signInWithPopup(new auth.GoogleAuthProvider())
            .then((x) => ({ user: x.user as UserDto, credential: x.credential as any }));
        },
        loginWithGitHub() {
          return provider
            .signInWithPopup(new auth.GithubAuthProvider())
            .then((x) => ({ user: x.user as UserDto, credential: x.credential as any }));
        },
      }),
      deps: [AngularFireAuth],
    },
    {
      provide: InMemoryLoginProvider,
      useFactory: InMemoryLoginProviderFactory,
      deps: [IAuthenticationProvider],
    },
    {
      provide: LoginUseCase,
      useFactory: GetLoginUseCaseFactory,
      deps: [InMemoryLoginProvider],
    }
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
