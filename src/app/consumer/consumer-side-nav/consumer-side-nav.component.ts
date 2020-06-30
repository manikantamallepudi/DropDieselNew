import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-consumer-side-nav',
  templateUrl: './consumer-side-nav.component.html',
  styleUrls: ['./consumer-side-nav.component.scss']
})
export class ConsumerSideNavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  logout(){
    this.route.navigateByUrl('/login');
    localStorage.clear();
  }

}
