import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service'
import { Router } from '@angular/router';
import { MustMatch } from '../service/mustMatch';
declare var $:any;
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  submitted= false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthenticationService, 
    private router: Router
  ) { }

  ngOnInit() {

    this.resetPassword = this.formBuilder.group({
      newPassword:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required, Validators.minLength(8)]]
    },{
      validators: MustMatch('newPassword', 'confirmPassword')
    });

  }

  get f(){return this.resetPassword.controls}

  // Forgot Service
  errormessage;
  successmessage;

  onSubmit(){
    this.submitted=true;
    if(this.resetPassword.invalid){
      return;
    }

    let data={
      email: JSON.parse(localStorage.getItem('forgot')),
      password: this.resetPassword.value.confirmPassword
    }
    this.auth.reset(data).subscribe(
      data=>{
        console.log(data)
        $("#success-modal").modal('show');        
        this.successmessage = data['message'];
        setTimeout(function(){
          $("#success-modal").modal('hide');
        },1500);
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 1600);
        localStorage.removeItem('forgot');
      },
      error=>{
        console.log(error);
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
}
