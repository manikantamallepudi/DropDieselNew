import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registrationForm:FormGroup;
  constructor(private route: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      mobile: [''],
      email:[''],
      password:['']
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }

  login(){
    this.route.navigateByUrl('/admin');
  }

}
