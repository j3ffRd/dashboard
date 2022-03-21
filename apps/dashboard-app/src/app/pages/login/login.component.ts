import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUseCase } from '@dashboard-core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private loginUseCase: LoginUseCase, private router: Router) {}

  async loginWithGoogle(): Promise<void> {
    await this.loginUseCase.loginWithGoogle();
    this.router.navigate(['/']);
  }
}
