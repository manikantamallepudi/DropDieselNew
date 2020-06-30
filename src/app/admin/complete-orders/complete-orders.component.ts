import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderInfoModalComponent } from '../order-info-modal/order-info-modal.component';

@Component({
  selector: 'app-complete-orders',
  templateUrl: './complete-orders.component.html',
  styleUrls: ['./complete-orders.component.scss']
})
export class CompleteOrdersComponent implements OnInit {
  public completedOrders:any;

  constructor(public adminService:AdminServices,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCompletedOrders();
  }

  getCompletedOrders(){
    this.adminService.getOrdersInformation(`completed`).subscribe(res => {
      this.completedOrders = res['data'];
    })
  }

  orderInformation(order){
    const modalRef = this.modalService.open(OrderInfoModalComponent);
    modalRef.componentInstance.orderInfo = order;
  }

}
