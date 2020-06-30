import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-info-modal',
  templateUrl: './order-info-modal.component.html',
  styleUrls: ['./order-info-modal.component.scss']
})
export class OrderInfoModalComponent implements OnInit {
  @Input() orderInfo;
  public orderKeys;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.orderKeys = Object.keys(this.orderInfo);
  }


}
