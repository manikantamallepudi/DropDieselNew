import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-viewport',
  templateUrl: './admin-viewport.component.html',
  styleUrls: ['./admin-viewport.component.scss']
})
export class AdminViewportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
