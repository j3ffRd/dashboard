import { Account, AccountTransaction } from './../../../../lib/domain/accounts/entities/account';
import { AccountDto, AccountTransactionDto } from '../dto/accountDto';

export class AccountsMapper {
  map(accountDtos: AccountDto[]): Account[] {
    const accounts: Account[] = [];

    if (!accountDtos) {
      return accounts;
    }

    accountDtos.forEach((accountDto) => {
      const account = Object.assign(new Account(), {
        id: accountDto.id,
        type: accountDto.type,
        label: accountDto.label,
        balance: accountDto.balance,
        currency: accountDto.currency,
        transactions: this.mapTransactions(accountDto.id, accountDto.transactions),
      });

      accounts.push(account);
    });

    return accounts;
  }

  private mapTransactions(accountId: number, transactions: AccountTransactionDto[]) {
    return transactions ? transactions.map((x) => this.mapTransaction(accountId, x)) : [];
  }

  private mapTransaction(accountId: number, transaction: AccountTransactionDto): AccountTransaction {
    return {
      accountId: accountId,
      date: transaction.date,
      type: transaction.type,
      description: transaction.description,
      amount: transaction.amount,
      currency: transaction.currency,
    };
  }
}
