import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, AccountTransaction, AccountsUseCase } from '@dashboard-core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  @Input() userId!: number;

  accounts$: Observable<Account[]> | undefined;
  transactions$: Observable<AccountTransaction[]> | undefined;

  constructor(private accountUseCase: AccountsUseCase) {}

  ngOnInit(): void {
    this.accounts$ = this.accountUseCase.loadAccounts(this.userId).pipe();
  }

  selectAccount(account: Account) {
    this.transactions$ = this.accountUseCase.getSelectedTransactions(account.id);
  }
}
