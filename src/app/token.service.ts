import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenService {
    num = Math.random();

  constructor(private _http: HttpClient) { }

  getToken(){
      return this._http.post("http://localhost:8080/oauth/token?grant_type=password&username=sanket&password=123",
        {withCredentials: true},
        {headers: new HttpHeaders(
            {'Authorization': 'Basic ' + btoa('client:secret') })}
            );
  }
}
