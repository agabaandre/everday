function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-title> {{'Shop'| translate }} </ion-title>\n\n    </ion-toolbar>\n\n    <ion-toolbar *ngIf=\"!config.appNavigationTabs\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{'Shop'| translate }} </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-toolbar class=\"segmentToolbar\" *ngIf=\"!config.appNavigationTabs\">\n        <ion-slides [options]=\"sliderConfig\" [class.disable]=\"products[0]==1\">\n            <ion-slide [class.selected]=\"selectedTab==''\" *ngIf=\"shared.allCategories!=null\" (click)=\"changeTab('')\">\n                {{'All'|translate}}</ion-slide>\n            <ion-slide [class.selected]=\"selectedTab==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n                {{c.name}}\n            </ion-slide>\n        </ion-slides>\n    </ion-toolbar>\n\n\n    <ion-toolbar class=\"segmentToolbar\" *ngIf=\"config.appNavigationTabs\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-slides [options]=\"sliderConfig\" [class.disable]=\"products[0]==1\">\n            <ion-slide [class.selected]=\"selectedTab==''\" *ngIf=\"shared.allCategories!=null\" (click)=\"changeTab('')\">\n                {{'All'|translate}}</ion-slide>\n            <ion-slide [class.selected]=\"selectedTab==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n                {{c.name}}\n            </ion-slide>\n        </ion-slides>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" id=\"productContent\">\n    <ion-grid *ngIf=\"productView=='grid'\" class=\"ion-no-padding\">\n        <ion-row class=\"ion-no-padding\">\n            <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n                <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-list class=\"list-view\" *ngIf=\"productView=='list'\">\n        <span *ngFor=\"let p of products\">\n      <app-product [data]=\"p\" [type]=\"'list'\"></app-product>\n    </span>\n    </ion-list>\n    <ion-col *ngIf=\"products.length==0 && loadingServerData\" size=\"12\" class=\"animated fadeIn\">\n        <h6 class=\"ion-text-center\">{{'No Products Found!'|translate}}</h6>\n    </ion-col>\n\n\n    <!-- infinite scroll -->\n\n    <ion-infinite-scroll threshold=\"10px\" #infinite (ionInfinite)=\"getFilterdProducts('from html')\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"Loading more Products...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button (click)=\"scrollToTop()\">\n        <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-footer>\n    <ion-toolbar color=\"light\">\n        <ion-item (click)=\"openSortBy()\" no-lines>\n            <ion-label>\n                <p>{{\"Sort Products\"|translate}}</p>\n                <h3 color=\"secondary\">\n                    {{sortOrder| translate}}\n                    <ion-icon name=\"arrow-up\"></ion-icon>\n                </h3>\n            </ion-label>\n        </ion-item>\n\n        <ion-buttons slot=\"end\" color=\"light\">\n            <ion-button (click)=\"changeLayout()\">\n                <ion-icon name=\"ios-list\" [name]=\"productView=='grid'? 'list' : 'apps'\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"resetFilters()\" *ngIf=\"applyFilter\">\n                <ion-icon name=\"refresh\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"toggleMenu()\">\n                <ion-icon name=\"funnel\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n\n<ion-menu side=\"end\" menuId=\"menu2\" contentId=\"productContent\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-button slot=\"icon-only\" (click)=\"toggleMenu()\">\n                    <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <ion-title>{{\"Filters\"|translate}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"side-menu ion-no-padding\">\n        <ion-card *ngIf=\"showHidePriceRange()\">\n            <ion-card-header>\n                <ion-card-title>{{'by'| translate}}&nbsp;{{'Price'| translate}}</ion-card-title>\n            </ion-card-header>\n            <ion-item>\n                <ion-range dualKnobs=\"true\" pin=\"true\" (ionBlur)=\"applyFilters()\" [(ngModel)]=\"price\" [min]=\"minAmount\" [max]=\"maxAmount\">\n                    <ion-label slot=\"start\">{{price.lower}}</ion-label>\n                    <ion-label slot=\"end\">{{price.upper}}</ion-label>\n                </ion-range>\n            </ion-item>\n        </ion-card>\n        <ion-card *ngIf=\"on_sale=='True' || featured=='True'\">\n            <ion-card-header>\n                <ion-card-title>{{'by'| translate}}&nbsp;{{'Sale'| translate}}/{{'Featured'| translate}}\n                </ion-card-title>\n            </ion-card-header>\n            <ion-item *ngIf=\"on_sale=='True'\">\n                <ion-label>{{'Sale'| translate}}</ion-label>\n                <ion-checkbox [(ngModel)]=\"filterOnSale\" (click)=\"fillFilterArray($event,'sale')\"></ion-checkbox>\n            </ion-item>\n            <ion-item *ngIf=\"featured=='True'\">\n                <ion-label>{{'Featured'| translate}}</ion-label>\n                <ion-checkbox [(ngModel)]=\"filterFeatured\" (click)=\"fillFilterArray($event,'featured')\"></ion-checkbox>\n            </ion-item>\n        </ion-card>\n\n        <!-- <h3>{{'Filter by attributes'| translate}}</h3> -->\n        <ion-card *ngFor=\"let a of attributes\">\n            <ion-card-header>\n                <ion-card-title>{{'by'| translate}}&nbsp;{{a.attribute_name}}</ion-card-title>\n            </ion-card-header>\n            <ion-item *ngFor=\"let v of a.attribute_terms\">\n                <ion-label>{{v.name}}</ion-label>\n                <ion-checkbox [(ngModel)]=\"v.value\" [checked]=\"checkAttributeSelected(a,v)\" (click)=\"selectAttribute(a,v)\">\n                </ion-checkbox>\n            </ion-item>\n        </ion-card>\n\n\n    </ion-content>\n</ion-menu>";
    /***/
  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsPageModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
      return ProductsPageModule;
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


    var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/products/products.page.ts");
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
      component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }];

    var ProductsPageModule = function ProductsPageModule() {
      _classCallCheck(this, ProductsPageModule);
    };

    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })], ProductsPageModule);
    /***/
  },

  /***/
  "./src/app/products/products.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/products/products.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  min-height: inherit;\n}\nion-toolbar ion-slides {\n  background-color: var(--ion-background-color);\n}\nion-toolbar ion-slides ion-slide {\n  height: 56px;\n  width: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 14px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: transparent;\n  color: var(--ion-text-color);\n}\nion-toolbar ion-slides .selected {\n  border-bottom-color: var(--ion-primary-color);\n  background-color: var(accent-color);\n}\nion-toolbar .disable {\n  pointer-events: none;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\nion-content h5 {\n  margin: 0px 10px;\n  text-transform: uppercase;\n}\nion-content h4 {\n  padding-left: 10px;\n}\nion-content form ion-item {\n  --background: #fafafa;\n}\nion-content ion-button {\n  width: 100%;\n  margin: 0;\n  border: none;\n}\nion-content .capital {\n  text-transform: capitalize;\n}\nion-footer ion-toolbar ion-item {\n  margin: 0;\n}\nion-footer ion-toolbar ion-item .item-native {\n  padding-left: 10px;\n}\nion-footer ion-toolbar ion-item ion-label {\n  margin-top: 7px;\n}\nion-footer ion-toolbar ion-item ion-label p {\n  font-size: 11px;\n}\nion-footer ion-toolbar ion-item ion-label h3 {\n  text-transform: uppercase;\n  color: var(--ion-color-secondary);\n}\nion-footer ion-toolbar ion-item ion-label ion-icon {\n  vertical-align: top;\n}\nion-menu ion-range {\n  padding-top: 10px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\nion-menu ion-card ion-card-header {\n  padding-bottom: 0px;\n  text-transform: capitalize;\n}\nion-menu ion-card ion-card-title {\n  color: var(--ion-text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBREFFO0VBQ0UsNkNBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0FDR047QURESTtFQUNFLDZDQUFBO0VBQ0EsbUNBQUE7QUNHTjtBREFFO0VBQ0Usb0JBQUE7QUNFSjtBRElJO0VBQ0Usa0JBQUE7QUNETjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtBQ0pKO0FEUUk7RUFDRSxxQkFBQTtBQ05OO0FEU0U7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNQSjtBRFVFO0VBQ0UsMEJBQUE7QUNSSjtBRGFJO0VBSUUsU0FBQTtBQ2JOO0FEVU07RUFDRSxrQkFBQTtBQ1JSO0FEV007RUFDRSxlQUFBO0FDVFI7QURVUTtFQUNFLGVBQUE7QUNSVjtBRFVRO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQ1JWO0FEVVE7RUFDRSxtQkFBQTtBQ1JWO0FEZUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVJO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNkTiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgaW9uLXNsaWRlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICB9XG4gICAgLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWlvbi1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihhY2NlbnQtY29sb3IpO1xuICAgIH1cbiAgfVxuICAuZGlzYWJsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgaDUge1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIGg0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgfVxuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuY2FwaXRhbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbmlvbi1mb290ZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tbWVudSB7XG4gIGlvbi1yYW5nZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgfVxuICB9XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG59XG5pb24tdG9vbGJhciBpb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuaW9uLXRvb2xiYXIgaW9uLXNsaWRlcyBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5pb24tdG9vbGJhciBpb24tc2xpZGVzIC5zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWlvbi1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGFjY2VudC1jb2xvcik7XG59XG5pb24tdG9vbGJhciAuZGlzYWJsZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaDUge1xuICBtYXJnaW46IDBweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLWNvbnRlbnQgaDQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5jYXBpdGFsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWl0ZW0ge1xuICBtYXJnaW46IDA7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWl0ZW0gaW9uLWxhYmVsIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24taXRlbSBpb24tbGFiZWwgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pb24tbWVudSBpb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbmlvbi1tZW51IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLW1lbnUgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/products.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/products/products.page.ts ***!
    \*******************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var ProductsPage = /*#__PURE__*/function () {
      function ProductsPage(navCtrl, activatedRoute, config, shared, loading, http, appEventsService, actionSheet, menuCtrl, applicationRef) {
        _classCallCheck(this, ProductsPage);

        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.http = http;
        this.appEventsService = appEventsService;
        this.actionSheet = actionSheet;
        this.menuCtrl = menuCtrl;
        this.applicationRef = applicationRef;
        this.queryAttributes = "";
        this.attributes = [];
        this.tempAttributes = [];
        this.selectedAttributes = [];
        this.sliderConfig = {
          slidesPerView: "auto"
        };
        this.scrollTopButton = false; //@ViewChild(IonRange) priceRange: IonRange;

        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selectedTab = '';
        this.categoryId = '';
        this.categoryName = '';
        this.sortOrder = 'Newest';
        this.sortArray = ['Newest', 'A - Z', 'Z - A']; //, 'A - Z Date', 'Z - A Date'
        //'Latest', 'On Sale', 'Featured'

        this.page = 1;
        this.applyFilter = false;
        this.filters = [];
        this.selectedFilters = [];
        this.maxAmount = this.config.filterMaxPrice;
        this.minAmount = 0;
        this.price = {
          lower: 0,
          upper: this.maxAmount
        };
        this.side = "right";
        this.productView = 'grid';
        this.filterOnSale = false;
        this.filterFeatured = false;
        this.loadingServerData = true;
        this.type = "";
        this.listOfFilteredIdsFromCustom = [];
        if (shared.dir == "rtl") this.side = "left";
        if (this.activatedRoute.snapshot.paramMap.get('id') != undefined) this.selectedTab = this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.activatedRoute.snapshot.paramMap.get('name') != undefined) this.categoryName = this.activatedRoute.snapshot.paramMap.get('name');
        if (this.activatedRoute.snapshot.paramMap.get('type') != undefined) this.type = this.activatedRoute.snapshot.paramMap.get('type');

        if (parseInt(this.categoryId) == 0) {
          this.selectedTab = '';
        }

        this.applicationRef.tick();
        this.getFilterdProducts("called from constructor");
      }

      _createClass(ProductsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.enableDisableInfiniteScroll(false);
          this.price.upper = this.maxAmount = this.config.filterMaxPrice;

          try {
            var ind = 0;
            this.shared.allCategories.forEach(function (value, index) {
              if (_this.selectedTab == value.id) {
                ind = index; //console.log("index to go " + ind);
              }
            });
            this.slides.slideTo(ind, 700, true);
          } catch (error) {}
        }
      }, {
        key: "resetProducts",
        value: function resetProducts() {
          var _this2 = this;

          this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          setTimeout(function () {
            _this2.scrollToTop();
          }, 500);
        }
      }, {
        key: "enableDisableInfiniteScroll",
        value: function enableDisableInfiniteScroll(val) {
          this.infinite.disabled = !val;
        }
      }, {
        key: "getFilterdProducts",
        value: function getFilterdProducts(value) {
          var _this3 = this;

          //console.log(value);
          if (this.page == 1) {
            this.resetProducts(); //this.loading.show();
          }

          this.loadingServerData = false;
          var query = '&page=' + this.page;
          if (this.sortOrder == "Newest") query = query + "&order=desc&order_by=date";else if (this.sortOrder == "A - Z") query = query + "&order=asc&order_by=title";else if (this.sortOrder == "Z - A") query = query + "&order=desc&order_by=title";

          if (this.type == "featured" || this.filterFeatured) {
            query = query + "&featured=true";
            this.filterFeatured = true;
          }

          if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) {
            query = query + "&on_sale=true";
            this.filterOnSale = true;
          }

          if (this.price.lower != this.minAmount && this.applyFilter == true) query = query + "&min_price=" + this.price.lower;
          if (this.price.upper != this.maxAmount && this.applyFilter == true) query = query + "&max_price=" + this.price.upper;
          if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;
          query = query + this.queryAttributes;
          console.log("custom Id = " + query);
          this.getAllAttributes();
          this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).then(function (data) {
            if (_this3.page == 1) _this3.enableDisableInfiniteScroll(true);
            if (data.data) _this3.listOfFilteredIdsFromCustom = data.data;

            _this3.applicationRef.tick();

            _this3.getFilterdProductsFromWoo();
          });
        }
      }, {
        key: "getFilterdProductsFromWoo",
        value: function getFilterdProductsFromWoo() {
          var _this4 = this;

          if (this.listOfFilteredIdsFromCustom.length == 0) {
            this.enableDisableInfiniteScroll(false);
            this.loadingServerData = true;
            return 0;
          }

          var q = 'products?include=' + this.listOfFilteredIdsFromCustom + "&status=publish"; //console.log(this.listOfFilteredIdsFromCustom);

          if (this.sortOrder == "Newest") q = q + "&order=desc&order_by=date";else if (this.sortOrder == "A - Z") q = q + "&order=asc&order_by=title";else if (this.sortOrder == "Z - A") q = q + "&order=desc&order_by=title"; // if (this.type == "featured" || this.filterFeatured) { q = q + "&featured=true"; this.filterFeatured = true; }
          // if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { q = q + "&on_sale=true"; this.filterOnSale = true; }

          console.log(q);
          this.config.getWoo(q + "&" + this.config.productsArguments).then(function (data) {
            var dat = data;

            if (_this4.page == 1) {
              _this4.emptyProductList();

              _this4.scrollToTop();
            }

            if (dat.length != 0) {
              _this4.page++;
              if (_this4.page == 1) _this4.enableDisableInfiniteScroll(true);

              var _iterator = _createForOfIteratorHelper(dat),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  _this4.products.push(value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (dat.length == 0 || dat.length < 10) {
              _this4.enableDisableInfiniteScroll(false);
            }

            _this4.infinite.complete();

            _this4.applicationRef.tick();

            _this4.loadingServerData = true;
          });
        }
      }, {
        key: "emptyProductList",
        value: function emptyProductList() {
          this.products = [];
        } //============================================================================================  
        // filling filter array for keyword search 

      }, {
        key: "fillFilterArray",
        value: function fillFilterArray(value, option) {
          this.applyFilters();
          console.log("filter aray called");
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.applyFilter = false;
          this.filterFeatured = false;
          this.type = "latest";
          this.sortOrder = "Newest";
          this.filterOnSale = false;
          this.page = 1;
          this.selectedAttributes = [];
          this.queryAttributes = "";
          this.defaultPrice();
          this.getFilterdProducts("called from reset");
        } //changing tab

      }, {
        key: "changeTab",
        value: function changeTab(c) {
          if (c == '') this.selectedTab = c;else this.selectedTab = c.id;
          this.reset();
          this.applicationRef.tick();
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          //this.type = "latest";
          this.applyFilter = true; //this.enableDisableInfiniteScroll(true)

          this.page = 1; //this.getProducts(null);

          this.getFilterdProducts("called from filters");
          this.applicationRef.tick();
          this.closeMenu();
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menuCtrl.close("menu2");
        }
      }, {
        key: "getSortProducts",
        value: function getSortProducts(value) {
          console.log(value); // if (value == this.sortOrder) return 0;
          // else {

          this.sortOrder = value; //this.enableDisableInfiniteScroll(true)

          this.applyFilter = true;
          this.page = 1;
          this.type = "";
          this.getFilterdProducts("called from  sorted"); // }
        }
      }, {
        key: "openSortBy",
        value: function openSortBy() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var buttonArray;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    buttonArray = [];
                    this.shared.translateArray(this.sortArray).then(function (res) {
                      var _loop = function _loop(key) {
                        buttonArray.push({
                          text: res[key],
                          handler: function handler() {
                            _this5.getSortProducts(key);
                          }
                        });
                      };

                      // console.log(res);
                      for (var key in res) {
                        _loop(key);
                      }

                      _this5.shared.translateString('Cancel').then(function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var actionSheet;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  buttonArray.push({
                                    text: res,
                                    role: 'cancel',
                                    handler: function handler() {//console.log('Cancel clicked');
                                    }
                                  });
                                  _context.next = 3;
                                  return this.actionSheet.create({
                                    buttons: buttonArray
                                  });

                                case 3:
                                  actionSheet = _context.sent;
                                  _context.next = 6;
                                  return actionSheet.present();

                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeLayout",
        value: function changeLayout() {
          if (this.productView == 'list') this.productView = "grid";else this.productView = "list";
          this.scrollToTop();
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          try {
            if (this.content) {
              this.content.scrollToTop(700);
              this.scrollTopButton = false;
            }
          } catch (error) {}
        }
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (e.scrollTop >= 800) this.scrollTopButton = true;
          if (e.scrollTop < 800) this.scrollTopButton = false;
        }
      }, {
        key: "removeString",
        value: function removeString(s) {
          //console.log(s.replace('pa_', ''));
          return s.replace('pa_', '');
        } //=======================================================================================

      }, {
        key: "getAllAttributes",
        value: function getAllAttributes() {
          var _this6 = this;

          // let cat = "&cat_id=" + this.selectedTab;
          // if (this.selectedTab == '') cat = '';
          var query = '';
          if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;
          query = query + this.queryAttributes;
          query = query + "&min_price=" + this.price.lower + "&max_price=" + this.price.upper;
          this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_get_attributes/?insecure=cool' + query).then(function (data) {
            if (data.attributes) {
              _this6.attributes = data.attributes;
            } else {
              _this6.attributes = [];
            }

            if (data.min_price != data.max_price) {
              if (_this6.minAmount != data.min_price) _this6.minAmount = data.min_price;
              if (_this6.maxAmount != data.max_price) _this6.maxAmount = data.max_price;
              if (_this6.minAmount != _this6.price.lower) _this6.price.lower = _this6.minAmount;
              if (_this6.maxAmount != _this6.price.upper) _this6.price.upper = _this6.maxAmount;
            }

            if (_this6.applyFilter == false) {
              _this6.price = {
                lower: _this6.minAmount,
                upper: _this6.maxAmount
              };
            }

            _this6.on_sale = data.on_sale;
            _this6.featured = data.featured;
            if (_this6.featured == null) _this6.featured = "false";

            _this6.applicationRef.tick();
          });
        }
      }, {
        key: "showHidePriceRange",
        value: function showHidePriceRange() {
          if (this.minAmount == this.maxAmount) {
            return false;
          } else if (this.price.lower != null || this.price.upper != null) {
            return true;
          }
        }
      }, {
        key: "defaultPrice",
        value: function defaultPrice() {
          this.price = {
            lower: 0,
            upper: this.config.filterMaxPrice
          };
        } //=======================================================================================

      }, {
        key: "selectAttribute",
        value: function selectAttribute(a, v) {
          var _this7 = this;

          var found = false;
          this.selectedAttributes.forEach(function (x, index) {
            if (x.slug == a.attribute_slug) {
              found = true;

              if (v.value == false) {
                x.list.forEach(function (y, ind) {
                  if (y == v.name) {
                    x.list.splice(ind, 1);
                  }
                });
              } else {
                var valueFound = false;
                x.list.forEach(function (y, ind) {
                  if (y == v.name) {
                    valueFound = true;
                    x.list.splice(ind, 1);
                  }
                });

                if (valueFound == false) {
                  x.list.push(v.name);
                }
              }
            }

            if (x.list.length == 0) {
              _this7.selectedAttributes.splice(index, 1);
            }
          });
          if (found == false) this.selectedAttributes.push({
            slug: a.attribute_slug,
            list: [v.name]
          });
          console.log(this.selectedAttributes);
          this.applicationRef.tick();
          this.queryAttributes = "";

          var _iterator2 = _createForOfIteratorHelper(this.selectedAttributes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var x = _step2.value;
              this.queryAttributes = this.queryAttributes + "&" + x.slug + "=";

              var _iterator3 = _createForOfIteratorHelper(x.list),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var y = _step3.value;
                  this.queryAttributes = this.queryAttributes + y + ",";
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.queryAttributes;
          console.log(this.queryAttributes);
          this.applyFilters();
          console.log("select attribute called");
        } //=======================================================================================

      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCtrl.toggle("menu2");
        } //=======================================================================================

      }, {
        key: "checkAttributeSelected",
        value: function checkAttributeSelected(a, v) {
          var v1 = this.queryAttributes.indexOf(a.attribute_slug);
          var v2 = this.queryAttributes.indexOf(v.name);

          if (v1 != -1 && v2 != -1) {
            v.value = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsPage;
    }();

    ProductsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], ProductsPage.prototype, "infinite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], ProductsPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], ProductsPage.prototype, "slides", void 0);
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/products/products.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], ProductsPage); // data.attributes.forEach(element => {
    //   let variable = { attribute_name: element.attribute_name, attribute_slug: element.attribute_slug };
    //   let terms = [];
    //   element.attribute_terms.forEach(v => {
    //     this.checkAttributeSelected(element, v);
    //     terms.push(Object.assign(v, { value: false }));
    //   });
    //   this.attributes.push(Object.assign(variable, { attribute_terms: terms }));
    // });

    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map