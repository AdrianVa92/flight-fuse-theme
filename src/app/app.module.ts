import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from 'projects/flight-fuse-theme/src/@flight/fuse.module';
import { FuseSharedModule } from 'projects/flight-fuse-theme/src/@flight/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from 'projects/flight-fuse-theme/src/@flight/components';

import { fuseConfig } from './theme/fuse-config';

import { LayoutModule } from 'projects/flight-fuse-theme/src/app/layout/layout.module';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InnerFooterComponent } from './shared/inner-footer/inner-footer.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { LandingComponent } from './pages/landing/landing.component';

import { MacquarieTodayComponent } from './pages/macquarie-today/macquarie-today.component';
import { StaffOverviewComponent } from './pages/staff-overview/staff-overview.component';
import { StaffSummaryComponent } from './pages/staff-summary/staff-summary.component';
import { StaffSummaryGridComponent } from './pages/staff-summary/staff-summary-grid/staff-summary-grid.component';
import { StaffSummaryListComponent } from './pages/staff-summary/staff-summary-list/staff-summary-list.component';
import { ApplicationLibraryComponent } from './pages/application-library/application-library.component';
import { ApplicationLibraryListComponent } from './pages/application-library/application-library-list/application-library-list.component';
import { ApplicationLibraryGridComponent } from './pages/application-library/application-library-grid/application-library-grid.component';
import { MaterialModule } from './../lib/material/material.module';
import { AddOnServicesComponent } from './pages/add-on-services/add-on-services.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MetricsComponent } from './modals/metrics/metrics.component';
import { AiBotComponent } from './modals/ai-bot/ai-bot.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { CreateAddOnComponent } from './modals/create-add-on/create-add-on.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MacquarieTodayComponent,
    StaffOverviewComponent,
    StaffSummaryComponent,
    StaffSummaryGridComponent,
    StaffSummaryListComponent,
    ApplicationLibraryComponent,
    ApplicationLibraryListComponent,
    ApplicationLibraryGridComponent,
    AddOnServicesComponent,
    BannerComponent,
    FooterComponent,
    InnerFooterComponent,
    HeaderComponent,
    InnerFooterComponent,
    SidebarComponent,
    LoginComponent,
    MetricsComponent,
    AiBotComponent,
    ForgotPasswordComponent,
    AuthComponent,
    AddOnServicesComponent,
    CreateAddOnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,


    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    
    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule,

    BrowserModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
