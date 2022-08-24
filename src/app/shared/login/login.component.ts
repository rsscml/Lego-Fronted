import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted= false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthenticationService, 
    private router: Router
  ) { }

  ngOnInit() {
    if(this.auth.isLogin()){
      console.log('already logged in')
      this.router.navigateByUrl('/home/dashboard');
    }

    var remembered = window.localStorage.getItem('rememberMe');

    if(remembered==undefined){
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }else{
      let rem = JSON.parse(remembered);
      this.loginForm = this.formBuilder.group({
        email: [rem.email, [Validators.required, Validators.email]],
        password: [rem.password, [Validators.required, Validators.minLength(8)]]
      });
    }

  }
  
  get f(){return this.loginForm.controls;}

  // Login Service
  invalidLogin= false;
  errormessage;
  successmessage;

  onSubmit(){
    if($('#rememberMe').is(':checked')){
      let remember={
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      window.localStorage.setItem('rememberMe', JSON.stringify(remember));
    }else{
      window.localStorage.removeItem('rememberMe');
    }
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.auth.login(data).subscribe(
      data=> {
        console.log('inside data')
        console.log(data)
        console.log(JSON.stringify(data['data']))
        console.log(JSON.stringify(data['data']['token']))

        var remembered = localStorage.getItem('rememberMe');

        if(remembered==undefined){
          sessionStorage.setItem('currentUser', JSON.stringify(data['data']));
          sessionStorage.setItem('token', JSON.stringify(data['data']['token']));
        }else{
          localStorage.setItem('currentUser', JSON.stringify(data['data']));
          localStorage.setItem('token', JSON.stringify(data['data']['token']));
        }
        this.router.navigateByUrl('/home/dashboard');
      },
      error=> {
        console.log(error);
        this.invalidLogin = true
        //var message = error.error.message
        var message = "Invalid credentials..!"
        //var token = localStorage.getItem('currentUser');
        //if(token){
          //message="Invalid credentials..!"
        //}
        sessionStorage.clear();
        localStorage.clear();
        this.auth.logout();
        this.loginError(message);
      }
    );
  }
  loginError(e) {
    console.log(e);
    this.errormessage = e;
    setTimeout(() => {
      this.errormessage = "";
    }, 4000);
  }
}
