(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-method-shipping-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Shipping Method'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class=\"ion-padding\" *ngIf=\"resetPage\">\n    <ion-radio-group (ionChange)=\"setMethod($event)\">\n      <div *ngFor=\"let m of shippingMethod\">\n        <ion-item lines=\"full\" *ngIf=\"m.enabled && checkFreeShipping(m)\">\n          <ion-label>{{m.method_title}}\n            <span *ngIf=\"m.settings.cost\">{{m.settings.cost.value|curency}}</span>\n          </ion-label>\n          <ion-radio [value]=\"m\"></ion-radio>\n        </ion-item>\n      </div>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"proceedOrder()\" [disabled]=\"shared.shipping_lines.length==0\">\n    {{'Next'|translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/shipping-method/shipping-method.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shipping-method/shipping-method.module.ts ***!
  \***********************************************************/
/*! exports provided: ShippingMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodPageModule", function() { return ShippingMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shipping_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-method.page */ "./src/app/shipping-method/shipping-method.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _shipping_method_page__WEBPACK_IMPORTED_MODULE_6__["ShippingMethodPage"]
    }
];
let ShippingMethodPageModule = class ShippingMethodPageModule {
};
ShippingMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_shipping_method_page__WEBPACK_IMPORTED_MODULE_6__["ShippingMethodPage"]]
    })
], ShippingMethodPageModule);



/***/ }),

/***/ "./src/app/shipping-method/shipping-method.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/shipping-method/shipping-method.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer ion-button {\n  height: 45px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3NoaXBwaW5nLW1ldGhvZC9zaGlwcGluZy1tZXRob2QucGFnZS5zY3NzIiwic3JjL2FwcC9zaGlwcGluZy1tZXRob2Qvc2hpcHBpbmctbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy1tZXRob2Qvc2hpcHBpbmctbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tZm9vdGVyIHtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/shipping-method/shipping-method.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/shipping-method/shipping-method.page.ts ***!
  \*********************************************************/
/*! exports provided: ShippingMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodPage", function() { return ShippingMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/location-data/location-data.service */ "./src/providers/location-data/location-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");










