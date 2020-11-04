(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-billing-address-billing-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{'Delivery Address'| translate }} </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form>\n        <ion-item>\n            <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shared.billing.first_name\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shared.billing.last_name\" required></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shared.billing.company\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n            <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shared.billing.address_1\" required></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n            <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shared.billing.address_2\"></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_country\" tappable (click)=\"selectCountryPage()\" readonly [(ngModel)]=\"shared.billingCountryName\" required></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating\">{{'District'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_zone\" tappable (click)=\"selectZonePage()\" readonly [(ngModel)]=\"shared.billingStateName\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">{{'City'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_city\" [(ngModel)]=\"shared.billing.city\" required></ion-input>\n        </ion-item>\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shared.billing.postcode\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n            <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"shared.billing.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">{{'Phone'|translate}}</ion-label>\n            <ion-input type=\"tel\" name=\"Phone\" [(ngModel)]=\"shared.billing.phone\" required></ion-input>\n        </ion-item>\n    </form>\n\n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"proceedOrder()\">{{'Next'|translate}}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.module.ts ***!
  \*************************************************************************/
/*! exports provided: BillingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPageModule", function() { return BillingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _billing_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing-address.page */ "./src/app/address-pages/billing-address/billing-address.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");







// For Translation Language

const routes = [
    {
        path: '',
        component: _billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]
    }
];
let BillingAddressPageModule = class BillingAddressPageModule {
};
BillingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]]
    })
], BillingAddressPageModule);



/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: var(--ion-background-color);\n}\nion-content form ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2FkZHJlc3MtcGFnZXMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZHJlc3MtcGFnZXMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdJO0VBQ0UseUNBQUE7QUNETjtBREVNO0VBQ0UsMkNBQUE7QUNBUjtBRE1FO0VBQ0Usa0JBQUE7QUNISjtBREtFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy1wYWdlcy9iaWxsaW5nLWFkZHJlc3MvYmlsbGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbn1cblxuaW9uLWZvb3RlciAudG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.page.ts ***!
  \***********************************************************************/
/*! exports provided: BillingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPage", function() { return BillingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/location-data/location-data.service */ "./src/providers/location-data/location-data.service.ts");
/* harmony import */ var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/select-country/select-country.page */ "./src/app/modals/select-country/select-country.page.ts");
/* harmony import */ var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/select-zones/select-zones.page */ "./src/app/modals/select-zones/select-zones.page.ts");








let BillingAddressPage = class BillingAddressPage {
    constructor(config, shared, modalCtrl, navCtrl, location, applicationRef // public loading: LoadingProvider,
    ) {
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.location = location;
        this.applicationRef = applicationRef;
        this.defaultAddress = false;
        if (this.shared.customerData.id != null) {
            this.shared.billing = this.shared.customerData.billing;
            this.shared.billing.email = this.shared.customerData.email;
            this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
        if (this.shared.billingCountryName == "" ||
            this.shared.billingCountryName == null)
            this.shared.billingStateName = "";
    }
    // <!-- 2.0 updates -->
    setAddress(value) {
        if (this.defaultAddress == false)
            this.defaultAddress = true;
        else
            this.defaultAddress = false;
        this.shared.sameAddress = this.defaultAddress;
        console.log(this.defaultAddress);
        if (this.defaultAddress == true) {
            console.log(" billing ==shipping");
            this.shared.billing.first_name = this.shared.shipping.first_name;
            this.shared.billing.last_name = this.shared.shipping.last_name;
            this.shared.billing.state = this.shared.shipping.state;
            this.shared.billing.postcode = this.shared.shipping.postcode;
            this.shared.billing.country = this.shared.shipping.country;
            this.shared.billing.address_1 = this.shared.shipping.address_1;
            this.shared.billing.address_2 = this.shared.shipping.address_2;
            this.shared.billing.city = this.shared.shipping.city;
            this.shared.billing.company = this.shared.shipping.company;
            this.shared.billingCountryName = this.shared.shippingCountryName;
            this.shared.billingStateName = this.shared.shippingStateName;
        }
        else {
            if (this.shared.customerData.id != null) {
                console.log("changing customer data billing");
                console.log(this.shared.customerData);
                this.shared.billing = this.shared.customerData.billing;
                this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
                this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
            }
            else {
                console.log("changing customer data to null for guest");
                this.shared.billing.first_name = "";
                this.shared.billing.last_name = "";
                this.shared.billing.state = "";
                this.shared.billing.postcode = "";
                this.shared.billing.country = "";
                this.shared.billing.address_1 = "";
                this.shared.billing.address_2 = "";
                this.shared.billing.city = "";
                this.shared.billing.company = "";
                this.shared.billingCountryName = "";
                this.shared.billingStateName = "";
            }
        }
        this.applicationRef.tick();
    }
    submit() {
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/shipping-method");
        else
            this.navCtrl.navigateForward("shipping-method");
        this.applicationRef.tick();
    }
    selectCountryPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"],
                componentProps: { page: "billing" },
            });
            return yield modal.present();
        });
    }
    selectZonePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_7__["SelectZonesPage"],
                componentProps: { page: "billing", id: this.shared.billing.country },
            });
            return yield modal.present();
        });
    }
    disableButton() {
        if (this.shared.billing.first_name == "" ||
            this.shared.billing.last_name == "" ||
            this.shared.billing.city == "" ||
            this.shared.billing.country == "" ||
            this.shared.billing.phone == "") {
            return true;
        }
        else
            return false;
    }
    proceedOrder() {
        if (this.config.checkOutPage == 2)
            this.navCtrl.navigateForward(this.config.currentRoute + "/order");
        else
            this.openOrderPage();
    }
    //=====================================================================================================================
    openOrderPage() {
        let customer_id = 0; // <!-- 2.0 updates -->
        if (this.shared.customerData.id != null)
            customer_id = this.shared.customerData.id; // <!-- 2.0 updates -->
        let token = null; // <!-- 2.0 updates -->
        if (this.shared.customerData.cookie != null)
            token = this.shared.customerData.cookie; // <!-- 2.0 updates -->
        let onePage = this.config.checkOutPage;
        var data = {
            token: token,
            // payment_method: this.selectedPaymentMethod,
            // payment_method_title: this.selectedPaymentMethodTitle,
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            sameAddress: this.shared.sameAddress,
            one_page: onePage,
            platform: this.shared.device,
        };
        console.log(data);
        this.shared.openCheckoutWebview(data);
    }
    //Object.assign(c, data
    getCoupons() {
        var data = [];
        for (let v of this.shared.couponArray) {
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    getProducts() {
        var data = [];
        for (let v of this.shared.cartProducts) {
            var obj = {
                quantity: v.quantity,
                product_id: v.product_id,
                total: v.total.toString(),
            };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    }
    ngOnInit() {
        this.shared.shippingCountryName = "Uganda";
    }
};
BillingAddressPage.ctorParameters = () => [
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] // public loading: LoadingProvider,
     }
];
BillingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-billing-address",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billing-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billing-address.page.scss */ "./src/app/address-pages/billing-address/billing-address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] // public loading: LoadingProvider,
    ])
], BillingAddressPage);



/***/ })

}]);
//# sourceMappingURL=address-pages-billing-address-billing-address-module-es2015.js.map