"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MacquarieTodayComponent = void 0;
var core_1 = require("@angular/core");
var MACQUARIE_DATA = [
    { status: 'active', name: 'June Marbahy', activity: 'Blog articles', location: 'B3', arrow: 'keyboard_arrow_down' },
    { status: 'active', name: 'John Biegey', activity: 'Site Keywords', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
    { status: 'active', name: 'Janet Bayou', activity: 'Advertising', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
    { status: 'inactive', name: 'John Deluna', activity: 'Absent', location: 'M1', arrow: 'keyboard_arrow_down' },
    { status: 'active', name: 'Jo Mahuay', activity: 'EOY', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
    { status: 'active', name: 'Ida', activity: 'EOY', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
];
var MacquarieTodayComponent = /** @class */ (function () {
    function MacquarieTodayComponent() {
        this.displayedColumns = ['status', 'name', 'activity', 'location', 'arrow'];
        this.dataSource = MACQUARIE_DATA;
    }
    MacquarieTodayComponent.prototype.ngOnInit = function () {
    };
    MacquarieTodayComponent = __decorate([
        core_1.Component({
            selector: 'app-macquarie-today',
            templateUrl: './macquarie-today.component.html',
            styleUrls: ['./macquarie-today.component.scss']
        })
    ], MacquarieTodayComponent);
    return MacquarieTodayComponent;
}());
exports.MacquarieTodayComponent = MacquarieTodayComponent;
