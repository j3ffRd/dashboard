import { Account } from '../../../lib/domain/accounts/entities/account';

export class FakeAccountBuilder {
  static getAccounts(): Account[] {
    return [this.createAccount(), this.createAccount()];
  }

  private static createAccount(): Account {
    return Object.assign(new Account(), {
      id: 78,
      type: 'check',
      label: 'Check account',
      balance: 1234.56,
      currency: 'EUR',
      transactions: [
        {
          accountId: 78,
          date: new Date(2022, 2, 1),
          type: '',
          description: '',
          amount: 12,
          currency: 'EUR',
        },
        {
          accountId: 78,
          date: new Date(2022, 1, 1),
          type: '',
          description: '',
          amount: 120,
          currency: 'EUR',
        },
      ],
    });
  }
}
