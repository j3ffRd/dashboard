import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginUseCase } from '@dashboard-core';
import { CoreModule } from '../../core/core.module';
import { LoginPageComponent } from './login.component';
import { LoginPageModule } from './login.module';

const serviceUseCaseMock = {loginWithGoogle: jest.fn()};

describe('LoginComponent', () => {
  let route: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoginPageModule, CoreModule],
      declarations: [LoginPageComponent],
      providers: [
        {provide: LoginUseCase, useValue: serviceUseCaseMock}
      ],
    }).compileComponents();

    route = TestBed.inject<Router>(Router);
  });

  it('should create the login page component', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should navigate to dashboard page when the user is logged in', async () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;

    spyOn(route, 'navigate').and.stub();

    serviceUseCaseMock.loginWithGoogle.mockImplementation(() => ({id: '12', displayName: '', email: '', photoUrl: ''}));

    await app.loginWithGoogle();

    expect(route.navigate).toHaveBeenCalledWith(['dashboard/12']);
  });
});
