import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.url}/auth`;
  constructor(
    public http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.url}/sign-in`, {
      email, password,
    })
  }
}
