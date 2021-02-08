"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddOnServicesComponent = void 0;
var core_1 = require("@angular/core");
var AddOnServicesComponent = /** @class */ (function () {
    function AddOnServicesComponent() {
        this.appData = [
            {
                image: 'assets/images/common/manage-add-ons/laptop.png',
                unit: 'Laptop',
                assigned_to: 'Jenna Mava',
                team: 'Marketing',
                location: 'B6, Clark.',
                type: 'Leased',
                status: 'Active',
                amount: '$302',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/tablet.png',
                unit: 'Tablet',
                assigned_to: 'Allan Java',
                team: 'Sales Support',
                location: 'B6, Clark.',
                type: 'Leased',
                status: 'Active',
                amount: '$102',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/phone.png',
                unit: 'Phone',
                assigned_to: 'Mike Jane',
                team: 'Executive Team',
                location: 'Sydney',
                type: 'Leased',
                status: 'Expired',
                amount: '$0',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/laptop.png',
                unit: 'Laptop',
                assigned_to: 'Jenna Mava',
                team: 'Marketing',
                location: 'B6, Clark.',
                type: 'Leased',
                status: 'Active',
                amount: '$22',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/desktop.png',
                unit: 'Desktop',
                assigned_to: 'Steve Mitchel',
                team: 'Sales',
                location: 'Brisbane',
                type: 'Leased',
                status: 'Active',
                amount: '$123',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/storage.png',
                unit: 'Storage',
                assigned_to: 'Jon Guiba',
                team: 'IT',
                location: 'B4, Clark.',
                type: 'Leased',
                status: 'active',
                amount: '$22',
                icons: ''
            },
            {
                image: 'assets/images/common/manage-add-ons/keyboard.png',
                unit: 'Keyboard',
                assigned_to: 'Jenna Mava',
                team: 'Marketing',
                location: 'B6, Clark.',
                type: 'Leased',
                status: 'active',
                amount: '$0',
                icons: ''
            }
        ];
        this.columnsToDisplay = ['image', 'unit', 'assigned_to', 'team', 'location', 'type', 'status', 'amount', 'icons'];
        this.dataSource = this.appData;
    }
    AddOnServicesComponent.prototype.ngOnInit = function () {
    };
    AddOnServicesComponent = __decorate([
        core_1.Component({
            selector: 'app-add-on-services',
            templateUrl: './add-on-services.component.html',
            styleUrls: ['./add-on-services.component.scss']
        })
    ], AddOnServicesComponent);
    return AddOnServicesComponent;
}());
exports.AddOnServicesComponent = AddOnServicesComponent;
