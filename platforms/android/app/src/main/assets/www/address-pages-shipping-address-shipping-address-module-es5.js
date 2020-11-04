function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-shipping-address-shipping-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddressPagesShippingAddressShippingAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{'Shipping Address'| translate }} </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"getLocationAddress()\">\n                <ion-icon name=\"locate\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form #loginForm=\"ngForm\">\n        <ion-item>\n            <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shared.shipping.first_name\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n            <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shared.shipping.last_name\"></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\" floating \">{{'Compnay'|translate}}</ion-label>\n            <ion-input type=\"text \" name=\"company \" [(ngModel)]=\"shared.shipping.company \"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating \">{{'Address'|translate}} 1</ion-label>\n            <ion-input type=\"text \" name=\"address \" [(ngModel)]=\"shared.shipping.address_1 \" required></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none;\">\n            <ion-label position=\"floating \">{{'Land Mark'|translate}} 2</ion-label>\n            <ion-input type=\"text \" name=\"address2 \" [(ngModel)]=\"shared.shipping.address_2 \"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating \">{{'Country'|translate}}</ion-label>\n            <ion-input type=\"text \" name=\"shipping_country\" readonly [(ngModel)]=\" shared.shippingCountryName\"></ion-input>\n        </ion-item>\n\n        <ion-item style=\"display:none; \">\n            <ion-label position=\"floating \">{{'State'|translate}}</ion-label>\n            <ion-input type=\"text \" required name=\"shipping_zone \" tappable (click)=\"selectZonePage() \" readonly [(ngModel)]=\"shared.shippingStateName \"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating \">{{'Land Mark'|translate}}</ion-label>\n            <ion-input type=\"text \" name=\"shipping_city \" [(ngModel)]=\"shared.shipping.city \" required></ion-input>\n        </ion-item>\n        <ion-item style=\"display:none; \">\n            <ion-label position=\"floating \">{{'Post code'|translate}}</ion-label>\n            <ion-input type=\"text \" name=\"shipping_postcode \" [(ngModel)]=\"shared.shipping.postcode \"></ion-input>\n        </ion-item>\n    </form>\n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full \" color=\"secondary \" (click)=\"submit() \">{{'Next'|translate}}\n    </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/address-pages/shipping-address/shipping-address.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/address-pages/shipping-address/shipping-address.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ShippingAddressPageModule */

  /***/
  function srcAppAddressPagesShippingAddressShippingAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingAddressPageModule", function () {
      return ShippingAddressPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipping-address.page */
    "./src/app/address-pages/shipping-address/shipping-address.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); // For Translation Language


    var routes = [{
      path: '',
      component: _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]
    }];

    var ShippingAddressPageModule = function ShippingAddressPageModule() {
      _classCallCheck(this, ShippingAddressPageModule);
    };

    ShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]]
    })], ShippingAddressPageModule);
    /***/
  },

  /***/
  "./src/app/address-pages/shipping-address/shipping-address.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/address-pages/shipping-address/shipping-address.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddressPagesShippingAddressShippingAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: var(--ion-background-color);\n}\nion-content form ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2FkZHJlc3MtcGFnZXMvc2hpcHBpbmctYWRkcmVzcy9zaGlwcGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkcmVzcy1wYWdlcy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQUo7QURHSTtFQUNFLHlDQUFBO0FDRE47QURFTTtFQUNFLDJDQUFBO0FDQVI7QURPRTtFQUNFLGtCQUFBO0FDSko7QURNRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MtcGFnZXMvc2hpcHBpbmctYWRkcmVzcy9zaGlwcGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG59XG5cbmlvbi1mb290ZXIgLnRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/address-pages/shipping-address/shipping-address.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/address-pages/shipping-address/shipping-address.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ShippingAddressPage */

  /***/
  function srcAppAddressPagesShippingAddressShippingAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingAddressPage", function () {
      return ShippingAddressPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/user-address/user-address.service */
    "./src/providers/user-address/user-address.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modals/select-country/select-country.page */
    "./src/app/modals/select-country/select-country.page.ts");
    /* harmony import */


    var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/select-zones/select-zones.page */
    "./src/app/modals/select-zones/select-zones.page.ts");

    var ShippingAddressPage = /*#__PURE__*/function () {
      function ShippingAddressPage(navCtrl, config, http, shared, modalCtrl, loading, userAddress, location, applicationRef) {
        _classCallCheck(this, ShippingAddressPage);

        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.userAddress = userAddress;
        this.location = location;
        this.applicationRef = applicationRef;

        if (this.shared.customerData.id != null) {
          this.shared.shipping = this.shared.customerData.shipping;
          this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
          this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
        }

        if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null) this.shared.shippingStateName = "";
      }

      _createClass(ShippingAddressPage, [{
        key: "disableButton",
        value: function disableButton() {
          if (this.shared.shipping.first_name == "" || this.shared.shipping.last_name == "" || //this.shared.shipping.city == "" ||
          // this.shared.shipping.postcode == "" ||
          //this.shared.shipping.state == "" ||
          // this.shared.shipping.country == "" ||
          this.shared.shipping.address_1 == "" || //this.shared.shipping.state == null ||
          this.shared.shipping.city == null // this.shared.shipping.postcode == null
          ) {
              return true;
            } else return false;
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.config.appNavigationTabs) this.navCtrl.navigateForward(this.config.currentRoute + "/shipping-method");else this.navCtrl.navigateForward("shipping-method");
          this.applicationRef.tick();
        } // submit() {
        //   if (this.config.appNavigationTabs)
        //     this.navCtrl.navigateForward(this.config.currentRoute + "/billing-address");
        //   else
        //     this.navCtrl.navigateForward("/billing-address");
        // }

      }, {
        key: "selectCountryPage",
        value: function selectCountryPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__["SelectCountryPage"],
                      componentProps: {
                        page: "shipping"
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectZonePage",
        value: function selectZonePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_10__["SelectZonesPage"],
                      componentProps: {
                        page: "shipping"
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getLocationAddress",
        value: function getLocationAddress() {
          var _this = this;

          this.loading.show();
          this.userAddress.getAddress().then(function (value) {
            _this.shared.shipping.country = value.countryCode;
            _this.shared.shipping.city = value.locality;
            _this.shared.shipping.postcode = value.postalCode;
            _this.shared.shipping.state = _this.location.getStateCode(value.countryCode, value.administrativeArea);
            _this.shared.shippingStateName = value.administrativeArea;
            _this.shared.shippingCountryName = value.countryName;
            _this.shared.shipping.address_1 = value.subLocality;

            _this.loading.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shared.shippingCountryName = "Uganda";
        }
      }]);

      return ShippingAddressPage;
    }();

    ShippingAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__["UserAddressService"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    ShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-shipping-address",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipping-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipping-address.page.scss */
      "./src/app/address-pages/shipping-address/shipping-address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__["UserAddressService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], ShippingAddressPage);
    /***/
  },

  /***/
  "./src/providers/user-address/user-address.service.ts":
  /*!************************************************************!*\
    !*** ./src/providers/user-address/user-address.service.ts ***!
    \************************************************************/

  /*! exports provided: UserAddressService */

  /***/
  function srcProvidersUserAddressUserAddressServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddressService", function () {
      return UserAddressService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    var UserAddressService = /*#__PURE__*/function () {
      function UserAddressService(config, geolocation, nativeGeocoder) {
        _classCallCheck(this, UserAddressService);

        this.config = config;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        console.log('Hello UserAddressProvider Provider');
      }

      _createClass(UserAddressService, [{
        key: "getCordinates",
        value: function getCordinates() {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.geolocation.getCurrentPosition().then(function (resp) {
              // resp.coords.latitude
              // resp.coords.longitude
              console.log(resp);
              resolve({
                "lat": resp.coords.latitude,
                "long": resp.coords.longitude
              });
            })["catch"](function (error) {
              console.log('Error getting location', error);
              resolve("error");
            });
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var options = {
              useLocale: true,
              maxResults: 5
            };

            _this3.getCordinates().then(function (value) {
              _this3.nativeGeocoder.reverseGeocode(value.lat, value["long"], options).then(function (result) {
                resolve(result[0]);
                console.log(result[0]);
              })["catch"](function (error) {
                console.log(error);
                resolve("error");
              });
            });
          });
        }
      }]);

      return UserAddressService;
    }();

    UserAddressService.ctorParameters = function () {
      return [{
        type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]
      }];
    };

    UserAddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]])], UserAddressService);
    /***/
  }
}]);
//# sourceMappingURL=address-pages-shipping-address-shipping-address-module-es5.js.map