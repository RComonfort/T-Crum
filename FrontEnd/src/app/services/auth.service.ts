import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';


@Injectable()
export class AuthService {
  URL:string;
  headers: HttpHeaders;


  constructor(private http:HttpClient) {
    this.URL = 'http://localhost:8000/api';
    this.headers = new HttpHeaders();
    this.headers.append('ContentType', 'application/json');
  }

  // Make the post request with the id and password provided, if successful, sets session data
  login(id:string, password:string) {
    let member;
    let body = {
      id: id,
      password: password
    }

    let result = {
      success: false,
      errors: null,
    };

    this.http.post(
      this.URL + '/login',
      JSON.stringify(body),
      { headers: this.headers }
    )
    .subscribe(
      resp => {
        this.setSession(resp);
        result.success = true;
      },
      err => {
        result.errors = err;    
      }
    );  

    return result;
  }

  // Sets session data with the login response
  setSession(res){
    const expiresAt = moment().add(res.expirationTime, 'second');
     
    localStorage.setItem('token', res.token);
    localStorage.setItem('member', JSON.stringify(res.member));
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  // Delete session data
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('member');
    localStorage.removeItem('expires_at');
  }

  // Returns true if the the token exists and has not expired
  isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  // Get the moment expiration time
  getExpiration(){
    return moment(JSON.parse(localStorage.getItem('expires_at')));
  }

  // get the logged in member
  getMember(){
    return JSON.parse(localStorage.getItem('member'))
  }
}
