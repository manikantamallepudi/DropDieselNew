import { userRegistration } from './../Models/userRegistration';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // environment:environment;
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    let userDetails:any = JSON.parse(localStorage.getItem('userDetails'));
    if(userDetails){
      return true;
    } else
    return false;
  }

  getRoles(): Observable<any> {
    return this.http.get(environment.localUrl + 'role');
  }

  userRegistration(user: userRegistration): Observable<any> {
    return this.http.post(environment.localUrl + 'registration', user);
  }

  userLogin(user: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Token "+ user)
    return this.http.post(environment.localUrl + 'login', '',{headers:headers});
  }
}
