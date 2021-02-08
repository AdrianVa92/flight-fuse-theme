"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var core_2 = require("@ngx-translate/core");
var fuse_module_1 = require("projects/flight-fuse-theme/src/@flight/fuse.module");
var shared_module_1 = require("projects/flight-fuse-theme/src/@flight/shared.module");
var components_1 = require("projects/flight-fuse-theme/src/@flight/components");
var fuse_config_1 = require("./theme/fuse-config");
var layout_module_1 = require("projects/flight-fuse-theme/src/app/layout/layout.module");
var header_component_1 = require("./shared/header/header.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var inner_footer_component_1 = require("./shared/inner-footer/inner-footer.component");
var footer_component_1 = require("./shared/footer/footer.component");
var banner_component_1 = require("./shared/banner/banner.component");
var landing_component_1 = require("./pages/landing/landing.component");
var macquarie_today_component_1 = require("./pages/macquarie-today/macquarie-today.component");
var staff_overview_component_1 = require("./pages/staff-overview/staff-overview.component");
var staff_summary_component_1 = require("./pages/staff-summary/staff-summary.component");
var staff_summary_grid_component_1 = require("./pages/staff-summary/staff-summary-grid/staff-summary-grid.component");
var staff_summary_list_component_1 = require("./pages/staff-summary/staff-summary-list/staff-summary-list.component");
var application_library_component_1 = require("./pages/application-library/application-library.component");
var application_library_list_component_1 = require("./pages/application-library/application-library-list/application-library-list.component");
var application_library_grid_component_1 = require("./pages/application-library/application-library-grid/application-library-grid.component");
var material_module_1 = require("./../lib/material/material.module");
var add_on_services_component_1 = require("./pages/add-on-services/add-on-services.component");
var login_component_1 = require("./auth/login/login.component");
var flex_layout_1 = require("@angular/flex-layout");
var metrics_component_1 = require("./modals/metrics/metrics.component");
var ai_bot_component_1 = require("./modals/ai-bot/ai-bot.component");
var forgot_password_component_1 = require("./auth/forgot-password/forgot-password.component");
var auth_component_1 = require("./auth/auth.component");
var create_add_on_component_1 = require("./modals/create-add-on/create-add-on.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                macquarie_today_component_1.MacquarieTodayComponent,
                staff_overview_component_1.StaffOverviewComponent,
                staff_summary_component_1.StaffSummaryComponent,
                staff_summary_grid_component_1.StaffSummaryGridComponent,
                staff_summary_list_component_1.StaffSummaryListComponent,
                application_library_component_1.ApplicationLibraryComponent,
                application_library_list_component_1.ApplicationLibraryListComponent,
                application_library_grid_component_1.ApplicationLibraryGridComponent,
                add_on_services_component_1.AddOnServicesComponent,
                banner_component_1.BannerComponent,
                footer_component_1.FooterComponent,
                inner_footer_component_1.InnerFooterComponent,
                header_component_1.HeaderComponent,
                inner_footer_component_1.InnerFooterComponent,
                sidebar_component_1.SidebarComponent,
                login_component_1.LoginComponent,
                metrics_component_1.MetricsComponent,
                ai_bot_component_1.AiBotComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                auth_component_1.AuthComponent,
                add_on_services_component_1.AddOnServicesComponent,
                create_add_on_component_1.CreateAddOnComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot(),
                // Material moment date module
                material_moment_adapter_1.MatMomentDateModule,
                // Material
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                flex_layout_1.FlexLayoutModule,
                // Fuse modules
                fuse_module_1.FuseModule.forRoot(fuse_config_1.fuseConfig),
                components_1.FuseProgressBarModule,
                shared_module_1.FuseSharedModule,
                components_1.FuseSidebarModule,
                components_1.FuseThemeOptionsModule,
                // App modules
                layout_module_1.LayoutModule,
                platform_browser_1.BrowserModule,
                material_module_1.MaterialModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
