"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TwopageModule = void 0;
var application_library_list_component_1 = require("./../../pages/application-library/application-library-list/application-library-list.component");
var application_library_grid_component_1 = require("./../../pages/application-library/application-library-grid/application-library-grid.component");
var application_library_component_1 = require("./../../pages/application-library/application-library.component");
var staff_summary_list_component_1 = require("./../../pages/staff-summary/staff-summary-list/staff-summary-list.component");
var staff_summary_grid_component_1 = require("./../../pages/staff-summary/staff-summary-grid/staff-summary-grid.component");
var staff_summary_component_1 = require("./../../pages/staff-summary/staff-summary.component");
var staff_overview_component_1 = require("./../../pages/staff-overview/staff-overview.component");
var add_on_services_component_1 = require("./../../pages/add-on-services/add-on-services.component");
var twopage_component_1 = require("./twopage.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        component: twopage_component_1.TwopageComponent,
        children: [
            {
                path: 'staff-overview',
                component: staff_overview_component_1.StaffOverviewComponent
            },
            {
                path: 'staff-summary',
                component: staff_summary_component_1.StaffSummaryComponent,
                children: [
                    {
                        path: '',
                        component: staff_summary_grid_component_1.StaffSummaryGridComponent
                    },
                    {
                        path: 'list',
                        component: staff_summary_list_component_1.StaffSummaryListComponent
                    }
                ]
            },
            {
                path: 'application-library',
                component: application_library_component_1.ApplicationLibraryComponent,
                children: [
                    {
                        path: '',
                        component: application_library_grid_component_1.ApplicationLibraryGridComponent
                    },
                    {
                        path: 'list',
                        component: application_library_list_component_1.ApplicationLibraryListComponent
                    }
                ]
            },
            {
                path: 'add-on-services',
                component: add_on_services_component_1.AddOnServicesComponent
            }
        ]
    }
];
var TwopageModule = /** @class */ (function () {
    function TwopageModule() {
    }
    TwopageModule = __decorate([
        core_1.NgModule({
            declarations: [
                twopage_component_1.TwopageComponent
            ],
            imports: [router_1.RouterModule.forRoot(routes),
                common_1.CommonModule],
            exports: [router_1.RouterModule]
        })
    ], TwopageModule);
    return TwopageModule;
}());
exports.TwopageModule = TwopageModule;
