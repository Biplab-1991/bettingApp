import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Login } from './models/common';

@Injectable()
export class LoginService {
  API_URL: any;
  constructor(public http: Http) { 
    //this.API_URL = 'http://localhost:8000/api';
    this.API_URL = 'http://52.42.14.183/betnesis/public/index.php/api';
  }

  login(data): Observable<Login> {
    const url: string = `${this.API_URL}/login`;
    return this.http.post(url, data)
      .map(res => <Login>res.json());
  }

}
