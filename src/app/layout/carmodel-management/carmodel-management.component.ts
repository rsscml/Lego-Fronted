import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { environment } from '../../../environments/environment';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import { ManagementService } from 'src/app/layout/service/management.service';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;
export interface PeriodicElement {
  id: string;
  model:string;
  category_id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id:'No Data', model:'', category_id: '', },
];

@Component({
  selector: 'app-carmodel-management',
  templateUrl: './carmodel-management.component.html',
  styleUrls: ['./carmodel-management.component.css']
})
export class CarmodelManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'model', 'category_id', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  model;
  category_id;
  items;
  tempid;
  base_url = environment.baseUrl

  constructor(
    private auth: AuthenticationService,
    private mgmt: ManagementService,
    private router:Router
  ) { }


ngOnInit() {
  if(!this.auth.isLogin()){
    console.log('Please login to access this page')
    this.router.navigate(['login']);
  }
  this.mgmt.listCompModel().subscribe(response=>{
    this.items = response['data']
    console.log(this.items)
    if(this.items.length>0){
      console.log('inside if')
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.items);
    }
    else{
      console.log('inside else')
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.items)
  },error=>{
    console.log(error)
  })
}

cleanForm(){
  this.tempid='';
  this.model='';
  this.category_id='';
}
addClicked(){
  this.cleanForm();
}

idShiftAndText(id,model, category_id){
  this.tempid=id;
  this.model=model;
  this.category_id=category_id;
}

idShift(id){
  this.tempid=id;
  console.log(this.tempid);
}

validateForm(){
  if(!this.model || this.model==''){
    this.loginError("Please provide model name");
    return false;
  }
  if(!this.category_id || this.category_id==''){
    this.loginError("Please provide category_id");
    return false;
  }
  return true
}

add(){
  if(this.validateForm()){
    let dataToSend = new FormData();
    dataToSend.append('model',this.model)
    dataToSend.append('category_id',this.category_id)
    this.mgmt.addCompModel(dataToSend).subscribe(response=>{
      console.log(response);
      this.cleanForm();
      $("#add-modal").modal("hide");
      this.loginSuccess("Category Model added successfully");
      setTimeout(() => {
        location.reload();
      }, 2500);
    },error=>{
      this.loginError(error.error.message); 
    });
  }
}

edit(){
  if(this.validateForm()){
    let dataToSend = new FormData();
    dataToSend.append('model',this.model)
    dataToSend.append('category_id',this.category_id)
    this.mgmt.editCompModel(dataToSend,this.tempid).subscribe(response=>{
      console.log(response);
      this.cleanForm();
      $("#edit-modal").modal("hide");
      this.loginSuccess("Car Model updated successfully")
      setTimeout(() => {
        location.reload();
      }, 2500);
    },error=>{
      this.loginError(error.error.message); 
    });
  }
}

delete(){
  this.mgmt.deleteCompModel(this.tempid).subscribe(response=>{
    console.log('deleted successfully');
    this.loginSuccess("Company Model deleted successfully");
    setTimeout(() => {
        location.reload();
      }, 2500);
  },error=>{
    // console.log(error.error.message);  
    this.sloginError(error.error.message);
  })
}
block(){
  this.mgmt.blockCompModel(this.tempid).subscribe(response=>{
    console.log('blocked successfully');
    this.loginSuccess("Company Model blocked successfully");
    setTimeout(() => {
        location.reload();
      }, 2500);
  },error=>{
    // console.log(error.error.message);  
    this.sloginError(error.error.message);
  })
}
unblock(){
  this.mgmt.unblockCompModel(this.tempid).subscribe(response=>{
    console.log('unblocked successfully');
    this.loginSuccess("Company Model unblocked successfully");
    setTimeout(() => {
        location.reload();
      }, 2500);
  },error=>{
    // console.log(error.error.message);  
    this.sloginError(error.error.message);
  })
}



errormessage;
successmessage;
loginError(e) {
  console.log(e);
  this.errormessage = e;
  setTimeout(() => {
    this.errormessage = "";
  }, 2000);
}
loginSuccess(e) {
  console.log(e);
  this.successmessage = e;
  setTimeout(() => {
    this.successmessage = "";
  }, 2000);
}
serrormessage;
sloginError(e) {
  console.log(e);
  this.serrormessage = e;
  setTimeout(() => {
    this.serrormessage = "";
  }, 2000);
}

}
