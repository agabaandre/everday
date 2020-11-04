function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you/thank-you.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you/thank-you.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThankYouThankYouPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Thank You'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-icon name=\"checkmark-circle\"></ion-icon>\n      <h3>{{'Thank You'| translate }}</h3>\n      <h4>{{'Thank you for shopping with us.'| translate }}</h4>\n      <ion-button expand=\"block\" color=\"secondary\" *ngIf=\"shared.customerData.id!=null\" (click)=\"openOrders()\">\n        {{'My Orders'| translate }}</ion-button>\n      <ion-button (click)=\"openHome()\" expand=\"block\" fill=\"clear\" color=\"secondary\">\n        {{'Continue Shopping'| translate }}</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/thank-you/thank-you.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/thank-you/thank-you.module.ts ***!
    \***********************************************/

  /*! exports provided: ThankYouPageModule */

  /***/
  function srcAppThankYouThankYouModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function () {
      return ThankYouPageModule;
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


    var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thank-you.page */
    "./src/app/thank-you/thank-you.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]
    }];

    var ThankYouPageModule = function ThankYouPageModule() {
      _classCallCheck(this, ThankYouPageModule);
    };

    ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
    })], ThankYouPageModule);
    /***/
  },

  /***/
  "./src/app/thank-you/thank-you.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/thank-you/thank-you.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppThankYouThankYouPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-card {\n  background-color: white;\n  text-align: center;\n}\nion-content ion-card ion-card-content ion-icon {\n  margin-top: 15px;\n  color: var(--ion-color-primary);\n  font-size: 80px;\n}\nion-content ion-card ion-card-content h3 {\n  font-size: 20px;\n  margin-top: 15px;\n}\nion-content ion-card ion-card-content h4 {\n  font-size: 12px;\n}\nion-content ion-card ion-card-content ion-button {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIiwic3JjL2FwcC90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVNO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNBUjtBREVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQVI7QURFTTtFQUNFLGVBQUE7QUNBUjtBREVNO0VBQ0UsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIH1cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiA4MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/thank-you/thank-you.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/thank-you/thank-you.page.ts ***!
    \*********************************************/

  /*! exports provided: ThankYouPage */

  /***/
  function srcAppThankYouThankYouPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouPage", function () {
      return ThankYouPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var ThankYouPage = /*#__PURE__*/function () {
      function ThankYouPage(navCtrl, shared, config, appEventsService) {
        _classCallCheck(this, ThankYouPage);

        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.appEventsService = appEventsService;
      }

      _createClass(ThankYouPage, [{
        key: "openHome",
        value: function openHome() {
          this.appEventsService.publish("openHomePage", "");
        }
      }, {
        key: "openOrders",
        value: function openOrders() {
          this.navCtrl.navigateRoot("/my-orders");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shared.orderComplete();
        }
      }]);

      return ThankYouPage;
    }();

    ThankYouPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]
      }];
    };

    ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thank-you',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thank-you.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you/thank-you.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thank-you.page.scss */
      "./src/app/thank-you/thank-you.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]])], ThankYouPage);
    /***/
  }
}]);
//# sourceMappingURL=thank-you-thank-you-module-es5.js.map