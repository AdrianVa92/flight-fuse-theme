"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InnerFooterComponent = void 0;
var metrics_component_1 = require("./../../modals/metrics/metrics.component");
var ai_bot_component_1 = require("./../../modals/ai-bot/ai-bot.component");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var InnerFooterComponent = /** @class */ (function () {
    function InnerFooterComponent(openDialog) {
        this.openDialog = openDialog;
    }
    InnerFooterComponent.prototype.ngOnInit = function () {
    };
    InnerFooterComponent.prototype.openAiBot = function () {
        var modalRef = new dialog_1.MatDialogConfig();
        modalRef.disableClose = true;
        modalRef.id = 'aiBotComponent';
        modalRef.panelClass = 'ai-bot-dialog';
        modalRef.height = '650px';
        modalRef.width = '1150px';
        var modalDialog = this.openDialog.open(ai_bot_component_1.AiBotComponent, modalRef);
    };
    InnerFooterComponent.prototype.openEndMetrics = function () {
        var metricsModal = new dialog_1.MatDialogConfig();
        metricsModal.disableClose = true;
        metricsModal.id = 'endMetrics';
        metricsModal.height = 'auto';
        metricsModal.width = '50%';
        var modalDialog = this.openDialog.open(metrics_component_1.MetricsComponent, metricsModal);
    };
    InnerFooterComponent = __decorate([
        core_1.Component({
            selector: 'app-inner-footer',
            templateUrl: './inner-footer.component.html',
            styleUrls: ['./inner-footer.component.scss']
        })
    ], InnerFooterComponent);
    return InnerFooterComponent;
}());
exports.InnerFooterComponent = InnerFooterComponent;
