import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const enum CustomRequest {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put'
}

export class RequestService<T> {

  private BASE_URL = 'http://localhost:3035';

  constructor(private jhttpClient: HttpClient) {}

  request(url: string, params: any, headers: any, type: CustomRequest ): Observable<T> {
    return this.jhttpClient[type.toString()]<T>(this.BASE_URL, {
      headers,
      params
    });
  }
}
