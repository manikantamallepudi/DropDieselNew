import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss']
})
export class ConsumerDashboardComponent implements OnInit {

  lat:number = 17.428507117378494;
  long:number = 78.40599243921739;
  mapZoom: number = 18;

  constructor() { }

  ngOnInit(): void {
  }

}
