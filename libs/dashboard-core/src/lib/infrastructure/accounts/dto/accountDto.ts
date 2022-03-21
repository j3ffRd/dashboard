export interface AccountDto {
  id: number;
  type: string;
  label: string;
  balance: number;
  currency: string;
  transactions: AccountTransactionDto[];
}

export interface AccountTransactionDto {
  date: Date;
  type: string;
  description: string;
  amount: number;
  currency: string;
}
