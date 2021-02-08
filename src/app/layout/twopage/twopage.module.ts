import { ApplicationLibraryListComponent } from './../../pages/application-library/application-library-list/application-library-list.component';
import { ApplicationLibraryGridComponent } from './../../pages/application-library/application-library-grid/application-library-grid.component';
import { ApplicationLibraryComponent } from './../../pages/application-library/application-library.component';
import { StaffSummaryListComponent } from './../../pages/staff-summary/staff-summary-list/staff-summary-list.component';
import { StaffSummaryGridComponent } from './../../pages/staff-summary/staff-summary-grid/staff-summary-grid.component';
import { StaffSummaryComponent } from './../../pages/staff-summary/staff-summary.component';
import { StaffOverviewComponent } from './../../pages/staff-overview/staff-overview.component';
import { AddOnServicesComponent } from './../../pages/add-on-services/add-on-services.component';
import { TwopageComponent } from './twopage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TwopageComponent,
    children: [
      {
        path: 'staff-overview',
        component: StaffOverviewComponent
      },
      {
        path: 'staff-summary',
        component: StaffSummaryComponent,
        children: [
            {
              path: '',
              component: StaffSummaryGridComponent
            },
            {
              path: 'list',
              component: StaffSummaryListComponent
            }
          ]
       },
       {
        path: 'application-library',
        component: ApplicationLibraryComponent,
        children: [
            {
              path: '',
              component: ApplicationLibraryGridComponent
            },
            {
              path: 'list',
              component: ApplicationLibraryListComponent
            }
          ]
       },
       {
         path: 'add-on-services',
         component: AddOnServicesComponent
       }
    ]
 }];


@NgModule({
  declarations: [
    TwopageComponent
  ],
  imports:  [RouterModule.forRoot(routes),
    CommonModule],
    exports: [RouterModule]
})
export class TwopageModule { }
