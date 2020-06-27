import { ProfileEditModalComponent } from './profile-edit-modal/profile-edit-modal.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  open() {
    const modalRef = this.modalService.open(ProfileEditModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {
  }

}
