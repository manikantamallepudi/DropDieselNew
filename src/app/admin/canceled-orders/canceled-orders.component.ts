import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderInfoModalComponent } from '../order-info-modal/order-info-modal.component';

@Component({
  selector: 'app-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.scss']
})
export class CanceledOrdersComponent implements OnInit {

  public cancelledOrders:any;

  constructor(public adminService:AdminServices,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCancelledOrders();
  }

  getCancelledOrders(){
    this.adminService.getOrdersInformation(`canceled`).subscribe(res => {
      this.cancelledOrders = res['data'];
    })
  }

  orderInformation(order){
    const modalRef = this.modalService.open(OrderInfoModalComponent);
    modalRef.componentInstance.orderInfo = order;
  }

}
