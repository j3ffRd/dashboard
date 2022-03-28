import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, AccountTransaction, AccountsUseCase } from '@dashboard-core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  accounts$: Observable<Account[]> | undefined;
  transactions$: Observable<AccountTransaction[]> | undefined;

  constructor(private accountUseCase: AccountsUseCase, private router: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.router.snapshot.params['id'];
    this.accounts$ = this.accountUseCase.loadAccounts(userId);
  }

  selectAccount(account: Account) {
    this.transactions$ = this.accountUseCase.getSelectedTransactions(account.id);
  }
}
