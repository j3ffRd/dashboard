import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorPageComponent } from './errors.component';
import { ErrorPageModule } from './errors.module';

describe('ErrorsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ErrorPageModule],
      declarations: [ErrorPageComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the error page component', () => {
    const fixture = TestBed.createComponent(ErrorPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
