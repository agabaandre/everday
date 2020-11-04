(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories2-categories2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories2/categories2.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories2/categories2.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name=='Categories' && !config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item lines=\"full\" *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\"\n    class=\"animate-item\">\n    <ion-thumbnail slot=\"start\" class=\"animate-item delay-500ms\">\n      <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n      <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n    </ion-thumbnail>\n    <ion-label class=\"ion-padding\">\n      <ion-text>\n        <h2>{{c.name|translate}}</h2>\n        <p>{{c.count}} {{'Products'| translate }}</p>\n      </ion-text>\n    </ion-label>\n  </ion-item>\n  <div class=\"ion-text-center\">\n    <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n      {{ 'View All' | translate }}\n      <ion-icon name=\"caret-forward\"></ion-icon>\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/categorie-pages/categories2/categories2.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories2/categories2.module.ts ***!
  \*******************************************************************/
/*! exports provided: Categories2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories2PageModule", function() { return Categories2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _categories2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories2.page */ "./src/app/categorie-pages/categories2/categories2.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _categories2_page__WEBPACK_IMPORTED_MODULE_6__["Categories2Page"]
    }
];
let Categories2PageModule = class Categories2PageModule {
};
Categories2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_categories2_page__WEBPACK_IMPORTED_MODULE_6__["Categories2Page"]]
    })
], Categories2PageModule);



/***/ }),

/***/ "./src/app/categorie-pages/categories2/categories2.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories2/categories2.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-item {\n  --padding-start: 0;\n}\nion-content ion-item ion-thumbnail {\n  height: 140px;\n  width: 25%;\n  margin: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: var(--heading-font-size);\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ion-text-color);\n}\nion-content ion-item ion-label p {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  font-size: var(--sub-heading-font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzMi9jYXRlZ29yaWVzMi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzMi9jYXRlZ29yaWVzMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDTjtBREVNO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQVI7QURFTTtFQUNFLDJDQUFBO0VBQ0EsdUNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzMi9jYXRlZ29yaWVzMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/categorie-pages/categories2/categories2.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories2/categories2.page.ts ***!
  \*****************************************************************/
/*! exports provided: Categories2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories2Page", function() { return Categories2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let Categories2Page = class Categories2Page {
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
            this.router.navigateByUrl(this.config.currentRoute + "/categories2/" + id + "/" + name);
        }
    }
    openParentProducts() {
        this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/newest");
    }
};
Categories2Page.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Categories2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories2/categories2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories2.page.scss */ "./src/app/categorie-pages/categories2/categories2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Categories2Page);



/***/ })

}]);
//# sourceMappingURL=categorie-pages-categories2-categories2-module-es2015.js.map