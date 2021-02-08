import { SidenavComponent } from './../../modals/sidenav/sidenav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './../../../lib/material/material.module';
import { StaffOverviewComponent } from './../../pages/staff-overview/staff-overview.component';
import { MacquarieTodayComponent } from './../../pages/macquarie-today/macquarie-today.component';
import { LandingComponent } from './../../pages/landing/landing.component';
import { FullComponent } from './full.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from '../../modals/metrics/metrics.component';
import { AddOnServicesComponent } from '../../pages/add-on-services/add-on-services.component';
import { AuthComponent } from '../../auth/auth.component';
import { LoginComponent } from '../../auth/login/login.component';
import { ForgotPasswordComponent } from '../../auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: LandingComponent
      },
      {
        path: 'macquarie-today',
        component: MacquarieTodayComponent
      },
      {
        path: 'staff-overview',
        component: StaffOverviewComponent
      },
      {
        path: 'end-of-metrics',
        component: MetricsComponent
      },
      {
        path: 'add-on-services',
        component: AddOnServicesComponent
      },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: '',
            component: LoginComponent
          },
          {
            path: 'forgot-password',
            component: ForgotPasswordComponent
          }
        ]
      }
    ]
 },
];



@NgModule({
  declarations: [
    FullComponent,
    SidenavComponent
  ],
  imports:
   [RouterModule.forRoot(routes),
   CommonModule,
    MaterialModule],
   exports: [RouterModule]
})
export class FullModule { }
