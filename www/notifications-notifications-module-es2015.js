(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Scratch Card'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"notifications.length==0 && httpRunning==false\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"notifications\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Scratch Cards Coupon List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openShop()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list *ngIf=\"notifications.length!=0\">\n    <div *ngFor=\"let n of notifications\">\n      <ion-item *ngIf=\"n.type=='1'\">\n        <ion-icon name=\"notifications\" slot=\"start\"></ion-icon>\n        <ion-button *ngIf=\"n.is_view == 0\" ion-button color=\"secondary\" (click)=\"openScratchCard(n)\">\n          {{'Open Scratch Card' |translate}}\n        </ion-button>\n        <ion-label>\n          <h2 *ngIf=\"n.is_view == 1\">{{'Code'|translate}}: {{n.code}}</h2>\n          <h3 *ngIf=\"n.is_view == 1\">{{n.message}}</h3>\n        </ion-label>\n        <ion-note slot=\"end\" class=\"note\">{{'Expiry Date'|translate}} <small>{{n.expire_date}}</small></ion-note>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getNotifications()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid {\n  margin-top: 50%;\n}\nion-content ion-grid ion-row ion-col {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 0px;\n  height: 30px;\n}\nion-content ion-grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\n.note {\n  color: red;\n  width: 80px;\n  text-align: center;\n}\nion-list h2 {\n  color: var(--ion-color-primary);\n}\nion-list ion-icon {\n  color: var(--ion-color-secondary);\n}\n.pop {\n  width: 100%;\n  height: 100%;\n}\n.popover-md .popover-content {\n  width: 400px !important;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0FDREo7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURFUTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ0FWO0FERVE7RUFDRSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0FWO0FERVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVY7QURFUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FWO0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSkY7QURPRTtFQUNFLCtCQUFBO0FDSko7QURNRTtFQUNFLGlDQUFBO0FDSko7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURNQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICBpb24tZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHpvb206IDMuOTtcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5vdGUge1xuICBjb2xvcjogcmVkO1xuICB3aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWxpc3Qge1xuICBoMiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG59XG4ucG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wb3BvdmVyLW1kIC5wb3BvdmVyLWNvbnRlbnQge1xuICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiIsImlvbi1jb250ZW50IGlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMy45O1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5ub3RlIHtcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3QgaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWxpc3QgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5wb3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9wb3Zlci1tZCAucG9wb3Zlci1jb250ZW50IHtcbiAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _modals_scratch_card_scratch_card_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/scratch-card/scratch-card.page */ "./src/app/modals/scratch-card/scratch-card.page.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");









let NotificationsPage = class NotificationsPage {
    constructor(navCtrl, shared, config, http, loading, applicationRef, popoverCtrl, appEventsService) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.popoverCtrl = popoverCtrl;
        this.appEventsService = appEventsService;
        this.page = 1;
        this.notifications = new Array;
        this.httpRunning = true;
        this.httpRunning = true;
        this.getNotifications();
        let cardScratched = this.appEventsService.subscribe("cardScratched");
        cardScratched.subscriptions.add(cardScratched.event.subscribe(data => {
            this.updateList(data);
        }));
    }
    getNotifications() {
        this.httpRunning = true;
        this.loading.show();
        this.http.get(this.config.url + '/api/appusers/ionic_coupon_notification/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe((data) => {
            this.httpRunning = false;
            this.loading.hide();
            let dat = data.data;
            if (this.page == 1) {
                this.notifications = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.notifications.push(value);
                }
            }
            this.infinite.disabled = true;
            if (dat.length == 0) {
                this.infinite.disabled = true;
            }
            this.applicationRef.tick();
            console.log(dat);
        });
    }
    openScratchCard(v) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popoverElement = yield this.popoverCtrl.create({
                component: _modals_scratch_card_scratch_card_page__WEBPACK_IMPORTED_MODULE_7__["ScratchCardPage"],
                event: event,
                componentProps: {
                    "data": v
                }
            });
            return yield popoverElement.present();
        });
    }
    refreshPage() {
        this.page = 1;
        this.getNotifications();
    }
    openShop() {
        this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
    }
    ionViewDidLoad() {
    }
    updateList(data) {
        for (let v of this.notifications) {
            if (v.id == data.id) {
                v.is_view = 1;
                this.shared.toast("Congratulations you Get " + v.message + " use this code : " + v.code);
                this.http.get(this.config.url + '/api/appusers/ionic_notification_update/?insecure=cool&notification_id=' + v.id).subscribe((data) => {
                    //this.loading.hide();
                    let dat = data.data;
                    console.log(data);
                });
            }
        }
    }
    ngOnInit() {
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], NotificationsPage.prototype, "infinite", void 0);
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map