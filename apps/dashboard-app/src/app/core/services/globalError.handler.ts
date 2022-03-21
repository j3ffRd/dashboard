import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerProvider } from '@dashboard-core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any) {
    const router = this.injector.get(Router);
    const logger = this.injector.get(LoggerProvider);

    logger.logError(error);

    router.navigate(['/error']);
  }
}