let ShippingMethodPage = class ShippingMethodPage {
    constructor(navCtrl, shared, http, storage, spinnerDialog, config, loading, location, applicationRef) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.http = http;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
        this.config = config;
        this.loading = loading;
        this.location = location;
        this.applicationRef = applicationRef;
        this.shippingMethod = new Array;
        this.selectedMethod = true;
        this.shippingLocations = [];
        this.resetPage = false;
        console.log(this.shared.customerData);
        this.shared.translateString(this.shared.checkOutPageText).then((res) => { this.shared.checkOutPageText = res; });
        // if (this.shared.customerData.id != null) {
        //   if (this.shared.customerData.billing.first_name == "" &&
        //     this.shared.customerData.shippping.first_name == "" &&
        //     this.shared.customerData.shippping.last_name == "" &&
        //     this.shared.customerData.billing.last_name == ""
        //   ) { this.updateUser(); }
        // }
        this.getShippingZones();
    }
    //=================================================================================================================================
    getShippingZones() {
        this.loading.show();
        this.config.getWoo("shipping/zones" + "?" + this.config.productsArguments).then((data) => {
            let d = data;
            this.getShippingLocations(d);
        });
    }
    //=================================================================================================================================
    getShippingLocations(array) {
        var count = 0;
        for (let v of array) {
            this.config.getWoo("shipping/zones/" + v.id + "/locations" + "?" + this.config.productsArguments).then((data) => {
                count++;
                let d = data;
                for (let v2 of d) {
                    this.shippingLocations.push(Object.assign(v2, { zoneId: v.id }));
                }
                if (array.length == count) {
                    this.loading.hide();
                    this.sortArray(this.shippingLocations);
                }
            });
        }
    }
    //=================================================================================================================================
    sortArray(array) {
        let tempArray = [];
        for (let value of array) {
            if (value.type == "postcode") {
                tempArray.push(value);
            }
        }
        for (let value of array) {
            if (value.type == "state") {
                tempArray.push(value);
            }
        }
        for (let value of array) {
            if (value.type == "country") {
                tempArray.push(value);
            }
        }
        for (let value of array) {
            if (value.type == "continent") {
                tempArray.push(value);
            }
        }
        console.log(tempArray);
        this.findZoneId(tempArray);
    }
    //=================================================================================================================================
    findZoneId(array) {
        let zoneId = "";
        for (let value of array) {
            if (value.type == "postcode") {
                if (this.matchPostCode(value)) {
                    zoneId = value.zoneId;
                    console.log("postcode" + "  " + value.code);
                    break;
                }
            }
            else if (value.type == "state") {
                if (this.matchState(value)) {
                    console.log("state" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "country") {
                if (this.matchCountry(value)) {
                    console.log("country" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "continent") {
                if (this.matchContinent(value)) {
                    console.log("continent" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
        }
        this.getShippingMethods(zoneId);
    }
    //=================================================================================================================================
    matchPostCode(value) {
        let postcode = this.shared.shipping.postcode;
        if (value.code.toUpperCase() == postcode.toUpperCase())
            return true;
        if (value.code.indexOf("*") > 0) {
            let ind = value.code.indexOf("*");
            let s1 = postcode.substring(0, ind - 1);
            let s2 = value.code.substring(0, ind - 1);
            if (s1.toUpperCase() == s2.toUpperCase()) {
                return true;
            }
        }
        if (value.code.indexOf(".") > 0) {
            let i = value.code.indexOf(".");
            let min = value.code.substring(0, i);
            let max = value.code.substring(i + 3, value.code.length);
            min = parseInt(min);
            let p = parseInt(postcode);
            max = parseInt(max);
            if (p >= min && p <= max) {
                return true;
            }
        }
    }
    //=================================================================================================================================
    matchState(value) {
        let s = this.shared.shipping.country + ":" + this.shared.shipping.state;
        if (s == value.code) {
            return true;
        }
    }
    //=================================================================================================================================
    matchCountry(value) {
        let s = this.shared.shipping.country;
        if (s == value.code) {
            return true;
        }
    }
    //=================================================================================================================================
    matchContinent(value) {
        let s = this.location.getContientCode(this.shared.shipping.country);
        if (s == value.code)
            return true;
    }
    //=================================================================================================================================
    getShippingMethods(id) {
        if (id == "")
            id = 0;
        this.loading.show();
        this.config.getWoo("shipping/zones/" + id + "/methods" + "?" + this.config.productsArguments).then((data) => {
            this.loading.hide();
            this.shippingMethod = data;
            this.applicationRef.tick();
        });
    }
    //=================================================================================================================================
    setMethod(event) {
        let data = event.detail.value;
        this.shared.shipping_lines = [];
        var s = {};
        if (data.method_id == "flat_rate")
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.method_title,
                total: this.calculateFlatRate(data)
            };
        else if (data.settings.cost) {
            let cal = (data.settings.cost.value).toString();
            if (cal == "")
                cal = "0";
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.method_title,
                total: cal
            };
        }
        else {
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.method_title,
                total: "0"
            };
        }
        console.log(s);
        this.shared.shipping_lines.push(s);
    }
    //===============================================================================
    calculateFlatRate(data) {
        // if (data.settings.cost.value.indexOf("*") > 0) {
        //   let split = data.settings.cost.value.split("*");
        //   let value = parseFloat(split[0]);
        //   let result = value * this.shared.cartTotalItems();
        //   return result.toString();
        // }
        // else 
        let cal = (data.settings.cost.value).toString();
        if (cal == "")
            cal = "0";
        return cal;
    }
    //=====================================================================================================================
    checkFreeShipping(data) {
        if (data.method_id != "free_shipping") {
            return true;
        }
        if (data.settings.requires.value == "") {
            return true;
        }
        if (data.settings.requires.value == "coupon") {
            if (this.findFreeShippingCoupon())
                return true;
            else
                return false;
        }
        if (data.settings.requires.value == "both") {
            //console.log("total : " + this.shared.productsTotal() + " coupon min " + data.settings.min_amount.value);
            if (this.shared.productsTotal() >= data.settings.min_amount.value && this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "either") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value || this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "min_amount") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value) {
                return true;
            }
            else
                return false;
        }
    }
    //=====================================================================================================================
    findFreeShippingCoupon() {
        let found = false;
        if (this.shared.couponArray.length == 0)
            return false;
        for (let value of this.shared.couponArray) {
            if (value.free_shipping == true)
                found = true;
        }
        if (found == true)
            return true;
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
    //=================================================================================================================================
    getProducts() {
        var data = [];
        for (let v of this.shared.cartProducts) {
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    }
    //=================================================================================================================================
    //Object.assign(c, data
    getCoupons() {
        var data = [];
        for (let v of this.shared.couponArray) {
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    //=================================================================================================================================
    getShippingLines() {
        var data = [];
        for (let v of this.shared.shipping_lines) {
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    //=================================================================================================================================
    updateUser() {
        var data = {
            billing: this.shared.billing,
            shipping: this.shared.shipping
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then((data) => {
            let dat = data;
            this.shared.customerData.billing = dat.billing;
            this.shared.customerData.shipping = dat.shipping;
            this.storage.set('customerData', this.shared.customerData);
        });
    }
    //=================================================================================================================================
    ionViewDidEnter() {
        this.resetPage = false;
        setTimeout(() => {
            this.resetPage = true;
        }, 100);
        this.shared.shipping_lines = [];
    }
    ngOnInit() {
    }
};
ShippingMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
ShippingMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping-method',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping-method.page.scss */ "./src/app/shipping-method/shipping-method.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], ShippingMethodPage);



/***/ })

}]);
//# sourceMappingURL=shipping-method-shipping-method-module-es2015.js.map