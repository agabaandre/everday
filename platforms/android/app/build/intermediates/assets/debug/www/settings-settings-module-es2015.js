(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      {{'Settings'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" ((click)=\"share()\" *ngIf=\"showOption('sharePage')\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"rateUs()\" *ngIf=\"showOption('ratePage')\">\n        <ion-icon slot=\"icon-only\" name=\"star-half\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\" *ngIf=\"!config.appNavigationTabs\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"setting-page\">\n  <ion-grid class=\"ion-padding\">\n\n    <ion-row *ngIf=\"shared.customerData.id==null\" (click)=\"openLoginPage()\">\n      <ion-avatar>\n        <img src=\"assets/avatar.png\">\n      </ion-avatar>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{ 'Login & Register' | translate }}</h2>\n        <p>{{ 'Please login or create an account for free' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"shared.customerData.id!=null\">\n      <ion-avatar>\n        <ion-fab-button id=\"nametxt\">{{getNameFirstLetter()}}</ion-fab-button>\n      </ion-avatar>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{shared.customerData.first_name +\"&nbsp;\"+shared.customerData.last_name}}</h2>\n        <p>{{shared.customerData.email}}</p>\n        <ion-button (click)=\"openAccountPage()\">{{'Edit Profile' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n    <span class=\"opacity-background\"></span>\n  </ion-grid>\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"none\">\n      <ion-label>\n        <p>{{\"Turn on/off Notifications\"|translate}}</p>\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"setting.notification\" (ionChange)=\"onOffPushNotification(setting.notification)\">\n      </ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"full\" (click)=\"openLanguagePage()\" *ngIf=\"config.multiLanguage\">\n      <ion-label>\n        <p>{{\"Select Language\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"globe\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openCurrencyPage()\" *ngIf=\"config.multiCurrency\">\n      <ion-label>\n        <p>{{\"Select Currency\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"logo-usd\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('wish-list')\" *ngIf=\"showOption('wishListPage')\">\n      <ion-label>\n        <p>{{\"My Wish List\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"heart\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('my-account')\" *ngIf=\"showOption('editPage')\">\n      <ion-label>\n        <p>{{\"Edit Profile\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"lock-closed\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('addresses')\" *ngIf=\"showOption('address')\">\n      <ion-label>\n        <p>{{\"Address\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"locate\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('my-orders')\" *ngIf=\"showOption('myOrdersPage')\">\n      <ion-label>\n        <p>{{\"My Orders\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"cart\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('downloads')\" *ngIf=\"showOption('downloadPage')\">\n      <ion-label>\n        <p>{{\"Downloads\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"download\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"openPage('reward-points')\" *ngIf=\"showOption('rewardPointsPage')\">\n      <ion-label>\n        <p>{{\"Reward Points\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"happy\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"openPage('notifications')\" *ngIf=\"showOption('scratchCardPage')\">\n      <ion-label>\n        <p>{{\"Scratch Cards\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"notifications\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"openPage('contact-us')\" *ngIf=\"showOption('contactPage')\">\n      <ion-label>\n        <p>{{\"Contact Us\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('about-us')\" *ngIf=\"showOption('aboutUsPage')\">\n      <ion-label>\n        <p>{{\"About Us\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"information-circle\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('news')\" *ngIf=\"showOption('newsPage')\">\n      <ion-label>\n        <p>{{\"News\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"newspaper\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('intro')\" *ngIf=\"showOption('introPage')\">\n      <ion-label>\n        <p>{{\"Intro\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-item lines=\"none\" *ngIf=\"shared.customerData.id!=null\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\">{{'Log Out' | translate }}</ion-button>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setting-page ion-grid {\n  position: relative;\n  background-color: #383a3e;\n  background-position: center;\n  color: var(--ion-color-light);\n  z-index: 10;\n}\n.setting-page ion-grid .opacity-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--ion-color-primary-shade);\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.setting-page ion-grid ion-row {\n  text-align: center;\n}\n.setting-page ion-grid ion-row ion-avatar {\n  margin: auto;\n}\n.setting-page ion-grid ion-row h2 {\n  color: var(--ion-color-primary-contrast);\n  margin-top: 10px;\n  font-weight: bold;\n}\n.setting-page ion-grid ion-row p {\n  color: var(--ion-color-primary-contrast);\n  margin-top: 10px;\n  margin-bottom: 8px;\n}\n.setting-page ion-grid ion-row ion-button {\n  height: 30px;\n  --background: var(--ion-color-light);\n  color: var(--ion-color-primary-shade);\n}\n.setting-page ion-list {\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item {\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item ion-toggle {\n  padding-right: 0;\n  --background-checked: var(--ion-color-primary-tint);\n  --handle-background-checked: var(--ion-color-primary);\n}\n.setting-page ion-list ion-item ion-icon {\n  color: var(--ion-text-color);\n}\n.setting-page ion-list ion-item p {\n  font-size: 16px;\n  color: var(--ion-text-color);\n}\n.setting-page ion-list:last-child {\n  padding-top: 0;\n}\n.setting-page ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px;\n}\n#nametxt {\n  width: 100%;\n  height: 100%;\n  font-size: 25px;\n  text-transform: capitalize;\n}\n.avatar-icon {\n  font-size: 64px !important;\n  color: var(--ion-color-light-shade);\n}\n.row-img {\n  opacity: 0.1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBV0ksa0JBQUE7RUFDQSx5QkFBQTtFQUVBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWFI7QURKUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNWjtBREVRO0VBQ0ksa0JBQUE7QUNBWjtBRENZO0VBQ0ksWUFBQTtBQ0NoQjtBRENZO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ2hCO0FEQ1k7RUFDSSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURDWTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FDQ2hCO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FERVE7RUFDSSxpQkFBQTtBQ0FaO0FEQ1k7RUFDSSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7QUNDaEI7QURDWTtFQUNJLDRCQUFBO0FDQ2hCO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNDaEI7QURFUTtFQUNJLGNBQUE7QUNBWjtBRElRO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDRlo7QURPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDSko7QURPQTtFQUNJLDBCQUFBO0VBQ0EsbUNBQUE7QUNKSjtBRE9BO0VBQ0ksdUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nLXBhZ2Uge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgLm9wYWNpdHktYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODNhM2U7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jbmFtZXR4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmF2YXRhci1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnJvdy1pbWcge1xuICAgIG9wYWNpdHk6IDAuMSAhaW1wb3J0YW50O1xufSIsIi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODNhM2U7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHotaW5kZXg6IDEwO1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCAub3BhY2l0eS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCBpb24tcm93IGgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi10b2dnbGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnNldHRpbmctcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweDtcbn1cblxuI25hbWV0eHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYXZhdGFyLWljb24ge1xuICBmb250LXNpemU6IDY0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5yb3ctaW1nIHtcbiAgb3BhY2l0eTogMC4xICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/login/login.page */ "./src/app/modals/login/login.page.ts");
/* harmony import */ var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/privacy-policy/privacy-policy.page */ "./src/app/modals/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modals/term-services/term-services.page */ "./src/app/modals/term-services/term-services.page.ts");
/* harmony import */ var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals/refund-policy/refund-policy.page */ "./src/app/modals/refund-policy/refund-policy.page.ts");
/* harmony import */ var _modals_language_language_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modals/language/language.page */ "./src/app/modals/language/language.page.ts");
/* harmony import */ var _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modals/currency-list/currency-list.page */ "./src/app/modals/currency-list/currency-list.page.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");



















