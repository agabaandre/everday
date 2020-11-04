(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories4-categories4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories4/categories4.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories4/categories4.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\"\n        class=\"animate-item\" size=\"6\" class=\"ion-no-padding\">\n        <ion-card routerDirection=\"forward\">\n          <ion-thumbnail>\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n            <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n          </ion-thumbnail>\n          <ion-text>\n            <h6>{{c.name|translate}}</h6>\n            <p>{{c.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"ion-text-center\">\n    <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n      {{ 'View All' | translate }}\n      <ion-icon name=\"caret-forward\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/categorie-pages/categories4/categories4.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories4/categories4.module.ts ***!
  \*******************************************************************/
/*! exports provided: Categories4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories4PageModule", function() { return Categories4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _categories4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories4.page */ "./src/app/categorie-pages/categories4/categories4.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _categories4_page__WEBPACK_IMPORTED_MODULE_6__["Categories4Page"]
    }
];
let Categories4PageModule = class Categories4PageModule {
};
Categories4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_categories4_page__WEBPACK_IMPORTED_MODULE_6__["Categories4Page"]]
    })
], Categories4PageModule);



/***/ }),

/***/ "./src/app/categorie-pages/categories4/categories4.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories4/categories4.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-row {\n  padding-left: 1px;\n  padding-right: 1px;\n  box-shadow: 0 0 0 2px lightgrey;\n}\nion-content ion-row ion-col ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: 0.1px 0.1px 0 0 #bbb;\n}\nion-content ion-row ion-col ion-card ion-thumbnail {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 30%;\n  height: 90px;\n}\nion-content ion-row ion-col ion-card h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: var(--heading-font-size);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ion-text-color);\n}\nion-content ion-row ion-col ion-card p {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--sub-heading-font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNC9jYXRlZ29yaWVzNC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNC9jYXRlZ29yaWVzNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREVNO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0FSO0FERVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FWO0FERVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQVY7QURFUTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNBViIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNC9jYXRlZ29yaWVzNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggbGlnaHRncmV5O1xuICAgIGlvbi1jb2wge1xuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6ICNlZWU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAgMCAjYmJiO1xuXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBsaWdodGdyZXk7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6ICNlZWU7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAgMCAjYmJiO1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi10aHVtYm5haWwge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgcCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/categorie-pages/categories4/categories4.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories4/categories4.page.ts ***!
  \*****************************************************************/
/*! exports provided: Categories4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories4Page", function() { return Categories4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let Categories4Page = class Categories4Page {
    constructor(shared, config, router, activatedRoute) {
        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
    }
    ngOnInit() {
        this.parent = this.activatedRoute.snapshot.paramMap.get('parent');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        if (this.parent == undefined)
            this.parent = 0;
        if (this.name == undefined)
            this.name = 0;
        if (this.name == 0)
            this.name = "Categories";
    }
    openProducts(id, name) {
        let count = 0;
        for (let val of this.shared.allCategories) {
            if (val.parent == id) {
                count++;
            }
        }
        if (count == 0) {
            this.router.navigateByUrl(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
        }
        else {
            this.router.navigateByUrl(this.config.currentRoute + "/categories4/" + id + "/" + name);
        }
    }
    openParentProducts() {
        this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/newest");
    }
};
Categories4Page.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Categories4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories4/categories4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories4.page.scss */ "./src/app/categorie-pages/categories4/categories4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Categories4Page);



/***/ })

}]);
//# sourceMappingURL=categorie-pages-categories4-categories4-module-es2015.js.map