(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home6-home6-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home6/home6.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home6/home6.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title>\n            <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <app-banner></app-banner>\n    <!-- categories swipe slider -->\n    <ion-row class=\"top-icon-header\">\n        <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n            {{'Categories' | translate }}\n        </ion-button>\n        <ion-button id=\"second\" fill=\"clear\" (click)=\"openCategoryPage()\">\n            <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n            {{ 'Shop More' | translate }}\n        </ion-button>\n    </ion-row>\n    <!-- categories component -->\n    <app-categories [type]=\"'withName'\"></app-categories>\n    <!-- On Sale Header -->\n    <ion-row class=\"top-icon-header\">\n        <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"bookmark\"></ion-icon>\n            {{'On Sale' | translate }}\n        </ion-button>\n        <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('sale')\">\n            <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n            {{ 'Shop More' | translate }}\n        </ion-button>\n    </ion-row>\n    <!-- On Sale Products swipe slider -->\n    <ion-slides [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let p of shared.tab2\">\n            <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-slide>\n    </ion-slides>\n    <!-- For Vendor List -->\n    <app-vendor-list></app-vendor-list>\n    <!-- banner image -->\n    <ion-img *ngIf=\"shared.banners.length!=0\" src=\"{{shared.banners[shared.banners.length-1].banners_image}}\"></ion-img>\n    <!-- All Products Header -->\n    <ion-row class=\"top-icon-header\">\n        <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n            {{'Featured' | translate }}\n        </ion-button>\n        <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('featured')\">\n            <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n            {{ 'Shop More' | translate }}\n        </ion-button>\n    </ion-row>\n    <!-- scrolling products component -->\n    <app-scrolling-featured-products></app-scrolling-featured-products>\n\n    <!-- fab button to move at top of page  -->\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button (click)=\"scrollToTop()\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/home-pages/home6/home6.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home6/home6.module.ts ***!
  \**************************************************/
/*! exports provided: Home6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home6PageModule", function() { return Home6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home6.page */ "./src/app/home-pages/home6/home6.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home6_page__WEBPACK_IMPORTED_MODULE_6__["Home6Page"]
    }
];
let Home6PageModule = class Home6PageModule {
};
Home6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home6_page__WEBPACK_IMPORTED_MODULE_6__["Home6Page"]]
    })
], Home6PageModule);



/***/ }),

/***/ "./src/app/home-pages/home6/home6.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home6/home6.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .swiper-slide {\n  width: 40%;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content ion-fab {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTYvaG9tZTYucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU2L2hvbWU2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU2L2hvbWU2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgYXBwLXByb2R1Y3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCBhcHAtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home-pages/home6/home6.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home6/home6.page.ts ***!
  \************************************************/
/*! exports provided: Home6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home6Page", function() { return Home6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");






let Home6Page = class Home6Page {
    constructor(nav, config, appEventsService, shared) {
        this.nav = nav;
        this.config = config;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
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
    openProducts(value) {
        this.nav.navigateForward(this.config.currentRoute + "/products/0/0/" + value);
    }
    openCategoryPage() {
        this.appEventsService.publish("openCategoryPage", "");
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.config.setCardStyle("13");
    }
};
Home6Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], Home6Page.prototype, "content", void 0);
Home6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home6',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home6.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home6/home6.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home6.page.scss */ "./src/app/home-pages/home6/home6.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home6Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home6-home6-module-es2015.js.map