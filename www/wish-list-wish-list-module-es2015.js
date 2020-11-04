(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wish-list-wish-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Wish List'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding top-margin\" *ngIf=\"shared.wishListProducts.length == 0\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Wishlist is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of shared.wishListProducts\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'wishList'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/wish-list/wish-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/wish-list/wish-list.module.ts ***!
  \***********************************************/
/*! exports provided: WishListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPageModule", function() { return WishListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _wish_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wish-list.page */ "./src/app/wish-list/wish-list.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _wish_list_page__WEBPACK_IMPORTED_MODULE_6__["WishListPage"]
    }
];
let WishListPageModule = class WishListPageModule {
};
WishListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_wish_list_page__WEBPACK_IMPORTED_MODULE_6__["WishListPage"]]
    })
], WishListPageModule);



/***/ }),

/***/ "./src/app/wish-list/wish-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/wish-list/wish-list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .top-margin {\n  margin-top: 50%;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\nion-content ion-grid ion-row ion-col {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  --border-radius: 0px;\n  height: 30px;\n}\nion-content ion-grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3dpc2gtbGlzdC93aXNoLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC93aXNoLWxpc3Qvd2lzaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7QUNESjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREdNO0VBQ0Usa0JBQUE7QUNEUjtBREVRO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDQVY7QURFUTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0FWO0FERVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVY7QURFUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FWIiwiZmlsZSI6InNyYy9hcHAvd2lzaC1saXN0L3dpc2gtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgLnRvcC1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB6b29tOiAzLjk7XG4gICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCAudG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB6b29tOiAzLjk7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/wish-list/wish-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/wish-list/wish-list.page.ts ***!
  \*********************************************/
/*! exports provided: WishListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPage", function() { return WishListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let WishListPage = class WishListPage {
    constructor(navCtrl, config, shared, storage) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.storage = storage;
    }
    openProductsPage() {
        this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
    }
    ngOnInit() {
    }
};
WishListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
WishListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-list.page.scss */ "./src/app/wish-list/wish-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], WishListPage);



/***/ })

}]);
//# sourceMappingURL=wish-list-wish-list-module-es2015.js.map