let SettingsPage = class SettingsPage {
    constructor(navCtrl, modalCtrl, config, storage, loading, http, appEventsService, shared, iab, socialSharing, plt, appVersion, oneSignal) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.setting = {};
    }
    ionViewDidEnter() {
    }
    updateSetting() {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    }
    openLoginPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"],
                componentProps: {
                    'hideGuestLogin': true
                }
            });
            return yield modal.present();
        });
    }
    logOut() {
        this.shared.logOut();
    }
    openAccountPage() {
        this.navCtrl.navigateForward("tabs/settings/my-account");
    }
    openSite() {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    }
    //============================================================================================
    //turning on off local  notification
    onOffPushNotification(value) {
        if (value == false) {
            this.oneSignal.setSubscription(false);
        }
        else {
            this.oneSignal.setSubscription(true);
        }
        this.updateSetting();
    }
    ;
    hideShowFooterMenu() {
        this.appEventsService.publish('setting', this.setting);
        this.updateSetting();
    }
    hideShowCartButton() {
        this.appEventsService.publish('setting', this.setting);
        this.updateSetting();
    }
    showModal(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (value == 'privacyPolicy') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyPage"]
                });
                return yield modal.present();
            }
            else if (value == 'termServices') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__["TermServicesPage"]
                });
                return yield modal.present();
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__["RefundPolicyPage"]
                });
                return yield modal.present();
            }
        });
    }
    openLanguagePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_language_language_page__WEBPACK_IMPORTED_MODULE_16__["LanguagePage"],
            });
            return yield modal.present();
        });
    }
    openCurrencyPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_17__["CurrencyListPage"],
            });
            return yield modal.present();
        });
    }
    ionViewDidLoad() {
        this.storage.get('setting').then((val) => {
            if (val != null || val != undefined) {
                this.setting = val;
            }
            else {
                this.setting.localNotification = true;
                this.setting.notification = true;
                this.setting.cartButton = true;
                this.setting.footer = true;
            }
        });
    }
    rateUs() {
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then((val) => {
                this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    }
    share() {
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then((val) => {
                this.socialSharing.share(this.config.appName, this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
        }
    }
    checkAvatar() {
        return this.shared.checkAvatar();
    }
    getNameFirstLetter() {
        return this.shared.getNameFirstLetter();
    }
    ngOnInit() {
    }
    showOption(value) {
        if (this.config.wishListPage && value == "wishListPage" && this.shared.customerData.id != null) {
            return true;
        }
        else if (this.config.editProfilePage && value == "editPage" && this.shared.customerData.id != null) {
            return true;
        }
        else if (value == "address" && this.shared.customerData.id != null) {
            return true;
        }
        else if (this.config.myOrdersPage && value == "myOrdersPage" && this.shared.customerData.id != null) {
            return true;
        }
        else if (this.config.contactUsPage && value == "contactPage") {
            return true;
        }
        else if (this.config.aboutUsPage && value == "aboutUsPage") {
            return true;
        }
        else if (this.config.newsPage && value == "newsPage") {
            return true;
        }
        else if (this.config.introPage && value == "introPage") {
            return true;
        }
        else if (this.config.shareApp && value == "sharePage") {
            return true;
        }
        else if (this.config.rateApp && value == "ratePage") {
            return true;
        }
        else if (this.config.settingPage && value == "settingsPage") {
            return true;
        }
        else if (this.config.enableWpPointReward && value == "rewardPointsPage" && this.shared.customerData.id != null) {
            return true;
        }
        else if (this.config.downloadPage && value == "downloadPage" && this.shared.customerData.id != null) {
            return true;
        }
        else if (value == "scratchCardPage" && this.shared.customerData.id != null) {
            return true;
        }
        else
            return false;
    }
    openPage(value) {
        this.navCtrl.navigateForward("tabs/settings/" + value);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__["AppEventsService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__["AppEventsService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map