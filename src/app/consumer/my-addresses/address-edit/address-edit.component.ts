import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
