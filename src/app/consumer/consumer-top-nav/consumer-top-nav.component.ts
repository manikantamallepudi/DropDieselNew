import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-consumer-top-nav',
  templateUrl: './consumer-top-nav.component.html',
  styleUrls: ['./consumer-top-nav.component.scss']
})
export class ConsumerTopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        //Toggle Click Function
        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
        });
  }

}
