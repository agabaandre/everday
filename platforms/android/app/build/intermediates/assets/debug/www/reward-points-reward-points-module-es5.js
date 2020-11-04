function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reward-points-reward-points-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRewardPointsRewardPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Reward Point'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid\" class=\"ion-no-padding\" *ngIf=\"rewards.length==0 && !httpLoading\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"happy\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Rewards List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openShop()\">{{'Explore'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-card *ngFor=\"let r of rewards\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Action'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" col-6>\n            {{r.type}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Points'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.points}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Date'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.date}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <h5> {{'Total Points Earned'|translate}} &nbsp;&nbsp;:</h5>\n    </ion-col>\n    <ion-col class=\"ion-text-right\">\n      <h5>{{totalPoints()}}</h5>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.module.ts ***!
    \*******************************************************/

  /*! exports provided: RewardPointsPageModule */

  /***/
  function srcAppRewardPointsRewardPointsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPageModule", function () {
      return RewardPointsPageModule;
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


    var _reward_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reward-points.page */
    "./src/app/reward-points/reward-points.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]
    }];

    var RewardPointsPageModule = function RewardPointsPageModule() {
      _classCallCheck(this, RewardPointsPageModule);
    };

    RewardPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]]
    })], RewardPointsPageModule);
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRewardPointsRewardPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .grid {\n  margin-top: 50%;\n}\nion-content .grid ion-row ion-col {\n  text-align: center;\n}\nion-content .grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid ion-row ion-col ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 0px;\n  height: 30px;\n}\nion-content .grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n}\nion-content .grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-grid ion-card {\n  color: black;\n}\nion-footer {\n  background-color: #557f5f;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxlQUFBO0FDRFI7QURHWTtFQUNJLGtCQUFBO0FDRGhCO0FERWdCO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDQXBCO0FERWdCO0VBQ0ksc0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNBcEI7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQXBCO0FERWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQXBCO0FETVE7RUFDSSxZQUFBO0FDSlo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50e1xuICAgIC5ncmlke1xuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgem9vbTozLjk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg1e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzU1N2Y1ZiA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSIsImlvbi1jb250ZW50IC5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMy45O1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tY2FyZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTdmNWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.ts ***!
    \*****************************************************/

  /*! exports provided: RewardPointsPage */

  /***/
  function srcAppRewardPointsRewardPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPage", function () {
      return RewardPointsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var RewardPointsPage = /*#__PURE__*/function () {
      function RewardPointsPage(navCtrl, http, loading, shared, config) {
        _classCallCheck(this, RewardPointsPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.rewards = [];
        this.httpLoading = true;
        this.getRewards();
      }

      _createClass(RewardPointsPage, [{
        key: "getRewards",
        value: function getRewards() {
          var _this = this;

          this.httpLoading = true;
          this.loading.show();
          this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe(function (data) {
            _this.httpLoading = false;

            _this.loading.hide();

            var dat = data.data;
            _this.rewards = dat;
            console.log(dat);
          });
        }
      }, {
        key: "openShop",
        value: function openShop() {
          this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad RewardPointsPage');
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.getRewards();
        }
      }, {
        key: "totalPoints",
        value: function totalPoints() {
          var t = 0;

          var _iterator = _createForOfIteratorHelper(this.rewards),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;
              t = t + parseInt(v.points);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return t;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RewardPointsPage;
    }();

    RewardPointsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
      }];
    };

    RewardPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reward-points',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reward-points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reward-points.page.scss */
      "./src/app/reward-points/reward-points.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])], RewardPointsPage);
    /***/
  }
}]);
//# sourceMappingURL=reward-points-reward-points-module-es5.js.map