import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TransactionsComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the transactions component', () => {
    const fixture = TestBed.createComponent(TransactionsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
