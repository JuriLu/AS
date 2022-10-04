import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  hide: string = 'visibility_off';
  type: string = 'password';
  errMsg: string = ''

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  emailErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'Email required';
    }
    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getType() {
    switch (this.type) {
      case 'password':
        this.type = 'text'
        this.hide = 'visibility'
        break;

      case 'text':
        this.type = 'password'
        this.hide = 'visibility_off'
        break;
    }
  }

  Login(){
    this.router.navigateByUrl('/home/ASCarList')
  }

}
