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
var core_1 = require('@angular/core');
var BannerComponent = (function () {
    function BannerComponent() {
        this.banners = [
            {
                'id': '1',
                'image': '../../images/h1.jpg',
                'titre': "C'est le titre 1"
            },
            {
                'id': '2',
                'image': '../../images/h2.jpg',
                'titre': "C'est le titre 2"
            },
            {
                'id': '3',
                'image': '../../images/h3.jpg',
                'titre': "C'est le titre 3"
            }
        ];
    }
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'app-banner',
            templateUrl: 'app/banner/banner.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map