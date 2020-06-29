import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {

  pendingOrders:any;

  constructor(public adminService:AdminServices) { }

  ngOnInit(): void {
    this.getPendingOrders();
  }

  getPendingOrders(){
    this.adminService.getOrdersInformation(`pending`).subscribe(res => {
      this.pendingOrders = res['data'];
    })
  }

}
