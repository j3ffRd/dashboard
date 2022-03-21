import { AccountDto } from '../../../lib/infrastructure/accounts/dto/accountDto';

export class FakeAccountBuilderDto {
  static getAccountDtos(): AccountDto[] {
    return [this.createAccount(), this.createAccount()];
  }

  private static createAccount(): AccountDto {
    return {
      id: 78,
      type: 'check',
      label: 'Check account',
      balance: 1234.56,
      currency: 'EUR',
      transactions: [
        {
          date: new Date(2022, 2, 1),
          type: '',
          description: '',
          amount: 12,
          currency: 'EUR',
        },
        {
          date: new Date(2022, 1, 1),
          type: '',
          description: '',
          amount: 120,
          currency: 'EUR',
        },
      ],
    };
  }
}
