import { TestBed } from '@angular/core/testing';
import { AccountsProvider, LoginUseCase, Credential } from '@dashboard-core';
import { DashBoardPageModule } from '../../pages/dashboard/dashboard.module';
import { CoreModule } from '../core.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


describe('jwt interceptor', () => {
  let accountsProvider: AccountsProvider;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, HttpClientTestingModule, DashBoardPageModule,],
      providers: [
        {provide: LoginUseCase, useValue: {getToken: () => of(<Credential>{idToken: 'token'})}}
      ],
    });
    accountsProvider = TestBed.inject<AccountsProvider>(AccountsProvider);
    httpMock = TestBed.inject<HttpTestingController>(HttpTestingController);
  });

  it('should add authentication token in http request', () => {
    accountsProvider.getAccounts(12).subscribe();
  
    const httpRequest = httpMock.expectOne('https://myserver:5000/api/accounts/12');
  
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true); 
    
    expect(httpRequest.request.headers.get('Authorization')).toBe('Bearer token');
  });
});
