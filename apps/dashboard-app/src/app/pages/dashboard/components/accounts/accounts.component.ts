import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Account } from '@dashboard-core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent implements OnInit {
  @Input() accounts: Account[] | null = [];
  @Output() selectAccount = new EventEmitter<Account>();

  ngOnInit(): void {
    this.select(this.accounts ? this.accounts[0] : null);
  }

  select(account: Account | null) {
    if(account){
      this.selectAccount.emit(account);
    }    
  }
}
