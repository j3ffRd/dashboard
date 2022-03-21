import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { DashboardPageComponent } from './dashboard.component';
import { DashBoardPageModule } from './dashboard.module';

describe('DashboardPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, DashBoardPageModule, CoreModule],
      declarations: [DashboardPageComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the dashboard page component', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
