function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriePagesCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      {{name|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\"\n        class=\"animate-item\" size=\"6\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-avatar>\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n            <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name|translate}}</h6>\n            <p>{{c.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n  <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n    {{ 'View All' | translate }}\n    <ion-icon name=\"caret-forward\"></ion-icon>\n  </ion-button>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories/categories.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/categorie-pages/categories/categories.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppCategoriePagesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
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


    var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/categorie-pages/categories/categories.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }];

    var CategoriesPageModule = function CategoriesPageModule() {
      _classCallCheck(this, CategoriesPageModule);
    };

    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories/categories.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/categorie-pages/categories/categories.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriePagesCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-row {\n  padding-left: 1px;\n  padding-right: 1px;\n  box-shadow: 0 0 0 2px lightgrey;\n}\nion-content ion-row ion-col ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: 0.1px 0.1px 0 0 #bbb;\n}\nion-content ion-row ion-col ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\nion-content ion-row ion-col ion-card h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: var(--heading-font-size);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ion-text-color);\n}\nion-content ion-row ion-col ion-card p {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--sub-heading-font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWUtcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0FKO0FERU07RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDQVI7QURFUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FWO0FERVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQVY7QURFUTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNBViIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tcm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGxpZ2h0Z3JleTtcbiAgICBpb24tY29sIHtcbiAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAjZWVlO1xuICAgICAgICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwIDAgI2JiYjtcblxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggbGlnaHRncmV5O1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAjZWVlO1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwIDAgI2JiYjtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBwIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories/categories.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/categorie-pages/categories/categories.page.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppCategoriePagesCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var CategoriesPage = /*#__PURE__*/function () {
      function CategoriesPage(shared, config, router, activatedRoute) {
        _classCallCheck(this, CategoriesPage);

        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
      }

      _createClass(CategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.parent = this.activatedRoute.snapshot.paramMap.get('parent');
          this.name = this.activatedRoute.snapshot.paramMap.get('name');
          if (this.parent == undefined) this.parent = 0;
          if (this.name == undefined) this.name = 0;
          if (this.name == 0) this.name = "Categories";
        }
      }, {
        key: "openProducts",
        value: function openProducts(id, name) {
          var count = 0;

          var _iterator = _createForOfIteratorHelper(this.shared.allCategories),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var val = _step.value;

              if (val.parent == id) {
                count++;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (count == 0) {
            this.router.navigateByUrl(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
          } else {
            this.router.navigateByUrl(this.config.currentRoute + "/categories/" + id + "/" + name);
          }
        }
      }, {
        key: "openParentProducts",
        value: function openParentProducts() {
          this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/newest");
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/categorie-pages/categories/categories.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], CategoriesPage);
    /***/
  }
}]);
//# sourceMappingURL=categorie-pages-categories-categories-module-es5.js.map