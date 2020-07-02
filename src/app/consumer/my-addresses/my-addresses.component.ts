import { AddressEditComponent } from './address-edit/address-edit.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss']
})
export class MyAddressesComponent implements OnInit {
  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  show() {
    const modalRef = this.modalService.open(AddressEditComponent);
    modalRef.componentInstance.name = 'Add New Address';
  }

  ngOnInit(): void {
  }

}
