import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';

@Component({
  selector: 'app-complete-orders',
  templateUrl: './complete-orders.component.html',
  styleUrls: ['./complete-orders.component.scss']
})
export class CompleteOrdersComponent implements OnInit {
  public completedOrders:any;

  constructor(public adminService:AdminServices) { }

  ngOnInit(): void {
    this.getCompletedOrders();
  }

  getCompletedOrders(){
    this.adminService.getOrdersInformation(`completed`).subscribe(res => {
      this.completedOrders = res['data'];
    })
  }

}
