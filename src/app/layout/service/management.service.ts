import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(
  	private router: Router, 
    private http: HttpClient
  ) { }

  //Car Company Category Management------------------
  addCarCompModel(data){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/add_carcompany_category',data)
  }
  editCarCompModel(data,id){
    return this.http.put(environment.baseUrl + '/admin_panel/category_manage/api/carcompany_category_update/'+id,data)
  }
  deleteCarCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/delete_carcompany_category/'+id,null)
  }
  blockCarCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/block_carcompany_category/'+id,null)
  }
  unblockCarCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/unblock_carcompany_category/'+id,null)
  }
  exportCarCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/export_carcompany_category_list',null)
  }
  listCarCompModel(){
    return this.http.get(environment.baseUrl + '/admin_panel/category_manage/api/carcompany_category_list')
  }

  //Car Company Model Management------------------
  addCompModel(data){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/add_carmodel',data)
  }
  editCompModel(data,id){
    return this.http.put(environment.baseUrl + '/admin_panel/category_manage/api/carmodel_update/'+id,data)
  }
  deleteCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/delete_carmodel/'+id,null)
  }
  blockCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/block_carmodel/'+id,null)
  }
  unblockCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/unblock_carmodel/'+id,null)
  }
  exportCompModel(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/export_carcompany_category_list',null)
  }
  listCompModel(){
    return this.http.get(environment.baseUrl + '/admin_panel/category_manage/api/carmodel_list')
  }

  //Car Service Category Management------------------
  addServiceCategory(data){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/add_category',data)
  }
  editServiceCategory(data,id){
    return this.http.put(environment.baseUrl + '/admin_panel/category_manage/api/category_update/'+id,data)
  }
  deleteServiceCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/delete_category/'+id,null)
  }
  blockServiceCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/block_category/'+id,null)
  }
  unblockServiceCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/unblock_category/'+id,null)
  }
  exportServiceCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/export_category_list',null)
  }
  listServiceCategory(){
    return this.http.get(environment.baseUrl + '/admin_panel/category_manage/api/category_list')
  }

  //Car Service Sub-Category Management------------------
  addServiceSubCategory(data){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/add_subcategory',data)
  }
  editServiceSubCategory(data,id){
    return this.http.put(environment.baseUrl + '/admin_panel/category_manage/api/subcategory_update/'+id,data)
  }
  deleteServiceSubCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/delete_subcategory/'+id,null)
  }
  blockServiceSubCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/block_subcategory/'+id,null)
  }
  unblockServiceSubCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/unblock_subcategory/'+id,null)
  }
  exportServiceSubCategory(id){
    return this.http.post(environment.baseUrl + '/admin_panel/category_manage/api/export_subcategory_list',null)
  }
  listServiceSubCategory(){
    return this.http.get(environment.baseUrl + '/admin_panel/category_manage/api/subcategory_list')
  }
}
