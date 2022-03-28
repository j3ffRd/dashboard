import { TestBed } from '@angular/core/testing';
import { LoggerProvider } from '@dashboard-core';
import { DashBoardPageModule } from '../../pages/dashboard/dashboard.module';
import { CoreModule } from '../core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from './globalError.handler';
import { ErrorHandler } from '@angular/core';


describe('global error interceptor', () => {
  let route: Router;
  let logger: LoggerProvider;
  let errorHandler: ErrorHandler;

  beforeEach(async () => {   
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, HttpClientTestingModule, DashBoardPageModule],
    })

    route = TestBed.inject<Router>(Router);
    logger = TestBed.inject<LoggerProvider>(LoggerProvider);
    errorHandler = TestBed.inject<ErrorHandler>(ErrorHandler);    
  });

  it('custom error Handler should be defined', () => {
    expect(errorHandler).toBeInstanceOf(GlobalErrorHandlerService); 
  });

  it('should navigate to error page when an unexpected error is thrown', () => {
    spyOn(route, 'navigate').and.stub();
    spyOn(logger, 'logError').and.stub();

    const error = {error: 'unexpected error'};

    errorHandler.handleError(error);

    expect(logger.logError).toHaveBeenCalledWith(error);
    expect(route.navigate).toHaveBeenCalledWith(['error']);    
  });
});
