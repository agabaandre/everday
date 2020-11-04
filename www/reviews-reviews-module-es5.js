function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Reviews'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"review-page\">\n  <ion-grid class=\"rating-gird\" *ngIf=\"r5!=null\">\n    <ion-row>\n      <ion-col>\n        <h4>{{'Ratings & Reviews'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"5\">\n        <h1>{{average| number:'1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon>\n        </h1>\n        <h3>{{reviews.length}} {{'rating'|translate}}</h3>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ul>\n          <li>5\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r5+'%'\" style=\"background-color:green;\"></span>\n          </li>\n          <li>4\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r4+'%'\" style=\"background-color:lightgreen;\"></span>\n          </li>\n          <li>3\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r3+'%'\" style=\"background-color:yellow;\"></span>\n          </li>\n          <li>2\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r2+'%'\" style=\"background-color:orange;\"></span>\n          </li>\n          <li>1\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r1+'%'\" style=\"background-color:dar=darkorange;\"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"danger\" (click)=\"openReviewsPage()\">{{'Rate and write a review'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class=\"rating-users\">\n    <ion-item *ngFor=\"let r of reviews\">\n      <ion-avatar item-start>\n        <img src=\"assets/avatar.png\">\n      </ion-avatar>\n      <h2>{{r.name}}</h2>\n      <ul class=\"product-rating\">\n        <li>\n          <div class=\"stars-outer\">\n            <div class=\"stars-inner\" [style.width]=\"(r.rating*20)+'%'\"></div>\n          </div>\n          <h6>{{r.date_created|date:'dd-MM-yyyy'}}</h6>\n        </li>\n      </ul>\n      <p [innerHTML]=\"r.review\"></p>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/reviews/reviews.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/reviews/reviews.module.ts ***!
    \*******************************************/

  /*! exports provided: ReviewsPageModule */

  /***/
  function srcAppReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
      return ReviewsPageModule;
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


    var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reviews.page */
    "./src/app/reviews/reviews.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]
    }];

    var ReviewsPageModule = function ReviewsPageModule() {
      _classCallCheck(this, ReviewsPageModule);
    };

    ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
    })], ReviewsPageModule);
    /***/
  },

  /***/
  "./src/app/reviews/reviews.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/reviews/reviews.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.review-page {\n  background-color: white;\n}\n.review-page .rating-gird h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.review-page .rating-gird h1 {\n  font-size: 30px;\n  margin-top: 0;\n  text-align: center;\n}\n.review-page .rating-gird h3 {\n  color: var(--ion-color-secondary);\n  margin-bottom: 0;\n  text-align: center;\n}\n.review-page .rating-gird ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n  border-left: 1px solid #ccc;\n}\n.review-page .rating-gird ul li {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  list-style: none;\n  position: relative;\n}\n.review-page .rating-gird ul li .icon {\n  margin-left: 5px;\n}\n.review-page .rating-gird ul li .block {\n  height: 11px;\n  display: inline-block;\n  margin-left: 7px;\n  position: relative;\n  z-index: 2;\n}\n.review-page .rating-gird ul li::after {\n  content: \"\";\n  background-color: #f4f4f4;\n  height: 11px;\n  width: calc(100% - 36px);\n  position: absolute;\n  left: 36px;\n  z-index: 1;\n  top: 5px;\n}\n.review-page .rating-gird .button {\n  min-height: 45px;\n}\n.review-page .rating-users .item {\n  background-color: transparent;\n  align-items: flex-start;\n}\n.review-page .rating-users .item ion-avatar {\n  margin-top: 10px;\n}\n.review-page .rating-users .item h2 {\n  font-weight: bold;\n}\n.review-page .rating-users .item .product-rating {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.review-page .rating-users .item .product-rating li {\n  display: flex;\n  align-items: center;\n}\n.review-page .rating-users .item .product-rating li h6 {\n  margin-top: 5px;\n  margin-left: 10px;\n}\n.review-page .rating-users .item p p {\n  margin-top: 2px;\n  white-space: normal;\n}\n.review-page .product-rating {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.review-page .product-rating .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 25px;\n}\n.review-page .product-rating .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.review-page .product-rating .stars-outer .stars-inner {\n  font-size: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.review-page .product-rating .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.review-page .product-rating h6 {\n  color: cornflowerblue;\n  margin-left: 15px;\n}\n.review-page .animate {\n  -webkit-animation: fadeInRight 0.75s;\n          animation: fadeInRight 0.75s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsdUJBQUE7QURFRjtBQ0FJO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0FEQ047QUNFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ0tJO0VBRUUsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESk47QUNNSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBREpOO0FDS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREhSO0FDSVE7RUFDRSxnQkFBQTtBREZWO0FDSVE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREZWO0FDSVE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBREZWO0FDTUk7RUFDRSxnQkFBQTtBREpOO0FDUUk7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FETk47QUNRTTtFQUNFLGdCQUFBO0FETlI7QUNRTTtFQUNFLGlCQUFBO0FETlI7QUNRTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUROUjtBQ09RO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FETFY7QUNPVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRExaO0FDVVE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QURSVjtBQ2NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QURaSjtBQ2NJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURaTjtBQ2FNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEWFI7QUNhTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRFhSO0FDYVE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURYVjtBQ2VJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRGJOO0FDaUJFO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBRGZKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yZXZpZXctcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctZ2lyZCBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIGgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIGgzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIHVsIGxpIC5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgdWwgbGkgLmJsb2NrIHtcbiAgaGVpZ2h0OiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgdWwgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzZweDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA1cHg7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIC5idXR0b24ge1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctdXNlcnMgLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy11c2VycyAuaXRlbSBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLXVzZXJzIC5pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy11c2VycyAuaXRlbSAucHJvZHVjdC1yYXRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy11c2VycyAuaXRlbSAucHJvZHVjdC1yYXRpbmcgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctdXNlcnMgLml0ZW0gLnByb2R1Y3QtcmF0aW5nIGxpIGg2IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLXVzZXJzIC5pdGVtIHAgcCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5yZXZpZXctcGFnZSAucHJvZHVjdC1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucmV2aWV3LXBhZ2UgLnByb2R1Y3QtcmF0aW5nIC5zdGFycy1vdXRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucmV2aWV3LXBhZ2UgLnByb2R1Y3QtcmF0aW5nIC5zdGFycy1vdXRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIbimIbimIbimIbimIZcIjtcbiAgY29sb3I6ICNjY2M7XG59XG4ucmV2aWV3LXBhZ2UgLnByb2R1Y3QtcmF0aW5nIC5zdGFycy1vdXRlciAuc3RhcnMtaW5uZXIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJldmlldy1wYWdlIC5wcm9kdWN0LXJhdGluZyAuc3RhcnMtb3V0ZXIgLnN0YXJzLWlubmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYheKYheKYhVwiO1xuICBjb2xvcjogI2Y4Y2UwYjtcbn1cbi5yZXZpZXctcGFnZSAucHJvZHVjdC1yYXRpbmcgaDYge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnJldmlldy1wYWdlIC5hbmltYXRlIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjc1cztcbn0iLCIucmV2aWV3LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLnJhdGluZy1naXJkIHtcbiAgICBoNCB7XG4gICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgIH1cbiAgICB9XG4gICAgaDMge1xuICAgICAgLy9mb250LXNpemU6ICRoMi1mb250LXNpemU7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAzNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgfVxuICAucmF0aW5nLXVzZXJzIHtcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAucHJvZHVjdC1yYXRpbmcge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LXJhdGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgIC5zdGFycy1vdXRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcMjYwNlxcMjYwNlxcMjYwNlxcMjYwNlxcMjYwNlwiO1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICAgIC5zdGFycy1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVwiO1xuICAgICAgICAgIGNvbG9yOiAjZjhjZTBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGg2IHtcbiAgICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5hbmltYXRlIHtcbiAgICBhbmltYXRpb246IGZhZGVJblJpZ2h0IDAuNzVzO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/reviews/reviews.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/reviews/reviews.page.ts ***!
    \*****************************************/

  /*! exports provided: ReviewsPage */

  /***/
  function srcAppReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
      return ReviewsPage;
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


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modals/login/login.page */
    "./src/app/modals/login/login.page.ts");

    var ReviewsPage = /*#__PURE__*/function () {
      function ReviewsPage(navCtrl, activatedRoute, applicationRef, config, modalCtrl, loading, shared) {
        _classCallCheck(this, ReviewsPage);

        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.applicationRef = applicationRef;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.reviews = [];
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
        this.r4 = null;
        this.r5 = null;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getProductReviews();
      } //===============================================================================================================================
      // <!-- 2.0 updates -->


      _createClass(ReviewsPage, [{
        key: "getProductReviews",
        value: function getProductReviews() {
          var _this = this;

          this.loading.show();
          this.config.getWoo("products/reviews/?" + this.config.productsArguments + "&product=" + [this.id]).then(function (data) {
            _this.reviews = data;

            _this.applicationRef.tick();

            var total = 0;

            var _iterator = _createForOfIteratorHelper(_this.reviews),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;
                total = total + value.rating;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this.average = total / _this.reviews.length;
            if (_this.reviews.length == 0) _this.average = 0;

            _this.calculateAll();

            _this.applicationRef.tick();

            _this.loading.hide();
          });
        } //===============================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "openReviewsPage",
        value: function openReviewsPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.shared.customerData.id == null || this.shared.customerData.id == undefined)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': false
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 9:
                    this.navCtrl.navigateForward(this.config.currentRoute + "/add-review/" + this.id);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //===============================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "totalRating",
        value: function totalRating() {
          var total = 0;

          var _iterator2 = _createForOfIteratorHelper(this.reviews),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;
              total = total + value.rating;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var result = total;
          if (total == 0) result = 0;
          return result;
        }
      }, {
        key: "calculateAll",
        value: function calculateAll() {
          var r1 = 0,
              r2 = 0,
              r3 = 0,
              r4 = 0,
              r5 = 0;
          var total = this.reviews.length;

          var _iterator3 = _createForOfIteratorHelper(this.reviews),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var value = _step3.value;
              if (value.rating == 1) r1++;
              if (value.rating == 2) r2++;
              if (value.rating == 3) r3++;
              if (value.rating == 4) r4++;
              if (value.rating == 5) r5++;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.r1 = 100 / total * r1;
          if (r1 == 0) this.r1 = 0;
          this.r2 = 100 / total * r2;
          if (r2 == 0) this.r2 = 0;
          this.r3 = 100 / total * r3;
          if (r3 == 0) this.r3 = 0;
          this.r4 = 100 / total * r4;
          if (r4 == 0) this.r4 = 0;
          this.r5 = 100 / total * r5;
          if (r5 == 0) this.r5 = 0;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReviewsPage;
    }();

    ReviewsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }];
    };

    ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reviews',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reviews.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reviews.page.scss */
      "./src/app/reviews/reviews.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]])], ReviewsPage);
    /***/
  }
}]);
//# sourceMappingURL=reviews-reviews-module-es5.js.map