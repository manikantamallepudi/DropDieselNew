import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';

@Component({
  selector: 'app-future-orders',
  templateUrl: './future-orders.component.html',
  styleUrls: ['./future-orders.component.scss']
})
export class FutureOrdersComponent implements OnInit {
  
  public futureOrders:any;
  constructor(public adminService:AdminServices) { }

  ngOnInit(): void {
    this.getFutureOrders();
  }

  getFutureOrders(){
    this.adminService.getOrdersInformation(`future`).subscribe(res => {
      this.futureOrders = res['data'];
    })
  }

}
