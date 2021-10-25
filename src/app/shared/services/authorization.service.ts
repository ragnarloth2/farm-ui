import {Injectable} from '@angular/core';
import {CustomRequest, RequestService} from './request.service';
import {HttpClient} from '@angular/common/http';

interface Teste {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends RequestService<Teste>{

  isLoggedIn = false;
  userToken!: string;
  errorMessage!: string;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  login(token: string): void {
    // this.request('/authorization', {}, {}, CustomRequest.POST);
    this.isLoggedIn = true;
    this.userToken = token;
    this.errorMessage = null;
  }

  logoff(): void {
    this.isLoggedIn = false;
  }
}
