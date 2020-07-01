import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-consumer-viewport',
  templateUrl: './consumer-viewport.component.html',
  styleUrls: ['./consumer-viewport.component.scss']
})
export class ConsumerViewportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
