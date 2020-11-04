(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home4-home4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-banner></app-banner>\n  <!-- category avatar -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\" size=\"6\"\n        class=\"ion-no-padding animate-item\">\n        <ion-card>\n          <ion-avatar>\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name|translate}}</h6>\n            <p>{{c.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n      {{ 'Newest Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab1\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"caret-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"bookmark\"></ion-icon>\n      {{ 'On Sale Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab2\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('sale')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"caret-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n      {{ 'Featured Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab3\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"caret-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n  <!-- recently view Heading -->\n  <ion-row *ngIf=\"shared.recentViewedProducts.length!=0\" class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"list\"></ion-icon>\n      {{'Recently Viewed'|translate}}\n    </ion-button>\n  </ion-row>\n  <!-- recently viewed swipe slider -->\n  <ion-slides #recentSlider [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.recentViewedProducts\">\n      <app-product [data]=\"p\" [type]=\"'recent'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/home-pages/home4/home4.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home4/home4.module.ts ***!
  \**************************************************/
/*! exports provided: Home4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home4PageModule", function() { return Home4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home4.page */ "./src/app/home-pages/home4/home4.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home4_page__WEBPACK_IMPORTED_MODULE_6__["Home4Page"]
    }
];
let Home4PageModule = class Home4PageModule {
};
Home4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home4_page__WEBPACK_IMPORTED_MODULE_6__["Home4Page"]]
    })
], Home4PageModule);



/***/ }),

/***/ "./src/app/home-pages/home4/home4.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home4/home4.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-grid {\n  padding-bottom: 10px !important;\n}\nion-content ion-grid ion-row {\n  box-shadow: 0 0 0 2px lightgrey;\n  /* border-radius: 10px; */\n  border-right: solid #fafafa;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  font-weight: bold;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  margin: 0;\n  border-radius: 0px;\n  border: solid #fafafa;\n  box-shadow: 0px 0px 0px 0px #fafafa;\n  border-bottom: 0px;\n  border-right: 0px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\nion-content ion-grid ion-row ion-col ion-card h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: var(--heading-font-size);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-grid ion-row ion-col ion-card p {\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--sub-heading-font-size);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTQvaG9tZTQucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU0L2hvbWU0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREVFO0VBQ0UsK0JBQUE7QUNBSjtBRENJO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDQ047QURDUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1Y7QURBVTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEQVU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VaO0FEQVU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtBQ0VaO0FEUU07RUFDRSxZQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU0L2hvbWU0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBpb24tcm93IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBsaWdodGdyZXk7XG4gICAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZmFmYWZhO1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgI2ZhZmFmYTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW9uLWNvbnRlbnQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGxpZ2h0Z3JleTtcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZmFmYWZhO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogc29saWQgI2ZhZmFmYTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNmYWZhZmE7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home-pages/home4/home4.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home4/home4.page.ts ***!
  \************************************************/
/*! exports provided: Home4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home4Page", function() { return Home4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");





let Home4Page = class Home4Page {
    constructor(nav, config, shared) {
        this.nav = nav;
        this.config = config;
        this.shared = shared;
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    ionViewWillEnter() {
        this.config.setCardStyle("9");
    }
    openSubCategories(parent) {
        let count = 0;
        for (let value of this.shared.allCategories) {
            console.log();
            if (value.parent == parent.id) {
                count++;
                console.log(value);
            }
        }
        if (count != 0)
            this.nav.navigateForward(this.config.currentRoute + "/categories/" + parent.id + "/" + parent.name);
        else
            this.nav.navigateForward(this.config.currentRoute + "/products/" + parent.id + "/" + parent.name + "/newest");
    }
    openProducts(value) {
        this.nav.navigateForward("/products/0/0/" + value);
    }
    ngOnInit() {
    }
};
Home4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
Home4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home4.page.scss */ "./src/app/home-pages/home4/home4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home4Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home4-home4-module-es2015.js.map