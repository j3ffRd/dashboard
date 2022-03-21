import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './authentication.guard';
import { hot } from 'jest-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core.module';
import { LoginUseCase } from '@dashboard-core';

describe('App guard', () => {
  let guard: AuthGuardService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [AuthGuardService, LoginUseCase],
    });

    guard = TestBed.inject<AuthGuardService>(AuthGuardService);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = hot('(a|)', { a: false });

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should return true if the user state is logged in', (done) => {
    guard.canActivate().subscribe((x) => {
      expect(x).toBe(true);
      done();
    });
  });
});
