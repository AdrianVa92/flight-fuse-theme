"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var landing_component_1 = require("./../pages/landing/landing.component");
var macquarie_today_component_1 = require("./../pages/macquarie-today/macquarie-today.component");
var staff_overview_component_1 = require("./../pages/staff-overview/staff-overview.component");
var staff_summary_component_1 = require("./../pages/staff-summary/staff-summary.component");
var staff_summary_grid_component_1 = require("./../pages/staff-summary/staff-summary-grid/staff-summary-grid.component");
var staff_summary_list_component_1 = require("./../pages/staff-summary/staff-summary-list/staff-summary-list.component");
var application_library_component_1 = require("./../pages/application-library/application-library.component");
var application_library_list_component_1 = require("./../pages/application-library/application-library-list/application-library-list.component");
var application_library_grid_component_1 = require("./../pages/application-library/application-library-grid/application-library-grid.component");
var add_on_services_component_1 = require("./add-on-services/add-on-services.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                landing_component_1.LandingComponent,
                macquarie_today_component_1.MacquarieTodayComponent,
                staff_overview_component_1.StaffOverviewComponent,
                staff_summary_component_1.StaffSummaryComponent,
                staff_summary_grid_component_1.StaffSummaryGridComponent,
                staff_summary_list_component_1.StaffSummaryListComponent,
                application_library_component_1.ApplicationLibraryComponent,
                application_library_list_component_1.ApplicationLibraryListComponent,
                application_library_grid_component_1.ApplicationLibraryGridComponent,
                add_on_services_component_1.AddOnServicesComponent
            ],
            imports: [
                common_1.CommonModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
