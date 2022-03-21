import { catchError, of } from 'rxjs';
import { AppConfiguration } from './appConfiguration';
import { HttpClient } from './httpClient';

enum LogLevel {
  ERROR,
  INFO,
}

export const LogProviderFactory = (config: AppConfiguration, httpClient: HttpClient) =>
  new LoggerProvider(config, httpClient);

export class LoggerProvider {
  constructor(private config: AppConfiguration, private httpClient: HttpClient) {}

  logInformation(message: string): void {
    if (!this.config.production) {
      console.log(message);
      return;
    }

    this.sendLog(LogLevel.INFO, message);
  }

  logError(error: any): void {
    if (!this.config.production) {
      console.error(error);
      return;
    }

    this.sendLog(LogLevel.ERROR, error);
  }

  private sendLog(level: LogLevel, body: any): void {
    const url = `${this.config.baseUrl}\\api\\logs`;
    const request = { level, body };
    this.httpClient.post(url, request).pipe(catchError(() => of(null)));
  }
}
