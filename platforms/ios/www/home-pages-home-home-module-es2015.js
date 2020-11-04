(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title>\n            <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" class=\"home-page-1\">\n    <app-banner></app-banner>\n    <ion-segment [(ngModel)]=\"segments\">\n        <ion-segment-button value=\"topSeller\">{{ 'Newest' | translate }}</ion-segment-button>\n        <ion-segment-button value=\"deals\">{{ 'On Sale' | translate }} </ion-segment-button>\n        <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segments\">\n\n        <!-- first swipe slider -->\n        <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab1\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n        <!-- 2nd swipe slider -->\n        <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab2\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n        <!-- 3rd swipe slider -->\n        <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab3\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n    </div>\n\n    <!-- recently view Heading -->\n    <ion-row *ngIf=\"shared.recentViewedProducts.length!=0\" class=\"top-icon-header\">\n        <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"list\"></ion-icon>\n            {{'Recently Viewed'|translate}}\n        </ion-button>\n    </ion-row>\n\n    <!-- recently viewed swipe slider -->\n    <ion-slides #recentSlider [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let p of shared.recentViewedProducts\">\n            <app-product [data]=\"p\" [type]=\"'recent'\"></app-product>\n        </ion-slide>\n    </ion-slides>\n\n    <!-- For Vendor List -->\n    <app-vendor-list></app-vendor-list>\n\n    <!-- for scrollable segment and all products -->\n    <app-sliding-tabs [type]=\"'text'\"></app-sliding-tabs>\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/home-pages/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home-pages/home/home.page.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home-pages/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/app/home-pages/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-page-1 .swiper-slide {\n  width: 40%;\n}\n.home-page-1 ion-segment ion-segment-button {\n  font-size: 0.75rem;\n}\n.home-page-1 ion-slides ion-slide:last-child {\n  height: auto;\n}\n.home-page-1 app-product {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKO0FESUk7RUFDRSxrQkFBQTtBQ0ZOO0FET007RUFDRSxZQUFBO0FDTFI7QURTRTtFQUNFLFdBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2UtMSB7XG4gIC5zd2lwZXItc2xpZGUge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLy8gaWYgZGF0YSBsb2FkXG4gIGlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBpb24tc2xpZGUge1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHAtcHJvZHVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBpb24tZmFiIHtcbiAgLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8vICAgaW9uLWZhYi1idXR0b24ge1xuICAvLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vICAgfVxuICAvLyB9XG4gXG59XG4iLCIuaG9tZS1wYWdlLTEgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4uaG9tZS1wYWdlLTEgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLmhvbWUtcGFnZS0xIGlvbi1zbGlkZXMgaW9uLXNsaWRlOmxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaG9tZS1wYWdlLTEgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home-pages/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home-pages/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HomePage = class HomePage {
    constructor(nav, config, router, shared) {
        this.nav = nav;
        this.config = config;
        this.router = router;
        this.shared = shared;
        this.segments = "topSeller"; //first segment by default 
        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
    }
    ngOnInit() {
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
    ngAfterContentChecked() {
        //this.content.resize();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], HomePage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recentSlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HomePage.prototype, "slider", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home-pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-pages-home-home-module-es2015.js.map