"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FullModule = void 0;
var sidenav_component_1 = require("./../../modals/sidenav/sidenav.component");
var material_module_1 = require("./../../../lib/material/material.module");
var staff_overview_component_1 = require("./../../pages/staff-overview/staff-overview.component");
var macquarie_today_component_1 = require("./../../pages/macquarie-today/macquarie-today.component");
var landing_component_1 = require("./../../pages/landing/landing.component");
var full_component_1 = require("./full.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var metrics_component_1 = require("../../modals/metrics/metrics.component");
var add_on_services_component_1 = require("../../pages/add-on-services/add-on-services.component");
var auth_component_1 = require("../../auth/auth.component");
var login_component_1 = require("../../auth/login/login.component");
var forgot_password_component_1 = require("../../auth/forgot-password/forgot-password.component");
var routes = [
    {
        path: '',
        component: full_component_1.FullComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: landing_component_1.LandingComponent
            },
            {
                path: 'macquarie-today',
                component: macquarie_today_component_1.MacquarieTodayComponent
            },
            {
                path: 'staff-overview',
                component: staff_overview_component_1.StaffOverviewComponent
            },
            {
                path: 'end-of-metrics',
                component: metrics_component_1.MetricsComponent
            },
            {
                path: 'add-on-services',
                component: add_on_services_component_1.AddOnServicesComponent
            },
            {
                path: 'auth',
                component: auth_component_1.AuthComponent,
                children: [
                    {
                        path: '',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'forgot-password',
                        component: forgot_password_component_1.ForgotPasswordComponent
                    }
                ]
            }
        ]
    },
];
var FullModule = /** @class */ (function () {
    function FullModule() {
    }
    FullModule = __decorate([
        core_1.NgModule({
            declarations: [
                full_component_1.FullComponent,
                sidenav_component_1.SidenavComponent
            ],
            imports: [router_1.RouterModule.forRoot(routes),
                common_1.CommonModule,
                material_module_1.MaterialModule],
            exports: [router_1.RouterModule]
        })
    ], FullModule);
    return FullModule;
}());
exports.FullModule = FullModule;
