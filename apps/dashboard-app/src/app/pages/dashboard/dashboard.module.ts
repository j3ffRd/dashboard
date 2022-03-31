import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardPageComponent } from './dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AccountsProvider, AccountsProviderFactory, AccountsUseCase,
         GetAccountsUseCaseFactory,
         InMemoryAccountsProvider,
         InMemoryAccountsProviderFactory} from '@dashboard-core';
import { ENVIRONMENT, IHttpClient } from '../../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DashboardPageComponent, AccountsComponent, TransactionsComponent],
  exports: [RouterModule],
  providers:[
    {
      provide: InMemoryAccountsProvider,
      useFactory: InMemoryAccountsProviderFactory,
      deps: [ENVIRONMENT, IHttpClient],
    },
    {
      provide: AccountsUseCase,
      useFactory: GetAccountsUseCaseFactory,
      deps: [InMemoryAccountsProvider],
    },
  ]
})
export class DashBoardPageModule {}
