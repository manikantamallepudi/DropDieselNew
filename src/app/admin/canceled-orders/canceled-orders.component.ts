import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';

@Component({
  selector: 'app-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.scss']
})
export class CanceledOrdersComponent implements OnInit {

  public cancelledOrders:any;

  constructor(public adminService:AdminServices) { }

  ngOnInit(): void {
    this.getCancelledOrders();
  }

  getCancelledOrders(){
    this.adminService.getOrdersInformation(`canceled`).subscribe(res => {
      this.cancelledOrders = res['data'];
    })
  }

}
