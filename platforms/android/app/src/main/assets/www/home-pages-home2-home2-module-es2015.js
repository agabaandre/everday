(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home2-home2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home2/home2.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home2/home2.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title>\n            <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n    <app-banner></app-banner>\n    <app-sliding-tabs [type]=\"'image'\"></app-sliding-tabs>\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/home-pages/home2/home2.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home2/home2.module.ts ***!
  \**************************************************/
/*! exports provided: Home2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2PageModule", function() { return Home2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home2.page */ "./src/app/home-pages/home2/home2.page.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _home2_page__WEBPACK_IMPORTED_MODULE_6__["Home2Page"]
    }
];
let Home2PageModule = class Home2PageModule {
};
Home2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
        ],
        declarations: [_home2_page__WEBPACK_IMPORTED_MODULE_6__["Home2Page"]]
    })
], Home2PageModule);



/***/ }),

/***/ "./src/app/home-pages/home2/home2.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home2/home2.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  position: fixed;\n}\nion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTIvaG9tZTIucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWUyL2hvbWUyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjtBREFJO0VBQ0Usc0NBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTIvaG9tZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfSIsImlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-pages/home2/home2.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home2/home2.page.ts ***!
  \************************************************/
/*! exports provided: Home2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Page", function() { return Home2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let Home2Page = class Home2Page {
    constructor(shared, config) {
        this.shared = shared;
        this.config = config;
        this.scrollTopButton = false; //for scroll down fab 
    }
    // For FAB Scroll
    onScroll(e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    }
    // For Scroll To Top Content
    scrollToTop() {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    ionViewWillEnter() {
        this.config.setCardStyle("5");
    }
};
Home2Page.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], Home2Page.prototype, "content", void 0);
Home2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home2/home2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home2.page.scss */ "./src/app/home-pages/home2/home2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], Home2Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home2-home2-module-es2015.js.map