(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title>\n            {{'Everyday Contacts'| translate }}\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <div #map id=\"map\"></div> -->\n    <ion-card class=\"ion-no-padding\">\n        <ion-card-content class=\"ion-no-padding\">\n            <ion-item lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <ion-icon name=\"pin\"></ion-icon>\n                </ion-avatar>\n                <ion-label>\n                    <p wrap-text>\n                        {{config.address}}\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <ion-icon name=\"mail\"></ion-icon>\n                </ion-avatar>\n                <ion-label>\n                    <p>\n                        {{config.email}}\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <ion-icon name=\"call\"></ion-icon>\n                </ion-avatar>\n\n\n                <button data-href=\"tel:+25675427264\" secondary clear item-right>\n                \n                        {{config.phoneNo}}\n                </button>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <ion-icon name=\"logo-whatsapp\"></ion-icon>\n                </ion-avatar>\n                <button data-href=\"tel:https://wa.me/c/256754272625\" secondary clear item-right>\n                 \n                       WhatsApp Us\n                </button>\n\n\n            </ion-item>\n\n            <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n                <ion-item>\n                    <ion-input type=\"text\" placeholder=\"{{'Name'|translate}}\" name=\"name\" [(ngModel)]=\"contact.name\" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type=\"email\" placeholder=\"{{'Email'|translate}}\" name=\"email\" [(ngModel)]=\"contact.email\" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type=\"text\" placeholder=\"{{'Your Messsage'|translate}}\" name=\"message\" [(ngModel)]=\"contact.message\" required></ion-input>\n                </ion-item>\n                <ion-col col-12>\n                    <label *ngIf=\"errorMessage!=''\">\n            <span>{{errorMessage}}</span>\n          </label>\n                </ion-col>\n                <ion-item lines=\"none\">\n                    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!contactForm.form.valid\">{{'Send'|translate}}</ion-button>\n                </ion-item>\n            </form>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-card ion-card-content ion-item {\n  --inner-padding-end: 0;\n}\nion-content ion-card ion-card-content ion-item ion-avatar {\n  background: #eee;\n}\nion-content ion-card ion-card-content ion-item ion-avatar ion-icon {\n  width: 100%;\n  margin-top: 8px;\n  color: var(--ion-color-primary);\n  zoom: 1.3;\n}\nion-content ion-card ion-card-content ion-item ion-label p {\n  white-space: normal;\n  font-size: 14px;\n}\nion-content ion-card ion-card-content ion-item:last-child {\n  --inner-padding-end: 10px !important;\n  --padding-start: 10px !important;\n}\nion-content ion-card ion-card-content ion-item:last-child ion-button {\n  --background: #83af8c;\n  width: 100%;\n}\n#map {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFDRSxzQkFBQTtBQ0hSO0FESVE7RUFDRSxnQkFBQTtBQ0ZWO0FER1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQ0RaO0FES1U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNIWjtBRE1RO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQ0pWO0FES1U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNIWjtBRFdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgaW9uLWNhcmQge1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHpvb206IDEuMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjODNhZjhjO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbiIsImlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWF2YXRhciBpb24taWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHpvb206IDEuMztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbTpsYXN0LWNoaWxkIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM4M2FmOGM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ContactUsPage = class ContactUsPage {
    constructor(http, config, loading, shared) {
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.errorMessage = '';
    }
    ionViewDidLoad() {
        if (this.config.googleMapId != "")
            this.loadMap();
    }
    // <!-- 2.0 updates -->
    submit() {
        this.loading.autoHide(2000);
        var data = {};
        data = this.contact;
        this.http.get(this.config.url + '/api/appusers/send_mail/?insecure=cool&email=' + this.contact.email + '&name=' + this.contact.name + '&message=' + this.contact.message).subscribe((data) => {
            console.log(data);
            this.contact.name = '';
            this.contact.email = '';
            this.contact.message = '';
            this.errorMessage = data;
        }, error => {
            this.errorMessage = JSON.parse(error._body).error;
            console.log(this.errorMessage);
        });
    }
    ;
    loadMap() {
        const myApiKey = this.config.googleMapId;
        const lat = parseFloat(this.config.latitude);
        const lng = parseFloat(this.config.longitude);
        let content = this.config.address;
        const parentElement = this.mapElement.nativeElement;
        const script = document.createElement('script');
        try {
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
            script.async = true;
            script.defer = true;
            script.onload = function () {
                let map = new google.maps.Map(parentElement, {
                    center: { lat, lng },
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                let marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: map.getCenter()
                });
                let infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                google.maps.event.addListener(marker, 'click', () => {
                    infoWindow.open(map, marker);
                });
            };
            this.mapElement.nativeElement.insertBefore(script, null);
        }
        catch (error) {
        }
    }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ContactUsPage.prototype, "mapElement", void 0);
ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map