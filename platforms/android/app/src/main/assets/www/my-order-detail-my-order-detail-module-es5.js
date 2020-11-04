function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-order-detail-my-order-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-order-detail/my-order-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-order-detail/my-order-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyOrderDetailMyOrderDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Order Detail'| translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <h4><b>{{'Shipping Address'|translate}}</b></h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+', '+order.shipping.city+', '+order.shipping.state+' '+order.shipping.postcode+',\n      '+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4><b>{{'Billing Address'|translate}}</b></h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.address_1+', '+order.billing.city+', '+order.billing.state+' '+order.billing.postcode+',\n      '+order.billing.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let s of order.shipping_lines\">\n    <ion-card-header>\n      <h4><b>{{'Shipping Method'|translate}}</b></h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{s.method_title}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4><b>{{'Shipping Total'|translate}}</b></h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{addCurrecny(order.shipping_total)}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"order-product\">\n    <ion-card-header>\n      {{'Products'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor=\"let product of order.line_items\">\n      <ion-row>\n        <ion-col>\n          <h3>{{product.name}}\n            <br>\n            <small>{{product.categories_name}}</small>\n          </h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-left\" size=\"6\">{{'Price' |translate}}&nbsp;:&nbsp;</ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">{{addCurrecny(product.price)}}</ion-col>\n      </ion-row>\n\n      <ion-row *ngFor=\"let att of product.meta_data\">\n        <ion-col size=\"6\">{{att.key}}&nbsp;:</ion-col>\n        <ion-col size=\"6\">{{att.value}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-left\" size=\"6\">{{'Quantity'|translate}}&nbsp;:&nbsp;</ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">{{product.quantity}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-left\" size=\"6\">\n          <strong>{{'Total' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          <strong>{{addCurrecny(product.total)}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{'Price Detail'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Shipping'|translate}} {{'Tax'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" col-6>\n          {{addCurrecny(order.shipping_tax) }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Shipping'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{addCurrecny(order.shipping_total)}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Tax'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{addCurrecny(order.discount_total)}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Total'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          <strong>{{addCurrecny(order.total)}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"order.coupon_lines!=0\">\n    <ion-card-header>\n      {{'Coupons Applied'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{'Coupon Code'|translate}}\n        </ion-col>\n        <ion-col col-6 class=\"ion-text-right\">\n          {{'Coupon Price'|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let c of order.coupon_lines\">\n        <ion-col col-6>\n          {{c.code}}\n        </ion-col>\n        <ion-col col-6 class=\"ion-text-right\">\n          {{addCurrecny(c.discount)}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"order.customer_note!=''\">\n    <ion-card-header>\n      {{'Order Notes'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.customer_note}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"getTrackingId()!=''\">\n    <ion-card-header>\n      {{'Track Order'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{getTrackingId()}}\n        </ion-col>\n        <ion-col col-6 class=\"ion-text-right\">\n          <ion-button color=\"secondary\" icon-end (click)=\"openTrackingPage()\">{{'Track'|translate}}\n            <ion-icon name=\"locate\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <h4><b>{{'Payment Method'|translate}}</b></h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.payment_method_title}}\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-item\n    *ngIf=\"order.status!='cancelled' && order.status!='completed' && order.status!='refunded' && order.status!='failed' && order.status!='processing'\">\n    <ion-button *ngIf=\"config.orderCancelButton\" color=\"danger\" expand=\"block\" (click)=\"cancelOrder()\">\n      {{'Cancel Order'|translate}}\n    </ion-button>\n  </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/my-order-detail/my-order-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/my-order-detail/my-order-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: MyOrderDetailPageModule */

  /***/
  function srcAppMyOrderDetailMyOrderDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrderDetailPageModule", function () {
      return MyOrderDetailPageModule;
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


    var _my_order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-order-detail.page */
    "./src/app/my-order-detail/my-order-detail.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _my_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderDetailPage"]
    }];

    var MyOrderDetailPageModule = function MyOrderDetailPageModule() {
      _classCallCheck(this, MyOrderDetailPageModule);
    };

    MyOrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_my_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderDetailPage"]]
    })], MyOrderDetailPageModule);
    /***/
  },

  /***/
  "./src/app/my-order-detail/my-order-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/my-order-detail/my-order-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyOrderDetailMyOrderDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-card ion-card-header {\n  font-size: 20px;\n  margin-bottom: 0;\n  margin-top: 0;\n  color: black;\n  background-color: lightgray;\n}\nion-content ion-card ion-card-header h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 18px;\n}\nion-content ion-card ion-card-content {\n  background-color: white;\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 10px !important;\n  color: black;\n}\nion-content ion-card ion-card-content .item {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL215LW9yZGVyLWRldGFpbC9teS1vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9teS1vcmRlci1kZXRhaWwvbXktb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNGWjtBREdZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RoQjtBRElRO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUNGWjtBRElZO0VBQ0ksNkJBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9teS1vcmRlci1kZXRhaWwvbXktb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuXG4gICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJpb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-order-detail/my-order-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-order-detail/my-order-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: MyOrderDetailPage */

  /***/
  function srcAppMyOrderDetailMyOrderDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrderDetailPage", function () {
      return MyOrderDetailPage;
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


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var MyOrderDetailPage = /*#__PURE__*/function () {
      function MyOrderDetailPage(navCtrl, config, http, shared, iab, loading, spinnerDialog) {
        _classCallCheck(this, MyOrderDetailPage);

        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.iab = iab;
        this.loading = loading;
        this.spinnerDialog = spinnerDialog;
        this.order = {};
        this.order = this.shared.myOrderDetialPageData; //console.log(this.order);
      }

      _createClass(MyOrderDetailPage, [{
        key: "getSingleProductDetail",
        value: function getSingleProductDetail(id) {
          var _this = this;

          this.loading.show();
          this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();

            var p = data;

            _this.shared.singleProductPageData.push(p);

            if (_this.config.appNavigationTabs) _this.navCtrl.navigateForward(_this.config.currentRoute + "/product-detail/" + p.id);else _this.navCtrl.navigateForward("/product-detail/" + p.id);
          }, function (err) {
            _this.loading.hide();

            _this.shared.showAlert("Item not Available!");

            console.log(err);
          });
          this.shared.addToRecent(id);
        }
      }, {
        key: "cancelOrder",
        value: function cancelOrder() {
          var _this2 = this;

          var orderCreateDate = new Date(this.order.date_created);
          var orderSeconds = orderCreateDate.getTime() / 1000;
          var timeknow = new Date();
          var currentTime = timeknow.getTime() / 1000;
          var timeToCancelOrder = this.config.cancelOrderTime * 3600;
          var timeDiff = currentTime - orderSeconds; //console.log(timeDiff + " " + timeToCancelOrder);

          console.log(timeToCancelOrder - timeDiff);
          var result = timeToCancelOrder - timeDiff;
          if (result < 0) this.shared.toast("Order Cancelation Time Expires!");else {
            this.loading.show();
            var dat = {
              status: 'cancelled'
            };
            this.config.putAsync("orders/" + this.order.id, dat).then(function (data) {
              _this2.loading.hide();

              _this2.navCtrl.pop();

              _this2.shared.toast("Order Cancelled");
            }, function (err) {
              _this2.loading.hide();

              _this2.shared.toast("Server Error");

              console.log(err);
            });
          }
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          this.order = this.shared.myOrderDetialPageData;
        }
      }, {
        key: "openTrackingPage",
        value: function openTrackingPage() {
          var _this3 = this;

          var options = {
            toolbarposition: "top",
            toolbarcolor: this.shared.headerHexColor,
            location: "yes",
            hideurlbar: "yes",
            hidenavigationbuttons: "yes",
            zoom: "no",
            usewkwebview: "yes",
            closebuttoncolor: this.shared.invertColor(this.shared.headerHexColor)
          };
          var id = this.getTrackingId();
          var b = this.iab.create(this.config.trackingUrl + "/" + id, '_blank', options);
          var orderPlaced = false;
          b.on('loadstart').subscribe(function (res) {
            _this3.spinnerDialog.show("", "", true, {
              overlayOpacity: 1.00
            });

            setTimeout(function () {
              _this3.spinnerDialog.hide();
            }, 3000);
          });
          b.on('loadstop').subscribe(function (res) {
            _this3.spinnerDialog.hide();

            console.log('loadstop');
          });
        }
      }, {
        key: "getTrackingId",
        value: function getTrackingId() {
          var id = "";

          var _iterator = _createForOfIteratorHelper(this.order.meta_data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;

              if (v.key == "_aftership_tracking_number") {
                id = v.value;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return id;
        }
      }, {
        key: "addCurrecny",
        value: function addCurrecny(v) {
          return this.order.currency + " " + v;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyOrderDetailPage;
    }();

    MyOrderDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"]
      }];
    };

    MyOrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-order-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-order-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-order-detail/my-order-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-order-detail.page.scss */
      "./src/app/my-order-detail/my-order-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"]])], MyOrderDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=my-order-detail-my-order-detail-module-es5.js.map