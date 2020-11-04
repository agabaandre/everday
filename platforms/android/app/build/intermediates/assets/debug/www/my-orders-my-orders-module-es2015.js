(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Custom Orders'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\" *ngIf=\"!config.appNavigationTabs\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding grid\" *ngIf=\"orders.length==0 && httpRunning==false\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"briefcase\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Order List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-card *ngFor=\"let order of orders\" (click)=\"showOrderDetail(order)\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Order ID'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" col-6>\n            {{'#'+order.number}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Date'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{order.date_created}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Price'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{order.total}}\n          </ion-col>\n        </ion-row>\n        <ion-row [class.pending]=\"order.status=='pending' || order.status=='refunded'\"\n          [class.cancel]=\"order.status=='cancelled' || order.status=='failed'\"\n          [class.inprocess]=\"order.status=='processing'\" [class.complete]=\"order.status=='completed'\">\n          <ion-col size=\"6\">\n            {{'Status'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            <strong>{{order.status|translate}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getOrders()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/my-orders/my-orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.module.ts ***!
  \***********************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/my-orders/my-orders.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]
    }
];
let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
    })
], MyOrdersPageModule);



/***/ }),

/***/ "./src/app/my-orders/my-orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .grid {\n  margin-top: 50%;\n}\nion-content .grid ion-row ion-col {\n  text-align: center;\n}\nion-content .grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid ion-row ion-col ion-button {\n  --border-radius: 0px;\n}\nion-content .grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content .grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-grid ion-card {\n  color: black;\n}\n.pending {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n.cancel {\n  background-color: red;\n  color: white;\n}\n.complete {\n  background-color: green;\n  color: white;\n}\n.inprocess {\n  background-color: green;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9teS1vcmRlcnMvbXktb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7QUNESjtBREdNO0VBQ0Usa0JBQUE7QUNEUjtBREVRO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDQVY7QURFUTtFQUNFLG9CQUFBO0FDQVY7QURFUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FWO0FERVE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBVjtBRE1JO0VBQ0UsWUFBQTtBQ0pOO0FEU0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNORjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FET0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgem9vbTogMy45O1xuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuXG4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgZGFuZ2VyKTtcbn1cbi5jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW5wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsImlvbi1jb250ZW50IC5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMy45O1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1jYXJkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnByb2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-orders/my-orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.ts ***!
  \*********************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");







let MyOrdersPage = class MyOrdersPage {
    constructor(navCtrl, http, config, shared, loading, applicationRef) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.page = 1;
        this.orders = new Array;
        this.httpRunning = true;
    }
    getOrders() {
        this.httpRunning = true;
        if (this.page == 1) {
            this.loading.show();
        }
        this.config.getWoo('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then((data) => {
            this.infinite.complete();
            this.httpRunning = false;
            let dat = data;
            if (this.page == 1) {
                this.orders = new Array;
                this.loading.hide();
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.orders.push(value);
                }
            }
            if (dat.length == 0) {
                this.infinite.disabled = true;
            }
            this.applicationRef.tick();
        }, err => {
            this.loading.hide();
            this.shared.showAlert("Server Error while Loading Orders");
        });
    }
    ;
    showOrderDetail(order) {
        this.shared.myOrderDetialPageData = order;
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/my-order-detail");
        else
            this.navCtrl.navigateForward("/my-order-detail");
    }
    ionViewDidLoad() {
    }
    openShop() {
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/products/0/0/newest");
        else
            this.navCtrl.navigateForward("/products/0/0/newest");
    }
    refreshPage() {
        this.page = 1;
        this.infinite.disabled = false;
        this.getOrders();
    }
    addCurrecny(order, v2) {
        return order.currency + " " + v2;
    }
    ngOnInit() {
        this.httpRunning = true;
        this.getOrders();
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], MyOrdersPage.prototype, "infinite", void 0);
MyOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/my-orders/my-orders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], MyOrdersPage);



/***/ })

}]);
//# sourceMappingURL=my-orders-my-orders-module-es2015.js.map