(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-list-news-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"news-list-page\">\n  <ion-list>\n    <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"showPostDetail(post)\" class=\"animated fadeIn\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{post.image}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{post.title.rendered}}\n          <br>\n          <small>\n            <ion-icon name=\"clock\"></ion-icon>\n            <ion-label>\n              {{post.date}}\n            </ion-label>\n          </small>\n        </h2>\n        <p [innerHTML]=\"post.content.rendered\"></p>\n      </ion-label>\n    </ion-item>\n    <ion-infinite-scroll #infinite (ionInfinite)=\"getPosts()\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/news-list/news-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.module.ts ***!
  \***********************************************/
/*! exports provided: NewsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPageModule", function() { return NewsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list.page */ "./src/app/news-list/news-list.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]
    }
];
let NewsListPageModule = class NewsListPageModule {
};
NewsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]]
    })
], NewsListPageModule);



/***/ }),

/***/ "./src/app/news-list/news-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news-list-page ion-list ion-item ion-thumbnail {\n  margin-bottom: auto;\n}\n.news-list-page ion-list ion-item ion-label {\n  margin-top: 4px;\n}\n.news-list-page ion-list ion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: bold;\n  white-space: normal;\n}\n.news-list-page ion-list ion-item ion-label h2 small {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #747474;\n  font-weight: normal;\n  margin-top: 5px;\n}\n.news-list-page ion-list ion-item ion-label h2 small ion-label {\n  padding-left: 4px;\n}\n.news-list-page ion-list ion-item ion-label p p:not(:first-child) {\n  display: none;\n}\n.news-list-page ion-list ion-item ion-label p p:first-child {\n  white-space: normal;\n  line-height: 1.4;\n  -webkit-line-clamp: 4;\n  display: -webkit-box;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL25ld3MtbGlzdC9uZXdzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLG1CQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7QUNGUjtBREdRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNEVjtBREVVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBWjtBRENZO0VBQ0UsaUJBQUE7QUNDZDtBRElVO0VBQ0UsYUFBQTtBQ0ZaO0FESVU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL25ld3MtbGlzdC9uZXdzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtbGlzdC1wYWdlIHtcbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgfVxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgcDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5uZXdzLWxpc3QtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5uZXdzLWxpc3QtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubmV3cy1saXN0LXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5uZXdzLWxpc3QtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDIgc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubmV3cy1saXN0LXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHNtYWxsIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm5ld3MtbGlzdC1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5ld3MtbGlzdC1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHA6Zmlyc3QtY2hpbGQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/news-list/news-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/news-list/news-list.page.ts ***!
  \*********************************************/
/*! exports provided: NewsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPage", function() { return NewsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NewsListPage = class NewsListPage {
    constructor(navCtrl, http, shared, config, loading, activatedRoute) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.posts = new Array;
        this.loadingServerData = true;
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPosts();
    }
    showPostDetail(post) {
        this.shared.singlePostData = post;
        this.navCtrl.navigateForward(this.config.currentRoute + "/news-detail");
    }
    ;
    getImagePost(post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then((data) => {
                post.image = data.source_url;
            });
    }
    //============================================================================================  
    //getting list of posts
    getPosts() {
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerData = false;
        }
        this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id + "&" + this.config.productsArguments).then((data) => {
            this.infinite.complete(); //stopping infinite scroll loader
            if (this.page == 1) {
                this.posts = [];
                this.infinite.disabled = false;
                this.loading.hide();
            }
            this.page++;
            data.forEach((value, index) => {
                this.getImagePost(value);
                this.posts.push(value);
            });
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                this.infinite.disabled = true; //disabling infinite scroll
                if (this.posts.length != 0) {
                    // this.shared.toast("All Posts Loaded!");
                }
            }
            this.loadingServerData = true;
        }, err => {
            this.infinite.disabled = true;
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    }
    ;
    ngOnInit() {
    }
};
NewsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], NewsListPage.prototype, "infinite", void 0);
NewsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-list',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-list.page.scss */ "./src/app/news-list/news-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], NewsListPage);



/***/ })

}]);
//# sourceMappingURL=news-list-news-list-module-es2015.js.map