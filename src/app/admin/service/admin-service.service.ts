import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {

  constructor(private http: HttpService) { }

  // getPendingOrders(): Observable<any> {
    // let url = `${environment.localUrl}`;
    // return this.http.HttpRequest({ url, method: 'G' });
  // }
}