(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories6-categories6-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories6/categories6.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories6/categories6.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n            <ion-back-button icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-menu-button>\n        <ion-title *ngIf=\"name==0\">\n            {{'Categories'|translate}}\n        </ion-title>\n        <ion-title *ngIf=\"name!=0\">\n            {{name}}\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n            <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-card *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\" class=\"animate-item\">\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n            <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n            <div>\n                <h2>{{c.name }}</h2>\n                <!-- <p>{{c.count}} {{'Products'| translate }}</p> -->\n            </div>\n        </ion-card>\n    </ion-list>\n\n    <div class=\"ion-text-center\">\n        <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n            {{ 'Visit Shop' | translate }}\n            <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/categorie-pages/categories6/categories6.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories6/categories6.module.ts ***!
  \*******************************************************************/
/*! exports provided: Categories6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories6PageModule", function() { return Categories6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _categories6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories6.page */ "./src/app/categorie-pages/categories6/categories6.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _categories6_page__WEBPACK_IMPORTED_MODULE_6__["Categories6Page"]
    }
];
let Categories6PageModule = class Categories6PageModule {
};
Categories6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_categories6_page__WEBPACK_IMPORTED_MODULE_6__["Categories6Page"]]
    })
], Categories6PageModule);



/***/ }),

/***/ "./src/app/categorie-pages/categories6/categories6.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories6/categories6.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nion-content ion-list ion-card {\n  height: 235px;\n}\nion-content ion-list ion-card img {\n  -webkit-filter: brightness(0.6);\n          filter: brightness(0.6);\n  width: 100%;\n}\nion-content ion-list ion-card div {\n  position: absolute;\n  top: 32%;\n  text-align: center;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n  height: 250px;\n}\nion-content ion-list ion-card div h2 {\n  margin-top: 18px;\n  font-size: var(--heading-font-size);\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-card div p {\n  font-size: var(--sub-heading-font-size);\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNi9jYXRlZ29yaWVzNi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNi9jYXRlZ29yaWVzNi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVJO0VBQ0UsYUFBQTtBQ0FOO0FEQ007RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ1I7QURBUTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VWO0FEQVE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNi9jYXRlZ29yaWVzNi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgIGhlaWdodDogMjM1cHg7XG4gICAgICBpbWcge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzIlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQge1xuICBoZWlnaHQ6IDIzNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIGRpdiBoMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBkaXYgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/categorie-pages/categories6/categories6.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories6/categories6.page.ts ***!
  \*****************************************************************/
/*! exports provided: Categories6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories6Page", function() { return Categories6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let Categories6Page = class Categories6Page {
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
            this.router.navigateByUrl(this.config.currentRoute + "/categories6/" + id + "/" + name);
        }
    }
    openParentProducts() {
        this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/newest");
    }
};
Categories6Page.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Categories6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories6',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories6.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories6/categories6.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories6.page.scss */ "./src/app/categorie-pages/categories6/categories6.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Categories6Page);



/***/ })

}]);
//# sourceMappingURL=categorie-pages-categories6-categories6-module-es2015.js.map