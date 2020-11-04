function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'News'| translate }}\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"news-page\">\n    <!-- *ngIf=\"post.image\" -->\n    <ion-slides pager=true paginationType=\"bullets\" class=\"animated slideIn\">\n        <ion-slide *ngFor=\"let post of featuredPosts\" (click)=\"showPostDetail(post)\">\n            <ion-spinner *ngIf=\"!post.image\"></ion-spinner>\n            <ion-img src=\"{{post.image}}\" class=\"animated fadeIn\"></ion-img>\n        </ion-slide>\n    </ion-slides>\n    <!-- top Segments  -->\n    <ion-segment [(ngModel)]=\"segments\">\n        <ion-segment-button value=\"newest\">{{'Newest' |translate}}</ion-segment-button>\n        <ion-segment-button value=\"categories\">{{ 'Categories' | translate }} </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"segments\">\n\n        <div *ngSwitchCase=\"'newest'\">\n            <ion-list>\n                <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"showPostDetail(post)\" class=\"animated fadeIn\">\n                    <ion-thumbnail slot=\"start\">\n                        <ion-img src=\"{{post.image}}\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h2>{{post.title.rendered}}\n                            <br>\n                            <small>\n                <ion-icon name=\"clock\"></ion-icon>\n                <ion-label>\n                  {{post.date}}\n                </ion-label>\n              </small>\n                        </h2>\n                        <p [innerHTML]=\"post.content.rendered\"></p>\n                    </ion-label>\n                </ion-item>\n                <ion-infinite-scroll #infinite (ionInfinite)=\"getPosts()\">\n                    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n                </ion-infinite-scroll>\n            </ion-list>\n        </div>\n\n        <div *ngSwitchCase=\"'categories'\">\n            <ion-grid class=\"ion-no-padding\" class=\"animated fadeIn\">\n                <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"6\" *ngFor=\"let cat of categories\" (click)=\"openPostsPage(cat.name,cat.id)\">\n                        <ion-card>\n                            <ion-card-header>\n                                <ion-img src=\"{{cat.image}}\"></ion-img>\n                            </ion-card-header>\n                            <ion-card-content>\n                                <ion-card-title>\n                                    {{cat.name}}\n                                </ion-card-title>\n                                <ion-card-subtitle>\n                                    {{cat.count}} {{'Posts'|translate}}\n                                </ion-card-subtitle>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsPageModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
      return NewsPageModule;
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


    var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/news/news.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }];

    var NewsPageModule = function NewsPageModule() {
      _classCallCheck(this, NewsPageModule);
    };

    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })], NewsPageModule);
    /***/
  },

  /***/
  "./src/app/news/news.page.scss":
  /*!*************************************!*\
    !*** ./src/app/news/news.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".news-page ion-segment {\n  border-bottom: 1px solid #dedede;\n}\n.news-page ion-segment ion-segment-button {\n  --indicator-color-checked: var(--ion-color-primary) !important;\n  --color-checked: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\n.news-page ion-list ion-item ion-thumbnail {\n  margin-bottom: auto;\n}\n.news-page ion-list ion-item ion-label {\n  margin-top: 4px;\n}\n.news-page ion-list ion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: bold;\n  white-space: normal;\n}\n.news-page ion-list ion-item ion-label h2 small {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #747474;\n  font-weight: normal;\n  margin-top: 5px;\n}\n.news-page ion-list ion-item ion-label h2 small ion-label {\n  padding-left: 4px;\n}\n.news-page ion-list ion-item ion-label p p:not(:first-child) {\n  display: none;\n}\n.news-page ion-list ion-item ion-label p p:first-child {\n  white-space: normal;\n  line-height: 1.4;\n  -webkit-line-clamp: 4;\n  display: -webkit-box;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n}\n.news-page ion-grid ion-row ion-col ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  text-align: center;\n  margin: 0;\n  box-shadow: inset 0px 0.1px lightgrey;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-header ion-img {\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-content ion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-content ion-card-subtitle {\n  font-size: 14px;\n  color: #747474;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtBQ0FKO0FEQ0k7RUFDRSw4REFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUNDTjtBREtNO0VBQ0UsbUJBQUE7QUNIUjtBREtNO0VBQ0UsZUFBQTtBQ0hSO0FESVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZWO0FER1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDRSxpQkFBQTtBQ0FkO0FES1U7RUFDRSxhQUFBO0FDSFo7QURLVTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0haO0FEYVE7RUFRRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7QUNsQlY7QURRWTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTmQ7QURlWTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNiZDtBRGVZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNiZCIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1wYWdlIHtcbiAgaW9uLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIH1cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwLjFweCBsaWdodGdyZXk7XG4gICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzQ3NDc0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLm5ld3MtcGFnZSBpb24tc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuLm5ld3MtcGFnZSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5uZXdzLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4ubmV3cy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5uZXdzLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5uZXdzLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHNtYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm5ld3MtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDIgc21hbGwgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ubmV3cy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5ld3MtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgcCBwOmZpcnN0LWNoaWxkIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi5uZXdzLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwLjFweCBsaWdodGdyZXk7XG59XG4ubmV3cy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWltZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubmV3cy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG4ubmV3cy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/news/news.page.ts":
  /*!***********************************!*\
    !*** ./src/app/news/news.page.ts ***!
    \***********************************/

  /*! exports provided: NewsPage */

  /***/
  function srcAppNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
      return NewsPage;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var NewsPage = /*#__PURE__*/function () {
      function NewsPage(navCtrl, http, config, loading, shared) {
        var _this2 = this;

        _classCallCheck(this, NewsPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.featuredPosts = new Array();
        this.segments = 'newest'; //WordPress intergation

        this.categories = new Array(); //page varible

        this.page = 1; //WordPress intergation

        this.posts = new Array(); //page varible

        this.page2 = 1;
        this.loadingServerDataPosts = true; //========================================= tab newest categories ===============================================================================

        this.getCategories = function () {
          var _this = this;

          var data = {};
          data.language_id = this.config.langId;
          data.page_number = this.page2;
          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/?page=' + this.page2 + "&" + this.config.productsArguments).then(function (data) {
            if (_this.page2 == 1) {
              _this.categories = [];
            }

            _this.page2++;
            data.forEach(function (value, index) {
              _this.categories.push(Object.assign(value, {
                image: ''
              }));
            }); // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this.getRandomImage();
            } else _this.getCategories();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        };

        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2 + "&" + this.config.productsArguments).then(function (data) {
          data.forEach(function (value, index) {
            _this2.getImagePost(value);
          });
          _this2.featuredPosts = data;
        });
        this.getPosts();
      }

      _createClass(NewsPage, [{
        key: "getImagePost",
        value: function getImagePost(post) {
          post.image = "assets/placeholder.png";
          if (post._links["wp:featuredmedia"]) this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then(function (data) {
            post.image = data.source_url;
          });
        } //============================================================================================  
        //getting list of posts

      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this3 = this;

          if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
          }

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&" + this.config.productsArguments).then(function (data) {
            _this3.infinite.complete(); //stopping infinite scroll loader


            if (_this3.page == 1) {
              _this3.posts = [];
              _this3.infinite.disabled = false;

              _this3.loading.hide();

              _this3.getCategories();
            }

            _this3.page++;
            data.forEach(function (value, index) {
              _this3.getImagePost(value);

              _this3.posts.push(value);
            });

            _this3.posts.concat(data);

            if (data.length < 9) {
              // if we get less than 10 products then infinite scroll will de disabled
              _this3.infinite.disabled = true; //disabling infinite scroll

              if (_this3.posts.length != 0) {//this.shared.toast("All Posts Loaded!");
              }
            }

            _this3.loadingServerDataPosts = true;
          }, function (err) {
            _this3.infinite.disabled = true; // console.log("Error while loading posts from the server");
            // console.log(response);
          });
        }
      }, {
        key: "showPostDetail",
        //============================================================================================  
        //getting list of sub categories from the server
        value: function showPostDetail(post) {
          this.shared.singlePostData = post;
          if (this.config.appNavigationTabs) this.navCtrl.navigateForward(this.config.currentRoute + "/news-detail");else this.navCtrl.navigateForward("/news-detail");
        }
      }, {
        key: "openPostsPage",
        value: function openPostsPage(name, id) {
          if (this.config.appNavigationTabs) this.navCtrl.navigateForward(this.config.currentRoute + "/news-list/" + id + "/" + name);else this.navCtrl.navigateForward("/news-list/" + id + "/" + name);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.config.admob == 1) this.shared.showAd();
        } // <!-- 2.0 updates -->

      }, {
        key: "getRandomImage",
        value: function getRandomImage() {
          var _this4 = this;

          try {
            this.categories.forEach(function (value, index) {
              value.image = "assets/placeholder.png";

              var rand = _this4.getRandomPost();

              if (rand._links["wp:featuredmedia"]) _this4.config.getWithUrl(rand._links["wp:featuredmedia"][0].href).then(function (data) {
                value.image = data.source_url;
                console.log(value.image);
              });
            });
          } catch (error) {}
        }
      }, {
        key: "getRandomPost",
        value: function getRandomPost() {
          var rand = this.posts[Math.floor(Math.random() * this.posts.length)];
          if (rand.sticky == false) return rand;else this.getRandomPost();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsPage;
    }();

    NewsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], NewsPage.prototype, "infinite", void 0);
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.page.scss */
      "./src/app/news/news.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map