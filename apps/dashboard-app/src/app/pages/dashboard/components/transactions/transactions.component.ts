import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AccountTransaction } from '@dashboard-core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  @Input() transactions: AccountTransaction[] | null = [];
}
