function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories5-categories5-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriePagesCategories5Categories5PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group *ngFor=\"let c of shared.getCategoriesPageItems(0)\" class=\"animated fadeIn\">\n    <ion-item-divider (click)=\"openProducts(c.id,c.name)\">\n      <ion-avatar slot=\"end\">\n        <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n      </ion-avatar>\n      <ion-label class=\"ion-padding\">\n        <ion-text>\n          <h2>{{c.name}}</h2>\n        </ion-text>\n      </ion-label>\n    </ion-item-divider>\n    <div *ngFor=\"let s of shared.subCategories\">\n      <ion-item *ngIf=\"c.id==s.parent\" (click)=\"openProducts(s.id,s.name)\">\n        <ion-avatar slot=\"end\">\n          <img *ngIf=\"s.image\" src=\"{{s.image.src}}\" />\n          <img *ngIf=\"!s.image\" src=\"assets/placeholder.png\" />\n        </ion-avatar>\n        <ion-label class=\"ion-padding\">\n          <ion-text>\n            <h2>{{s.name|translate}}</h2>\n            <p>{{s.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-item-group>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories5/categories5.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/categorie-pages/categories5/categories5.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Categories5PageModule */

  /***/
  function srcAppCategoriePagesCategories5Categories5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categories5PageModule", function () {
      return Categories5PageModule;
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


    var _categories5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories5.page */
    "./src/app/categorie-pages/categories5/categories5.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _categories5_page__WEBPACK_IMPORTED_MODULE_6__["Categories5Page"]
    }];

    var Categories5PageModule = function Categories5PageModule() {
      _classCallCheck(this, Categories5PageModule);
    };

    Categories5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_categories5_page__WEBPACK_IMPORTED_MODULE_6__["Categories5Page"]]
    })], Categories5PageModule);
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories5/categories5.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/categorie-pages/categories5/categories5.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriePagesCategories5Categories5PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-size: var(--sub-heading-font-size);\n}\nion-content ion-item-divider {\n  --background: var(--ion-color-light-shade);\n}\nion-content ion-item-divider ion-avatar {\n  margin-right: 16px;\n}\nion-content ion-item-divider ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n}\nion-content ion-item-divider ion-label h2 {\n  font-weight: bold;\n  font-size: var(--heading-font-size);\n  color: var(--ion-color-light-contrast);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: 14px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNS9jYXRlZ29yaWVzNS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNS9jYXRlZ29yaWVzNS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1Q0FBQTtBQ0FKO0FERUU7RUFDRSwwQ0FBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDTjtBREFNO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRVI7QURHSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNS9jYXRlZ29yaWVzNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgfVxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciBpb24tbGFiZWwgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/categorie-pages/categories5/categories5.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/categorie-pages/categories5/categories5.page.ts ***!
    \*****************************************************************/

  /*! exports provided: Categories5Page */

  /***/
  function srcAppCategoriePagesCategories5Categories5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categories5Page", function () {
      return Categories5Page;
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

    var Categories5Page = /*#__PURE__*/function () {
      function Categories5Page(shared, config, router, activatedRoute) {
        _classCallCheck(this, Categories5Page);

        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
      }

      _createClass(Categories5Page, [{
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
          this.router.navigateByUrl(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
        }
      }]);

      return Categories5Page;
    }();

    Categories5Page.ctorParameters = function () {
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

    Categories5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories5.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories5.page.scss */
      "./src/app/categorie-pages/categories5/categories5.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], Categories5Page);
    /***/
  }
}]);
//# sourceMappingURL=categorie-pages-categories5-categories5-module-es5.js.map