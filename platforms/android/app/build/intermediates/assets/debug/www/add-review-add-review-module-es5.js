function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-review-add-review-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddReviewAddReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Write a review'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <h4>{{'Comment about this product'|translate}}</h4>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"3.6\" class=\"ion-no-padding\">\n        <h5>{{'Your Rating:'|translate}}</h5>\n      </ion-col>\n      <ion-col size=\"1\" *ngFor=\"let s of ratingStars\" class=\"ion-align-self-end\">\n        <ion-icon [name]=\"s.fill\" (click)=\"selectRating(s.value)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Name'|translate}}\" name=\"name\" [(ngModel)]=\"formData.name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Email'|translate}}\" name=\"email\" [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"17\" placeholder=\"{{'Enter a description'|translate}}\" name=\"desc\"\n        [(ngModel)]=\"formData.description\" required></ion-textarea>\n    </ion-item>\n  </form>\n\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"addComment()\" [disabled]=\"disbaleButton()\">\n    {{ 'Post Comment' | translate }}\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/add-review/add-review.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-review/add-review.module.ts ***!
    \*************************************************/

  /*! exports provided: AddReviewPageModule */

  /***/
  function srcAppAddReviewAddReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function () {
      return AddReviewPageModule;
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


    var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-review.page */
    "./src/app/add-review/add-review.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]
    }];

    var AddReviewPageModule = function AddReviewPageModule() {
      _classCallCheck(this, AddReviewPageModule);
    };

    AddReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
    })], AddReviewPageModule);
    /***/
  },

  /***/
  "./src/app/add-review/add-review.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/add-review/add-review.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddReviewAddReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content h4 {\n  padding-left: 10px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  padding-left: 10px;\n}\nion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 1.9;\n  color: #d9d027;\n}\nion-content form ion-item {\n  --background: #fafafa;\n}\nion-content ion-button {\n  width: 100%;\n  margin: 0;\n  border: none;\n}\nion-footer ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2FkZC1yZXZpZXcvYWRkLXJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1yZXZpZXcvYWRkLXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxrQkFBQTtBQ0RKO0FETVE7RUFDRSxrQkFBQTtBQ0pWO0FETVE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQ0pWO0FEVUk7RUFDRSxxQkFBQTtBQ1JOO0FEV0U7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNUSjtBRGNFO0VBQ0UsU0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXJldmlldy9hZGQtcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgaDQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tZ3JpZCB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICB6b29tOiAxLjk7XHJcbiAgICAgICAgICBjb2xvcjogI2Q5ZDAyNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCBoNCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIHpvb206IDEuOTtcbiAgY29sb3I6ICNkOWQwMjc7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-review/add-review.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-review/add-review.page.ts ***!
    \***********************************************/

  /*! exports provided: AddReviewPage */

  /***/
  function srcAppAddReviewAddReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReviewPage", function () {
      return AddReviewPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddReviewPage = /*#__PURE__*/function () {
      function AddReviewPage(navCtrl, http, config, activatedRoute, loading, shared, applicationRef) {
        _classCallCheck(this, AddReviewPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.activatedRoute = activatedRoute;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.rating = null;
        this.errorMessage = '';
        this.formData = {
          name: '',
          email: '',
          description: ''
        };
        this.ratingStars = [{
          value: '1',
          fill: 'star-outline'
        }, {
          value: '2',
          fill: 'star-outline'
        }, {
          value: '3',
          fill: 'star-outline'
        }, {
          value: '4',
          fill: 'star-outline'
        }, {
          value: '5',
          fill: 'star-outline'
        }];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getNonce();
        this.formData.name = this.shared.customerData.first_name + " " + this.shared.customerData.last_name;
        this.formData.email = this.shared.customerData.email;
      }

      _createClass(AddReviewPage, [{
        key: "getNonce",
        value: function getNonce() {
          var _this = this;

          this.loading.show();
          this.http.get(this.config.url + "/api/get_nonce/?controller=AppSettings&method=create_product_review").subscribe(function (data) {
            _this.nonce = data.nonce;
            console.log(data);

            _this.loading.hide();
          });
        }
      }, {
        key: "addComment",
        value: function addComment() {
          var _this2 = this;

          this.loading.show();
          this.http.get(this.config.url + "/api/appsettings/create_product_review/?insecure=cool&nonce=" + this.nonce + "&author_name=" + this.formData.name + "&author_email=" + this.formData.email + "&product_id=" + this.id + "&author_content=" + this.formData.description + "&rate_star=" + this.rating + "&user_id=" + this.shared.customerData.id).subscribe(function (data) {
            _this2.loading.hide();

            if (data.status == 'ok') {
              _this2.navCtrl.pop();
            }

            console.log(data);
          }, function (err) {
            _this2.errorMessage = err.message;
          });
        }
      }, {
        key: "selectRating",
        value: function selectRating(value) {
          this.rating = value;

          var _iterator = _createForOfIteratorHelper(this.ratingStars),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;
              if (v.value <= value) v.fill = 'star';else v.fill = 'star-outline';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.applicationRef.tick();
        }
      }, {
        key: "disbaleButton",
        value: function disbaleButton() {
          //this.applicationRef.tick();
          if (this.rating == null) {
            return true;
          } else if (this.formData.description == "") {
            return true;
          } else if (this.formData.name == "") {
            return true;
          } else if (this.formData.email == "") {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddReviewPage;
    }();

    AddReviewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    AddReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-review.page.scss */
      "./src/app/add-review/add-review.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], AddReviewPage);
    /***/
  }
}]);
//# sourceMappingURL=add-review-add-review-module-es5.js.map