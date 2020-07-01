import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orderInformation:any;
  constructor(public consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.getOrdersInfo();
  }

  getOrdersInfo(){
    this.consumerService.getOrderHistory().subscribe(res => {
      this.orderInformation = res['data'];
    })
  }

}
