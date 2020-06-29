import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { userRegistration } from './../../Models/userRegistration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginRes:any;
  registrationForm: FormGroup;
  loginForm: FormGroup;
  roles: any;
  userProfile: userRegistration = {
    last_name: '',
    first_name: '',
    email: '',
    mobile_number: '',
    address: '',
    role: '',
    aadhar_card: '',
    pan: '',
    entity_name: '',
    itr: '',
    previous_itr: '',
    roc: '',
    dl_number: '',
    password: ''
  };

  constructor(private route: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserRoles();
    this.buildLoginForm();
    this.buildRegistrationForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  buildRegistrationForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['ADMIN', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validator: this.authService.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  
  get l() { return this.loginForm.controls; }

  get f() { return this.registrationForm.controls; }

  onLoginSubmit() {
    let loginData: any = this.loginForm.value;
    let userData: any = window.btoa(loginData.userName + ":" + loginData.password);
    this.authService.userLogin(userData).subscribe(res => {
      console.log(res);
      this.loginRes  = res;
      if (this.loginRes.success != 0) {
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.route.navigateByUrl('/admin');
      }
    })
  }

  onRegistrationSubmit() {
    let userObj: any = this.bindRegistrationData();
    this.authService.userRegistration(userObj).subscribe(res => {
      console.log(res);
    })
  }

  bindRegistrationData() {
    let formValue: any = this.registrationForm.value;
    this.userProfile.first_name = formValue.firstName;
    this.userProfile.last_name = formValue.lastName;
    this.userProfile.email = formValue.email;
    this.userProfile.mobile_number = formValue.mobile;
    this.userProfile.address = formValue.address ? formValue.address : '';
    this.userProfile.role = formValue.role;
    this.userProfile.aadhar_card = formValue.aadhar_card ? formValue.aadhar_card : '';
    this.userProfile.pan = formValue.pan ? formValue.pan : '';
    this.userProfile.entity_name = formValue.entity_name ? formValue.entity_name : '';
    this.userProfile.itr = formValue.itr ? formValue.itr : '';
    this.userProfile.previous_itr = formValue.previous_itr ? formValue.previous_itr : '';
    this.userProfile.roc = formValue.roc ? formValue.roc : '';
    this.userProfile.dl_number = formValue.dl_number ? formValue.dl_number : '';
    this.userProfile.password = window.btoa(formValue.password);
    return this.userProfile;
  }

  login() {
    this.route.navigateByUrl('/admin');
  }

  getUserRoles() {
    this.authService.getRoles().subscribe(res => {
      if (res) {
        this.roles = res.data;
      }
    })
  }

}
