(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Edit Profile'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"updateInfo()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"myAccountData.first_name\" name=\"customers_firstname\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"myAccountData.last_name\" name=\"customers_lastname\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'New Password'|translate}}</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!userForm.form.valid\">{{'Update'|translate}}\n    </ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]
    }
];
let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })
], MyAccountPageModule);



/***/ }),

/***/ "./src/app/my-account/my-account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 12px;\n}\nform ion-item {\n  --padding-start: 0;\n  --background: var(--ion-background-color);\n}\nform ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nform ion-button {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSx5Q0FBQTtBQ0VSO0FERFE7RUFDSSwyQ0FBQTtBQ0daO0FEQUk7RUFDSSx5QkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuIiwiZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5mb3JtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/my-account/my-account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");







let MyAccountPage = class MyAccountPage {
    constructor(http, config, shared, platform, navCtrl, applicationRef, loading) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.applicationRef = applicationRef;
        this.loading = loading;
        this.myAccountData = {};
        this.password = '';
        //============================================================================================  
        //function updating user information
        this.updateInfo = function () {
            this.loading.show();
            if (this.password != '')
                this.myAccountData.password = this.password;
            this.config.putAsync("customers/" + this.shared.customerData.id, this.myAccountData).then((data) => {
                this.loading.hide();
                this.shared.login(data);
                this.applicationRef.tick();
                this.nav.navigateRoot("/settings");
                this.shared.toast("Data Updated!");
            }, (err) => { this.shared.toast("Error Updating Data!"); });
        };
    }
    ionViewWillEnter() {
        this.myAccountData.first_name = this.shared.customerData.first_name;
        this.myAccountData.last_name = this.shared.customerData.last_name;
    }
    ngOnInit() {
    }
};
MyAccountPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
MyAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account.page.scss */ "./src/app/my-account/my-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
], MyAccountPage);



/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module-es2015.js.map