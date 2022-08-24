import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgDatepickerModule  } from 'ng2-datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { CommanModule } from '../comman/comman.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ChangPasswordComponent } from './chang-password/chang-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ViewUserManagementComponent } from './view-user-management/view-user-management.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { CarmodelManagementComponent } from './carmodel-management/carmodel-management.component';


@NgModule({
  declarations: [ 
    ChangPasswordComponent, 
    DashboardComponent, 
    EditProfileComponent, 
    NotificationManagementComponent,
    ProfileComponent, 
    SettingsComponent, 
    UserManagementComponent,
    ViewUserManagementComponent,
    ActivityLogComponent,
    CarmodelManagementComponent,
  ],
  imports: [
    CommonModule,
    CommanModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectCountryModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    NgDatepickerModule,
    ChartsModule,
    NgxMaterialTimepickerModule.setLocale('en'),
  ]
})
export class LayoutModule { }
