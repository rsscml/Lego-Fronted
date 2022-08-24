import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ChangPasswordComponent } from './chang-password/chang-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CarmodelManagementComponent } from './carmodel-management/carmodel-management.component';

const routes: Routes = [
  {path: 'activity-log', component: ActivityLogComponent },
  {path: 'change-password', component: ChangPasswordComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'edit-profile', component: EditProfileComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'setting', component: SettingsComponent },
  {path: 'user-management', component: UserManagementComponent },
  {path: 'carmodel-management', component: CarmodelManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
