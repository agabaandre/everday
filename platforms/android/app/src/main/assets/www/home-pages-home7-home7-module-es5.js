function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home7-home7-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome7Home7PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title>\n            <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n    <app-banner></app-banner>\n    <!-- categories component -->\n    <app-categories [type]=\"'name&count'\"></app-categories>\n\n    <ion-segment [(ngModel)]=\"segments\">\n        <ion-segment-button value=\"topSeller\">{{ 'Newest' | translate }}</ion-segment-button>\n        <ion-segment-button value=\"deals\">{{ 'On Sale' | translate }} </ion-segment-button>\n        <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segments\">\n\n        <!-- first swipe slider -->\n        <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab1\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n        <!-- 2nd swipe slider -->\n        <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab2\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n        <!-- 3rd swipe slider -->\n        <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n            <ion-slide *ngFor=\"let p of shared.tab3\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n                    <ion-icon name=\"caret-forward\"></ion-icon>\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <!-- For Vendor List -->\n    <app-vendor-list></app-vendor-list>\n\n    <ion-row class=\"top-icon-header\">\n        <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n            {{'All Products' | translate }}\n        </ion-button>\n        <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n            <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n            {{ 'Shop More' | translate }}\n        </ion-button>\n    </ion-row>\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-no-padding\">\n            <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- infinite scroll -->\n    <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home7/home7.module.ts ***!
    \**************************************************/

  /*! exports provided: Home7PageModule */

  /***/
  function srcAppHomePagesHome7Home7ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home7PageModule", function () {
      return Home7PageModule;
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


    var _home7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home7.page */
    "./src/app/home-pages/home7/home7.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/components/share/share.module */
    "./src/components/share/share.module.ts");

    var routes = [{
      path: '',
      component: _home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]
    }];

    var Home7PageModule = function Home7PageModule() {
      _classCallCheck(this, Home7PageModule);
    };

    Home7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]]
    })], Home7PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home7/home7.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome7Home7PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment ion-segment-button {\n  font-size: 11.3px;\n  --color: var(--ion-color-primary);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content .row-segment {\n  margin-right: 10px;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\nion-content ion-card img {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\nion-content ion-fab {\n  position: fixed;\n}\nion-content ion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\nion-content .product-catgory-image {\n  box-shadow: 0px 4px 7px 5px rgba(107, 105, 105, 0.49);\n  margin: 0 auto;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .product-slider {\n  box-shadow: 0px 4px 5px 5px rgba(110, 110, 110, 0.49);\n}\nion-content .top-levels {\n  border-radius: 7px;\n}\nion-content .subcat {\n  min-height: 100px;\n  max-height: 270px;\n  margin: 10px;\n  border: 2px;\n}\nion-content .subcat img {\n  border-radius: 20px;\n  padding: 5px;\n  font-size: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTcvaG9tZTcucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU3L2hvbWU3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUNBUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ0ZaO0FET1k7RUFDSSxZQUFBO0FDTGhCO0FEU0k7RUFDSSxXQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURVUTtFQUNJLGtCQUFBO0FDUlo7QURZUTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRGFJO0VBQ0ksZUFBQTtBQ1hSO0FEWVE7RUFDSSxzQ0FBQTtBQ1ZaO0FEYUk7RUFDSSxxREFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGFJO0VBQ0kscURBQUE7QUNYUjtBRGFJO0VBQ0ksa0JBQUE7QUNYUjtBRGFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWFI7QURZUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTcvaG9tZTcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAvLyBpZiBkYXRhIGxvYWRcbiAgICBpb24tc2VnbWVudCB7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExLjNweDtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcC1wcm9kdWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5yb3ctc2VnbWVudCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LWNhdGdvcnktaW1hZ2Uge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDdweCA1cHggcmdiYSgxMDcsIDEwNSwgMTA1LCAwLjQ5KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbiAgICAucHJvZHVjdC1zbGlkZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCA1cHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjQ5KTtcbiAgICB9XG4gICAgLnRvcC1sZXZlbHMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgfVxuICAgIC5zdWJjYXQge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDExLjNweDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IGFwcC1wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAucm93LXNlZ21lbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW1nIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbmlvbi1jb250ZW50IGlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5wcm9kdWN0LWNhdGdvcnktaW1hZ2Uge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDdweCA1cHggcmdiYSgxMDcsIDEwNSwgMTA1LCAwLjQ5KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuaW9uLWNvbnRlbnQgLnByb2R1Y3Qtc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggNXB4IHJnYmEoMTEwLCAxMTAsIDExMCwgMC40OSk7XG59XG5pb24tY29udGVudCAudG9wLWxldmVscyB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbmlvbi1jb250ZW50IC5zdWJjYXQge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMjcwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAycHg7XG59XG5pb24tY29udGVudCAuc3ViY2F0IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiA5cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home7/home7.page.ts ***!
    \************************************************/

  /*! exports provided: Home7Page */

  /***/
  function srcAppHomePagesHome7Home7PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home7Page", function () {
      return Home7Page;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var Home7Page = /*#__PURE__*/function () {
      function Home7Page(nav, config, shared, appEventsService) {
        _classCallCheck(this, Home7Page);

        this.nav = nav;
        this.config = config;
        this.shared = shared;
        this.appEventsService = appEventsService;
        this.segments = "topSeller"; //first segment by default

        this.scrollTopButton = false; //for scroll down fab
        //for product slider after banner

        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.farmproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.biscuitproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.confectionaryproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.bakingproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.page = 1;
        this.myfarms = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      }

      _createClass(Home7Page, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        } // For FAB Scroll

      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
          }

          if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
          }
        } // For Scroll To Top Content

      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.content.scrollToTop(700);
          this.scrollTopButton = false;
        }
      }, {
        key: "openProducts",
        value: function openProducts(value) {
          this.nav.navigateForward(this.config.currentRoute + "/products/0/0/" + value);
        }
      }, {
        key: "openSubCategories",
        value: function openSubCategories(parent) {
          this.nav.navigateForward(this.config.currentRoute + "/products/" + parent + "/" + parent + "/newest"); // console.log(parent);
        } // async getProducts() {
        //   let data = {
        //     confectionaryproducts: 63,
        //     farmproducts: 62,
        //     biscuitproducts: 60,
        //     bakingproducts: 61,
        //     products: 0,
        //   };
        //   let dataValues = Object.values(data);
        //   let dataKeys = Object.keys(data);
        //   let farmProduceQueries = dataValues.map((value) => {
        //     let query = "products?category=" + value + "?" + "page=" + this.page;
        //     query = query + "&status=publish" + "&" + this.config.productsArguments;
        //     return query;
        //   });
        //   for (let index = 0; index < farmProduceQueries.length; index++) {
        //     const query = farmProduceQueries[index];
        //     let data: any = await this.config.getWoo(query);
        //     if (this.page == 1) {
        //       this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //       this.farmproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //       this.biscuitproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //       this.confectionaryproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //       this.bakingproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //     }
        //     this.infinite.complete();
        //     if (this.page == 1) {
        //       this.biscuitproducts = new Array();
        //       this.confectionaryproducts = new Array();
        //       this.farmproducts = new Array();
        //       this.bakingproducts = new Array();
        //       this.products = new Array();
        //     }
        //     if (data.length != 0) {
        //       this.page++;
        //       for (let value of data) {
        //         if (dataKeys[index] === "biscuitproducts") {
        //           // this.infinite.complete();
        //           this.biscuitproducts.push(value);
        //         } else if (dataKeys[index] === "farmproducts") {
        //           // this.infinite.complete();
        //           this.farmproducts.push(value);
        //         } else if (dataKeys[index] === "bakingproducts") {
        //           // this.infinite.complete();
        //           this.bakingproducts.push(value);
        //         } else if (dataKeys[index] === "confectionaryproducts") {
        //           // this.infinite.complete();
        //           this.confectionaryproducts.push(value);
        //         } else {
        //           this.infinite.complete();
        //           this.products.push(value);
        //         }
        //       }
        //     }
        //     if (data.length < 10) {
        //       this.infinite.disabled = true;
        //     }
        //   }
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this = this;

          var query = "products?" + "page=" + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;

            _this.infinite.complete();

            if (_this.page == 1) {
              _this.products = new Array();
            }

            if (dat.length != 0) {
              _this.page++;

              var _iterator = _createForOfIteratorHelper(dat),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  _this.products.push(value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (dat.length < 10) {
              _this.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "getFarm",
        value: function getFarm() {
          var _this2 = this;

          var query = "products?category=" + 62 + "?" + "page=" + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.farmproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;
            console.log("Farm", data);

            _this2.infinite.complete();

            if (_this2.page == 1) {
              _this2.farmproducts = new Array();
            }

            if (dat.length != 0) {
              _this2.page++;

              var _iterator2 = _createForOfIteratorHelper(dat),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var value = _step2.value;

                  _this2.farmproducts.push(value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (dat.length < 10) {
              _this2.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "getBiscuit",
        value: function getBiscuit() {
          var _this3 = this;

          var query = "products?category=" + 60 + "?" + "page=" + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.biscuitproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;
            console.log("Biscuit", data);

            _this3.infinite.complete();

            if (_this3.page == 1) {
              _this3.biscuitproducts = new Array();
            }

            if (dat.length != 0) {
              _this3.page++;

              var _iterator3 = _createForOfIteratorHelper(dat),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var value = _step3.value;

                  _this3.biscuitproducts.push(value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (dat.length < 10) {
              _this3.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "getConfec",
        value: function getConfec() {
          var _this4 = this;

          var query = "products?category=" + 63 + "?" + "page=" + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.confectionaryproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;
            console.log("Confec", data);

            _this4.infinite.complete();

            if (_this4.page == 1) {
              _this4.confectionaryproducts = new Array();
            }

            if (dat.length != 0) {
              _this4.page++;

              var _iterator4 = _createForOfIteratorHelper(dat),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var value = _step4.value;

                  _this4.confectionaryproducts.push(value);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            if (dat.length < 10) {
              _this4.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "getBaking",
        value: function getBaking() {
          var _this5 = this;

          var query = "products?category=" + 61 + "?" + "page=" + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.bakingproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;
            console.log("Baking", data);

            _this5.infinite.complete();

            if (_this5.page == 1) {
              _this5.bakingproducts = new Array();
            }

            if (dat.length != 0) {
              _this5.page++;

              var _iterator5 = _createForOfIteratorHelper(dat),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var value = _step5.value;

                  _this5.bakingproducts.push(value);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            if (dat.length < 10) {
              _this5.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "openCategoryPage",
        value: function openCategoryPage() {
          this.appEventsService.publish("openCategoryPage", "");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.config.setCardStyle("15");
        }
      }]);

      return Home7Page;
    }();

    Home7Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], Home7Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("recentSlider", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], Home7Page.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], Home7Page.prototype, "infinite", void 0);
    Home7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home7",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home7.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home7.page.scss */
      "./src/app/home-pages/home7/home7.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]])], Home7Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home7-home7-module-es5.js.map