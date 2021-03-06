function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home9-home9-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome9Home9PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n\n        <ion-img src=\"assets/logo_header.png\" alt=\"logo\" style=\"height:40%; width:80%; margin:0 auto;\"></ion-img>\n\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Reloading...\">\n        </ion-refresher-content>\n    </ion-refresher> -->\n    <!--bannner-->\n    <app-banner></app-banner>\n\n\n\n\n    <!--category banner-->\n    <ion-img class=\"product-catgory-image\" src=\" assets/categories.png \" alt=\"logo \" (click)=\"openCategoryPage()\" style=\"width:192\"></ion-img>\n\n\n    <!-- categories component -->\n    <app-categories [type]=\"'withName'\"></app-categories>\n\n    <!-- For On Sale items -->\n\n\n    <!--on sale banner-->\n    <ion-img class=\"product-catgory-image\" src=\" assets/discounted.png \" alt=\"logo \"></ion-img>\n\n\n\n\n\n\n    <div>\n        <ion-slides [options]=\"sliderConfig\">\n\n            <ion-slide *ngFor=\"let p of shared.tab2 \">\n                <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n            </ion-slide>\n        </ion-slides>\n\n    </div>\n\n    <!-- For Vendor List -->\n    <app-vendor-list></app-vendor-list>\n\n    <!--Sub Categories-->\n    <ion-button id=\"second \" fill=\"clear \" style=\"margin:0 auto; \">\n        <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n        {{ ' Shop by Sub-categories' }}\n    </ion-button>\n\n    <ion-row style=\"margin:7px; \">\n        <ion-slides class=\"subcat \" [options]=\"sliderConfig \">\n            <ion-slide class=\"subscats col col-50 \" [class.selected]=\"selected==c.id \" *ngFor=\"let c of shared.allCategories \" (click)=\"openSubCategories(c.id) \">\n                <ion-item *ngIf=\"c!=1\">\n                    <img *ngIf=\"c.image \" src=\"{{c.image.src}} \">\n                    <ion-text>\n                        <h6 style=\"text-align: center; overflow: hidden; margin-left:1px;     text-overflow: ellipsis; white-space: nowrap;\">{{c.name}}</h6>\n                    </ion-text>\n                </ion-item>\n                <ion-item *ngIf=\"c==1\" class=\"skeleton-name\">\n                    <ion-skeleton-text animated>\n                    </ion-skeleton-text>\n                    <p>\n                        <ion-skeleton-text animated>\n                        </ion-skeleton-text>\n                    </p>\n                </ion-item>\n\n            </ion-slide>\n        </ion-slides>\n    </ion-row>\n    <ion-img class=\"product-catgory-image \" src=\" assets/1.png \" alt=\"logo \" (click)=\"openSubCategories( '16') \"></ion-img>\n\n    <!--product category sliders-->\n    <!--Farms-->\n    <div class=\"product-slider \">\n        <ion-slides [options]=\" sliderConfig \">\n\n\n            <ion-slide *ngFor=\"let p of shared.farms \" id=\"{{16}} \">\n                <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button id=\"second \" fill=\"clear \" (click)=\"openSubCategories( '16') \">\n                    <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n                    {{ 'View More' | translate }}\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <ion-img class=\"product-catgory-image \" src=\" assets/2.png \" alt=\"logo \" (click)=\"openSubCategories(35) \"></ion-img>\n\n\n    <div class=\" product-slider \">\n        <ion-slides [options]=\" sliderConfig \">\n\n            <ion-slide *ngFor=\"let p of shared.biscuit \" id=\"{{35}} \">\n                <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button id=\"second \" fill=\"clear \" (click)=\"openSubCategories( '35') \">\n                    <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n                    {{ 'View More' | translate }}\n                </ion-button>\n            </ion-slide>\n        </ion-slides>\n\n\n    </div>\n\n\n    <ion-img class=\"product-catgory-image \" src=\" assets/4.png \" alt=\"logo \" (click)=\"openSubCategories(34) \"></ion-img>\n\n\n    <div class=\" product-slider \">\n        <ion-slides [options]=\" sliderConfig \">\n\n            <ion-slide *ngFor=\"let p of shared.confectionary \" id=\"{{34}} \">\n                <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n            </ion-slide>\n            <ion-slide>\n                <ion-button id=\"second \" fill=\"clear \" (click)=\"openSubCategories( '34') \">\n                    <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n                    {{ 'View More' | translate }}\n                </ion-button>\n            </ion-slide>\n\n        </ion-slides>\n\n\n    </div>\n\n    <ion-img class=\"product-catgory-image \" src=\" assets/5.png \" alt=\"logo \" (click)=\"openSubCategories(32) \"></ion-img>\n\n\n    <div class=\" product-slider \">\n        <ion-slides [options]=\" sliderConfig \">\n\n            <ion-slide *ngFor=\"let p of shared.bakery \" id=\"{{32}} \">\n                <app-product [data]=\" p \" [type]=\" 'normal' \"></app-product>\n\n            </ion-slide>\n            <ion-slide>\n                <ion-button id=\"second \" fill=\"clear \" (click)=\"openSubCategories( '32') \">\n                    <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n                    {{ 'View More' | translate }}\n                </ion-button>\n            </ion-slide>\n\n\n        </ion-slides>\n\n\n    </div>\n    <!--Infinity slider test Farm-->\n\n    <!-- <ion-slides (ionSlideDidChange)=\"getFarm() \" [options]=\" sliderConfig \">\n        <ion-slide *ngFor=\"let p of products \" size=\"6 \" class=\"ion-no-padding \">\n\n            <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n\n        </ion-slide>\n    </ion-slides> -->\n\n    <!--All products Slider-->\n    <div class=\"more-products\">\n\n\n        <ion-button id=\"second \" fill=\"clear \" style=\"margin-top:5px; \">\n            <ion-icon slot=\"end \" name=\"caret-forward \"></ion-icon>\n            {{ 'More Products' | translate }}\n        </ion-button>\n\n        <!--infinity test all products-->\n        <ion-img *ngIf=\"shared.banners.length!=0\" src=\"{{shared.banners[shared.banners.length-1].banners_image}}\"></ion-img>\n\n\n        <!-- infinite scroll -->\n        <ion-grid class=\"ion-no-padding \">\n            <ion-row class=\"ion-no-padding \">\n                <ion-col *ngFor=\"let p of products \" size=\"6 \" class=\"ion-no-padding \">\n                    <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <!-- <ion-slides (ionSlideDidChange)=\"getProducts() \" [options]=\" sliderConfig \">\n            <ion-slide *ngFor=\"let p of products \" size=\"6 \" class=\"ion-no-padding \">\n\n                <app-product [data]=\"p \" [type]=\" 'normal' \"></app-product>\n\n            </ion-slide>\n        </ion-slides> -->\n\n    </div>\n\n    <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts() \" threshold=\"25%\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"Loading more Products...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n</ion-content>\n<ion-fab vertical=\"bottom \" horizontal=\"end \" *ngIf=\"scrollTopButton \">\n    <ion-fab-button color=\"secondary \" (click)=\"scrollToTop() \">\n        <i class=\"fa fa-angle-double-up\"></i>\n\n    </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home9/home9.module.ts ***!
    \**************************************************/

  /*! exports provided: Home9PageModule */

  /***/
  function srcAppHomePagesHome9Home9ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home9PageModule", function () {
      return Home9PageModule;
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


    var _home9_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home9.page */
    "./src/app/home-pages/home9/home9.page.ts");
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
      component: _home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]
    }];

    var Home9PageModule = function Home9PageModule() {
      _classCallCheck(this, Home9PageModule);
    };

    Home9PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]]
    })], Home9PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home9/home9.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome9Home9PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment ion-segment-button {\n  font-size: 11.3px;\n  --color: var(--ion-color-primary);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content .row-segment {\n  margin-right: 10px;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\nion-content ion-card img {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.5s;\n}\nion-content ion-fab {\n  position: fixed;\n}\nion-content ion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\nion-content .product-catgory-image {\n  box-shadow: 0px 4px 7px 5px rgba(107, 105, 105, 0.49);\n  margin: 0 auto;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\nion-content .product-slider {\n  box-shadow: 0px 4px 5px 5px rgba(110, 110, 110, 0.49);\n}\nion-content .more-product {\n  box-shadow: 0px 4px 5px 5px rgba(247, 243, 243, 0.842);\n}\nion-content .top-levels {\n  box-shadow: 0px 4px 7px 5px rgba(107, 105, 105, 0.49);\n  margin: 0 auto;\n  border-top-left-radius: 1000px;\n  border-top-right-radius: 1000px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .subcat {\n  min-height: 100px;\n  max-height: 270px;\n  margin: 0px;\n  border: 1px #ffffff;\n}\nion-content .subcat img {\n  border-radius: 1px;\n  padding: 5px;\n  font-size: 8.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTkvaG9tZTkucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU5L2hvbWU5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUNBUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ0ZaO0FET1k7RUFDSSxZQUFBO0FDTGhCO0FEU0k7RUFDSSxXQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURVUTtFQUNJLGtCQUFBO0FDUlo7QURZUTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRGFJO0VBQ0ksZUFBQTtBQ1hSO0FEWVE7RUFDSSxzQ0FBQTtBQ1ZaO0FEYUk7RUFDSSxxREFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDWFI7QURhSTtFQUNJLHFEQUFBO0FDWFI7QURhSTtFQUNJLHNEQUFBO0FDWFI7QURhSTtFQUNJLHFEQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEWVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ZaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlcy9ob21lOS9ob21lOS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIC8vIGlmIGRhdGEgbG9hZFxuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuM3B4O1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwLXByb2R1Y3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnJvdy1zZWdtZW50IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2R1Y3QtY2F0Z29yeS1pbWFnZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggN3B4IDVweCByZ2JhKDEwNywgMTA1LCAxMDUsIDAuNDkpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAucHJvZHVjdC1zbGlkZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCA1cHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjQ5KTtcbiAgICB9XG4gICAgLm1vcmUtcHJvZHVjdCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IDVweCByZ2JhKDI0NywgMjQzLCAyNDMsIDAuODQyKTtcbiAgICB9XG4gICAgLnRvcC1sZXZlbHMge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDdweCA1cHggcmdiYSgxMDcsIDEwNSwgMTA1LCAwLjQ5KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuICAgIC5zdWJjYXQge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBib3JkZXI6IDFweCAjZmZmZmZmO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA4LjVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTEuM3B4O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5yb3ctc2VnbWVudCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpbWcge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5pb24tY29udGVudCBpb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLnByb2R1Y3QtY2F0Z29yeS1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggN3B4IDVweCByZ2JhKDEwNywgMTA1LCAxMDUsIDAuNDkpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnByb2R1Y3Qtc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggNXB4IHJnYmEoMTEwLCAxMTAsIDExMCwgMC40OSk7XG59XG5pb24tY29udGVudCAubW9yZS1wcm9kdWN0IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggNXB4IHJnYmEoMjQ3LCAyNDMsIDI0MywgMC44NDIpO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1sZXZlbHMge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDdweCA1cHggcmdiYSgxMDcsIDEwNSwgMTA1LCAwLjQ5KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tY29udGVudCAuc3ViY2F0IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggI2ZmZmZmZjtcbn1cbmlvbi1jb250ZW50IC5zdWJjYXQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogOC41cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home9/home9.page.ts ***!
    \************************************************/

  /*! exports provided: Home9Page */

  /***/
  function srcAppHomePagesHome9Home9PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home9Page", function () {
      return Home9Page;
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

    var Home9Page = /*#__PURE__*/function () {
      function Home9Page(nav, config, appEventsService, shared, platform, routerOutlet) {
        _classCallCheck(this, Home9Page);

        // this.subscribe = this.platform.backButton.subscribeWithPriority(-1, () => {
        //   if (!this.routerOutlet.canGoBack()) {
        this.nav = nav;
        this.config = config;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
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
        this.page = 1; //     navigator["app"].exitApp();
        //   }
        // }
        // );
      }

      _createClass(Home9Page, [{
        key: "doRefresh",
        value: function doRefresh(event) {
          //console.log('Begin async operation');
          //this.ngOnInit();
          setTimeout(function () {
            //   console.log('Async operation has ended');
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
          this.subscribe = this.platform.backButton.subscribe(function () {
            if (window.confirm("Do you want to exit?")) {
              navigator['app'].exitApp();
            }
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscribe.unsubscribe();
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
        key: "openCategoryPage",
        value: function openCategoryPage() {
          this.appEventsService.publish("openCategoryPage", "");
        }
      }, {
        key: "openSubCategories",
        value: function openSubCategories(parent) {
          this.nav.navigateForward(this.config.currentRoute + "/products/" + parent + "/" + parent + "/newest"); // console.log(parent);
        }
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

          var query = "products?category=" + 16 + "?" + "page=" + this.page;
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

          var query = "products?category=" + 35 + "?" + "page=" + this.page;
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

          var query = "products?category=" + 34 + "?" + "page=" + this.page;
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

          var query = "products?category=" + 32 + "?" + "page=" + this.page;
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.config.setCardStyle("14");
        }
      }]);

      return Home9Page;
    }();

    Home9Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], Home9Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], Home9Page.prototype, "infinite", void 0);
    Home9Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home9",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home9.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home9.page.scss */
      "./src/app/home-pages/home9/home9.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]])], Home9Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home9-home9-module-es5.js.map