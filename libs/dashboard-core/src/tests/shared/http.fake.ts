import { of } from 'rxjs';
import { HttpClient } from '../../lib/infrastructure';

export class FakeHttpBuilder {
  private response: any = null;
  private url = '';

  withReponse(resp: any): FakeHttpBuilder {
    this.response = resp;
    return this;
  }

  withUrl(url: string): FakeHttpBuilder {
    this.url = url;
    return this;
  }

  build(): HttpClient {
    return {
      get: (url: string) => this.handleResponse(url),
      post: (url: string) => this.handleResponse(url),
      put: (url: string) => this.handleResponse(url),
      delete: (url: string) => this.handleResponse(url),
    };
  }

  private handleResponse(url: string) {
    if(this.url != url){
      throw `url: ${url} not equals expected ${this.url}`;
    }

    return of(this.response);
  }
}
