"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StaffOverviewComponent = void 0;
var core_1 = require("@angular/core");
var StaffOverviewComponent = /** @class */ (function () {
    function StaffOverviewComponent() {
        this.staffData = [
            {
                status: 'active',
                name: 'June Marbahy',
                role: 'Marketing Specialist 1',
                team: 'Marketing',
                activity: 'Blog articles',
                rating: 4,
                dreampoints: 32223,
                tenure: '2 years'
            },
            {
                status: 'active',
                name: 'John Biegey',
                role: 'SEO Specialist',
                team: 'Marketing',
                activity: 'Site Keywords',
                rating: 5,
                dreampoints: 12233,
                tenure: '5 years'
            },
            {
                status: 'active',
                name: 'Janet Bayou',
                role: 'Designer',
                team: 'Creative',
                activity: 'Advertising',
                rating: 4,
                dreampoints: 1223,
                tenure: '2 years'
            },
            {
                status: 'inactive',
                name: 'John Deluna',
                role: 'Designer',
                team: 'Creative',
                activity: 'Absent',
                rating: 4,
                dreampoints: 22253,
                tenure: '5 years'
            },
            {
                status: 'active',
                name: 'Jo Mahuay',
                role: 'Accountant',
                team: 'Finance',
                activity: 'EOY',
                rating: 5,
                dreampoints: 243342,
                tenure: '3 years'
            },
            {
                status: 'active',
                name: 'Ida Wanhay',
                role: 'Accountant Lead',
                team: 'Finance',
                activity: 'EOY',
                rating: 5,
                dreampoints: 1243342,
                tenure: '6 years'
            },
        ];
        this.columnsToDisplay = ['status', 'name', 'role', 'team', 'activity', 'rating', 'dreampoints', 'tenure'];
        this.dataSource = this.staffData;
    }
    StaffOverviewComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
    };
    StaffOverviewComponent.prototype.ngOnInit = function () {
    };
    StaffOverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-staff-overview',
            templateUrl: './staff-overview.component.html',
            styleUrls: ['./staff-overview.component.scss']
        })
    ], StaffOverviewComponent);
    return StaffOverviewComponent;
}());
exports.StaffOverviewComponent = StaffOverviewComponent;
