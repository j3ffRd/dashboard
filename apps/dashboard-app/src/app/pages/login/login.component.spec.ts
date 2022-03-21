import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { LoginPageComponent } from './login.component';
import { LoginPageModule } from './login.module';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoginPageModule, CoreModule],
      declarations: [LoginPageComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the login page component', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
