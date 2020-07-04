import { ConsumerService } from './../services/consumer.service';
import { Component, OnInit } from '@angular/core';


const data = {
  chart: {
    caption: "Quantity Consumed",
    yaxisname: "Litres",
    subcaption: "[2020]",
    numbersuffix: "Lts",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Jan",
      value: "89.45"
    },
    {
      label: "Feb",
      value: "89.87"
    },
    {
      label: "Mar",
      value: "89.64"
    },
    {
      label: "April",
      value: "90.13"
    },
    {
      label: "May",
      value: "90.67"
    },
    {
      label: "June",
      value: "90.54"
    },
    {
      label: "July",
      value: "90.75"
    },
    {
      label: "Aug",
      value: "90.8"
    },
    {
      label: "Sep",
      value: "91.16"
    },
    {
      label: "Oct",
      value: "91.37"
    },
    {
      label: "Nov",
      value: "91.66"
    },
    {
      label: "Dec",
      value: "91.8"
    }
  ]
};

@Component({
  selector: 'app-order-statistics',
  templateUrl: './order-statistics.component.html',
  styleUrls: ['./order-statistics.component.scss']
})

export class OrderStatisticsComponent implements OnInit {

  width = 600;
  height = 400;
  type = "line";
  dataFormat = "json";
  dataSource = data;

  orderInformation:any;
  constructor(public consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.getOrdersInfo();
  }

  getOrdersInfo(){
    this.consumerService.getOrderHistory().subscribe(res => {
      this.orderInformation = res['data'];
    });
  }

}
