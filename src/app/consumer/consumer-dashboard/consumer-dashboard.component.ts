import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss']
})
export class ConsumerDashboardComponent implements OnInit {

  lat: number = 17.428507117378494;
  long: number = 78.40599243921739;
  mapZoom: number = 18;

  constructor(public consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.getDealers();
  }

  getDealers() {
    this.consumerService.getDealersInformation().subscribe(res => {
      console.log(res)
    })
  }

}
