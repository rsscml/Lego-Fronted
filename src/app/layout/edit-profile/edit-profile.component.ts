import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { Router } from '@angular/router';
import {Country} from '@angular-material-extensions/select-country';

declare var $:any;
declare var iEdit:any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  user;
  _id;
  profileForm: FormGroup;
  submitted= false;
  selectedCountry;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }
  

  onCountrySelected($event: Country) {
    console.log($event);
    this.profileForm.patchValue({
      region: $event.name
    });
  }
  ngOnInit() {

    $("#logo-file").change(function(e){
      var img = e.target.files[0];
      if(!iEdit.open(img, true, function(res){
      $("#result").attr("src", res);      
      })){
        alert("Whoops! That is not an image!");
      }
    });

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: '',
      region: '',
      description: '',
    });
    
    this.user= JSON.parse(localStorage.getItem('currentUser'))
    debugger
    // this._id = this.user._id 
    this.profileForm.patchValue({
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      address: this.user.address,
      region: this.user.region,
      description: this.user.description,
    });
  }

  
  
  get f(){return this.profileForm.controls}

  // Profile Service
  errorMessage;
  successMessage;

  onSubmit(){
    debugger
    this.submitted= true;

    if(this.profileForm.invalid){
      return;
    }

    let data = {
      name: this.profileForm.value.name,
      email: this.profileForm.value.email,
      phone: this.profileForm.value.phone,
      address: this.profileForm.value.address,
      region: this.profileForm.value.region,
      description: this.profileForm.value.description,
    }
    data['_id'] = this.user._id;
    debugger
     this.auth.profile(data).subscribe(
      data=>{
        debugger
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data['response']));

        $("#success-modal").modal('show');
        this.successMessage = data['message']

        setTimeout(function(){
          $("#success-modal").modal('hide');
          debugger
        },1500);
        setTimeout(() => {
          this.router.navigateByUrl('/profile');
        }, 1600);
      },
      error=>{
        console.log(error);
        debugger
        this.errorMessage = error.error.message
      }
    )

  }
}
