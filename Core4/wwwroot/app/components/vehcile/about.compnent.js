"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_toasty_1 = require("ng2-toasty");
var AboutComponent = (function () {
    function AboutComponent(ToastyService) {
        this.ToastyService = ToastyService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.checkScreenWidth();
    };
    AboutComponent.prototype.checkScreenWidth = function () {
        this.ToastyService.error({ title: 'Error', msg: 'An unexpacte', theme: 'bootstrap', showClose: true, timeout: 5000 });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "aboutSelect",
        templateUrl: "/home/about"
    }),
    __metadata("design:paramtypes", [ng2_toasty_1.ToastyService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.compnent.js.map