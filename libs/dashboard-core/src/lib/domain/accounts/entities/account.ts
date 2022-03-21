export class Account {
  id!: number;
  type!: string;
  label!: string;
  balance!: number;
  currency!: string;
  transactions: AccountTransaction[];

  constructor() {
    this.transactions = [];
  }
}

export interface AccountTransaction {
  accountId: number;
  date: Date;
  type: string;
  description: string;
  amount: number;
  currency: string;
}
