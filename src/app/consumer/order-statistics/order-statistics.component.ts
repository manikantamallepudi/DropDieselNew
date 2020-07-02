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
      label: "2005",
      value: "89.45"
    },
    {
      label: "2006",
      value: "89.87"
    },
    {
      label: "2007",
      value: "89.64"
    },
    {
      label: "2008",
      value: "90.13"
    },
    {
      label: "2009",
      value: "90.67"
    },
    {
      label: "2010",
      value: "90.54"
    },
    {
      label: "2011",
      value: "90.75"
    },
    {
      label: "2012",
      value: "90.8"
    },
    {
      label: "2013",
      value: "91.16"
    },
    {
      label: "2014",
      value: "91.37"
    },
    {
      label: "2015",
      value: "91.66"
    },
    {
      label: "2016",
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
    })
  }

}
