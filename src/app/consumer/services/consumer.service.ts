import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private httpClient: HttpClient) { }
  getDealersInformation(): Observable<any> {
    // let dataObj = {
    //   "orders_type": orderType
    // }
    let user = JSON.parse(localStorage.getItem('userDetails'));
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Token " + user['data'].token)
    return this.httpClient.get(environment.localUrl + 'get_dealers', { headers: headers });
  }

  getOrderHistory(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('userDetails'));
    let dataObj = {
      // "user_id": user['data'].user_id
      "user_id": 5
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Token " + user['data'].token)
    return this.httpClient.post(environment.localUrl + 'consumer_orders', dataObj, { headers: headers });
  }
}
