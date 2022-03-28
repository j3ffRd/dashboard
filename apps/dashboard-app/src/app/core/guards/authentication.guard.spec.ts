import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './authentication.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core.module';
import { LoginUseCase } from '@dashboard-core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

const serviceUseCaseMock = {isLoggedIn: jest.fn()};

describe('authentication guard', () => {
  let guard: AuthGuardService;
  let route: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [
        AuthGuardService, 
        {provide: LoginUseCase, useValue: serviceUseCaseMock}
      ],
    });

    guard = TestBed.inject<AuthGuardService>(AuthGuardService);
    route = TestBed.inject<Router>(Router);
  });

  it('navigate to /login if the user is not logged in', (done) => {
    spyOn(route, 'navigate').and.stub();

    serviceUseCaseMock.isLoggedIn.mockReturnValueOnce(of(false));

    guard.canActivate().subscribe(isLoggedIn => {
      expect(isLoggedIn).toEqual(false);
      expect(route.navigate).toHaveBeenCalledWith(['login'])
      done();
    });   
  });

  it('should return true if the user state is logged in', (done) => {
    serviceUseCaseMock.isLoggedIn.mockReturnValueOnce(of(true));

    guard.canActivate().subscribe(isLoggedIn => {
      expect(isLoggedIn).toEqual(true);
      done();
    }); 
  });
});
