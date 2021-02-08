"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutModule = void 0;
var core_1 = require("@angular/core");
var layout_1_module_1 = require("projects/deck/src/app/layout/vertical/layout-1/layout-1.module");
var layout_2_module_1 = require("projects/deck/src/app/layout/vertical/layout-2/layout-2.module");
var layout_3_module_1 = require("projects/deck/src/app/layout/vertical/layout-3/layout-3.module");
var layout_1_module_2 = require("projects/deck/src/app/layout/horizontal/layout-1/layout-1.module");
var full_module_1 = require("./full/full.module");
var twopage_module_1 = require("./twopage/twopage.module");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                layout_1_module_1.VerticalLayout1Module,
                layout_2_module_1.VerticalLayout2Module,
                layout_3_module_1.VerticalLayout3Module,
                layout_1_module_2.HorizontalLayout1Module,
                full_module_1.FullModule,
                twopage_module_1.TwopageModule
            ],
            exports: [
                layout_1_module_1.VerticalLayout1Module,
                layout_2_module_1.VerticalLayout2Module,
                layout_3_module_1.VerticalLayout3Module,
                layout_1_module_2.HorizontalLayout1Module,
                full_module_1.FullModule,
                twopage_module_1.TwopageModule
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
