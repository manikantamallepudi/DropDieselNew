import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss']
})
export class AdminSideNavComponent implements OnInit {

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
