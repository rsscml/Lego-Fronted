import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword: FormGroup;
  submitted= false;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get f(){return this.forgotPassword.controls;}

  // Forgot Service
  invalidEmail= false;
  errormessage;
  successmessage;

  onSubmit(){
    this.submitted=true;

    // stop here if form is invalid
    if(this.forgotPassword.invalid){
      return;
    }

    this.auth.forgot(this.forgotPassword.value.email).subscribe(
      data=>{
        localStorage.setItem('forgot', JSON.stringify(this.forgotPassword.value.email));
        this.loginSuccess(data['message'])
      },
      error=>{
        console.log(error);
        this.invalidEmail = true
        this.loginError(error.error.message);
      }
      
    )
  }
  loginError(e) {
    console.log(e);
    this.errormessage = e;
    setTimeout(() => {
      this.errormessage = "";
    }, 4000);
  }
  loginSuccess(e) {
    console.log(e);
    this.successmessage = e;
    setTimeout(() => {
      this.successmessage = "";
    }, 4000);
    //instead of diverting to reset password it should go to otp verify here
    //this.router.navigateByUrl('/reset-password');
  }
}
