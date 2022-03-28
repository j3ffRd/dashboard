import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Account, AccountsUseCase } from '@dashboard-core';
import { of } from 'rxjs';
import { CoreModule } from '../../core/core.module';
import { DashboardPageComponent } from './dashboard.component';
import { DashBoardPageModule } from './dashboard.module';

const accountsUseCaseMock = {loadAccounts: jest.fn(), getSelectedTransactions: jest.fn()};
const router = {snapshot: {params:{id: 12}}};

describe('DashboardPageComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, DashBoardPageModule, CoreModule],
      declarations: [DashboardPageComponent],
      providers: [
        {provide: AccountsUseCase, useValue: accountsUseCaseMock},
        {provide: router, useValue: router}
      ],
    }).compileComponents();
  });

  it('should create the dashboard page component', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load accounts by userId', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    accountsUseCaseMock.loadAccounts.mockImplementation(() => (of([{id:12}])));

    app.ngOnInit();

    app.accounts$?.subscribe(accounts => {
      expect(accounts.length).toBe(1);
      expect(accounts[0].id).toBe(12);
    })
  });

  it('should get selected transactions', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    accountsUseCaseMock.getSelectedTransactions.mockImplementation(() => (of([{accountId:12}])));

    app.selectAccount(<Account>{id: 12});

    app.transactions$?.subscribe(transactions => {
      expect(transactions.length).toBe(1);
      expect(transactions[0].accountId).toBe(12);
    })
  });
});
