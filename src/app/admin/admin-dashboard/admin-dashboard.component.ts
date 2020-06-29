import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public adminService:AdminServices) { }

  ngOnInit() {
    // this.getCompletedOrders();
  }

  getCompletedOrders(){
    this.adminService.getOrdersInformation("").subscribe(res => {
      console.log(res);
    })
  }

}
