import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {

  constructor(private http: HttpService,private httpClient: HttpClient) { }
  getOrdersInformation(orderType:string): Observable<any> {
    let dataObj = {
          "orders_type":orderType
        }
    let user =  JSON.parse(localStorage.getItem('userDetails'));
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Token "+ user['data'].token)
    return this.httpClient.post(environment.localUrl + 'orders_retrieval',dataObj, {headers:headers});
  }
}