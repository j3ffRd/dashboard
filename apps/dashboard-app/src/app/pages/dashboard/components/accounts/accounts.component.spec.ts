import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AccountsComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the accounts component', () => {
    const fixture = TestBed.createComponent(AccountsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
