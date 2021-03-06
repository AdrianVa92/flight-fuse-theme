"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = void 0;
var create_add_on_component_1 = require("./../../modals/create-add-on/create-add-on.component");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_router, createAddOnDialog) {
        this._router = _router;
        this.createAddOnDialog = createAddOnDialog;
        this.router = _router.url;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.openCreateAddOn = function () {
        var modalRef = new dialog_1.MatDialogConfig();
        modalRef.disableClose = true;
        modalRef.id = 'CreateAddOnComponent';
        modalRef.height = '600px';
        modalRef.width = '950px';
        var modalDialog = this.createAddOnDialog.open(create_add_on_component_1.CreateAddOnComponent, modalRef);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
