function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories3-categories3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories3/categories3.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories3/categories3.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriePagesCategories3Categories3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\"\n    class=\"animate-item\">\n    <ion-avatar slot=\"start\">\n      <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n      <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n    </ion-avatar>\n    <ion-label class=\"ion-padding\">\n      <ion-text>\n        <h2>{{c.name|translate}}</h2>\n        <p>{{c.count}} {{'Products'| translate }}</p>\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <div class=\"ion-text-center\">\n    <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n      {{ 'View All' | translate }}\n      <ion-icon name=\"caret-forward\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories3/categories3.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/categorie-pages/categories3/categories3.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Categories3PageModule */

  /***/
  function srcAppCategoriePagesCategories3Categories3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categories3PageModule", function () {
      return Categories3PageModule;
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


    var _categories3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories3.page */
    "./src/app/categorie-pages/categories3/categories3.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _categories3_page__WEBPACK_IMPORTED_MODULE_6__["Categories3Page"]
    }];

    var Categories3PageModule = function Categories3PageModule() {
      _classCallCheck(this, Categories3PageModule);
    };

    Categories3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_categories3_page__WEBPACK_IMPORTED_MODULE_6__["Categories3Page"]]
    })], Categories3PageModule);
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories3/categories3.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/categorie-pages/categories3/categories3.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriePagesCategories3Categories3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: var(--heading-font-size);\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ion-text-color);\n}\nion-content ion-item ion-label p {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  font-size: var(--sub-heading-font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzMy9jYXRlZ29yaWVzMy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzMy9jYXRlZ29yaWVzMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNEWjtBREVZO0VBQ0ksbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQWhCO0FERVk7RUFDSSwyQ0FBQTtFQUNBLHVDQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllLXBhZ2VzL2NhdGVnb3JpZXMzL2NhdGVnb3JpZXMzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories3/categories3.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/categorie-pages/categories3/categories3.page.ts ***!
    \*****************************************************************/

  /*! exports provided: Categories3Page */

  /***/
  function srcAppCategoriePagesCategories3Categories3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categories3Page", function () {
      return Categories3Page;
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

    var Categories3Page = /*#__PURE__*/function () {
      function Categories3Page(shared, config, router, activatedRoute) {
        _classCallCheck(this, Categories3Page);

        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
      }

      _createClass(Categories3Page, [{
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
            this.router.navigateByUrl(this.config.currentRoute + "/categories3/" + id + "/" + name);
          }
        }
      }, {
        key: "openParentProducts",
        value: function openParentProducts() {
          this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/newest");
        }
      }]);

      return Categories3Page;
    }();

    Categories3Page.ctorParameters = function () {
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

    Categories3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories3/categories3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories3.page.scss */
      "./src/app/categorie-pages/categories3/categories3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], Categories3Page);
    /***/
  }
}]);
//# sourceMappingURL=categorie-pages-categories3-categories3-module-es5.js.map