import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../service/admin-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderInfoModalComponent } from '../order-info-modal/order-info-modal.component';

@Component({
  selector: 'app-future-orders',
  templateUrl: './future-orders.component.html',
  styleUrls: ['./future-orders.component.scss']
})
export class FutureOrdersComponent implements OnInit {
  
  public futureOrders:any;
  constructor(public adminService:AdminServices,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getFutureOrders();
  }

  getFutureOrders(){
    this.adminService.getOrdersInformation(`future`).subscribe(res => {
      this.futureOrders = res['data'];
    })
  }

  orderInformation(order){
    const modalRef = this.modalService.open(OrderInfoModalComponent);
    modalRef.componentInstance.orderInfo = order;
  }

}
