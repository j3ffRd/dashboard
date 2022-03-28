import { TestBed } from '@angular/core/testing';
import { AccountsProvider, LoginUseCase, Credential, LoggerProvider } from '@dashboard-core';
import { DashBoardPageModule } from '../../pages/dashboard/dashboard.module';
import { CoreModule } from '../core.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';


describe('http error interceptor', () => {
  let accountsProvider: AccountsProvider;
  let httpMock: HttpTestingController;
  let route: Router;
  let logger: LoggerProvider;

  beforeEach(async () => {   
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, HttpClientTestingModule, DashBoardPageModule,],
      providers: [
        {provide: LoginUseCase, useValue: {getToken: () => of(<Credential>{idToken: 'token'})}}
      ],
    });
    accountsProvider = TestBed.inject<AccountsProvider>(AccountsProvider);
    httpMock = TestBed.inject<HttpTestingController>(HttpTestingController);
    route = TestBed.inject<Router>(Router);
    logger = TestBed.inject<LoggerProvider>(LoggerProvider);
  });

  it('should navigate to login page when http status is 401', () => {
    spyOn(route, 'navigate').and.stub();
    spyOn(logger, 'logError').and.stub();

    accountsProvider.getAccounts(12).subscribe();

    httpMock.expectOne('https://myserver:5000/api/accounts/12')
            .flush('error',{ status: 401, statusText: 'Not Authorized' });

    expect(route.navigate).toHaveBeenCalledWith(['login']);
    expect(logger.logError).toHaveBeenCalledWith('error status : 401 Not Authorized');
    httpMock.verify();       
  });

  it('should navigate to error page when http status is 403', () => {
    spyOn(route, 'navigate').and.stub();
    spyOn(logger, 'logError').and.stub();

    accountsProvider.getAccounts(12).subscribe();

    httpMock.expectOne('https://myserver:5000/api/accounts/12')
            .flush('error',{ status: 403, statusText: 'Forbidden' });

    expect(route.navigate).toHaveBeenCalledWith(['error/unauthorized']);
    expect(logger.logError).toHaveBeenCalledWith('error status : 403 Forbidden');
    httpMock.verify();       
  });
});
