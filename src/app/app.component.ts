import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  providers: [TokenService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
    tokenService;
    constructor(private _http: HttpClient, tokenService: TokenService){
        this.tokenService = tokenService;
    };

    getToken(){
        console.log(this.tokenService.getToken());
        this.tokenService.getToken().subscribe(res => {console.log(res); this.getUsernameOfToken(res)});
        }
    getUsernameOfToken(tokenInfo){
        console.log('Bearer ' + tokenInfo["access_token"]);
        this._http.post(
            "http://localhost:8080/api/getUsername",
            {withCredentials: true},
            {headers: new HttpHeaders(
                                    {'Authorization': 'Bearer ' + tokenInfo["access_token"]}
                                    )
            }
            ).subscribe(res => {console.log(res)})
        }

}



/*
export class AppComponent {
  title: string = 'Sanket';
  constructor() {
      console.log("initialized component");
  }
  get2() {
    return 2;
    }
    names = ["bill", "bob", "joe"];
    showTitle = true;
}
*/
