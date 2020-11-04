function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsBannerBannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner-component\">\n\n  <div *ngIf=\"shared.banners.length==0\">\n    <ion-skeleton-text animated style=\"height: 211px;\">\n    </ion-skeleton-text>\n  </div>\n  <div *ngIf=\" shared.banners.length !=0\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" [class]=\"config.bannerStyle\">\n      <ion-slide *ngFor=\"let b of shared.banners\" class=\"ion-no-padding animate-item\" (click)=\"bannerClick(b)\">\n        <img src=\"{{b.banners_image}}\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- For Home-6 -->\n<!-- =========================================================== with name and product -->\n<div class=\"name\" *ngIf=\"type=='withName'\">\n\n    <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n            <!-- For Real Products -->\n            <ion-card *ngIf=\"c!=1\">\n\n                <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n                <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n\n                <ion-text>\n                    <h6>{{c.name}}</h6>\n                    <!-- <p>{{c.count}} Products</p> -->\n                </ion-text>\n            </ion-card>\n            <!-- For Skeleton -->\n            <ion-card *ngIf=\"c==1\" class=\"skeleton-name\">\n                <ion-skeleton-text animated>\n                </ion-skeleton-text>\n                <p>\n                    <ion-skeleton-text animated>\n                    </ion-skeleton-text>\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n</div>\n\n<!-- For Home-7 -->\n<!-- =========================================================== with name and product count -->\n<div class=\"name-count\" *ngIf=\"type=='name&count'\">\n    <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n            <!-- For Real Products -->\n            <ion-card *ngIf=\"c!=1\" class=\"card-h7\">\n                <ion-avatar>\n                    <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n                    <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n                </ion-avatar>\n                <ion-text>\n                    <h6>{{c.name}}</h6>\n                    <!-- <p>{{c.count}} Products</p> -->\n                </ion-text>\n            </ion-card>\n            <!-- For Skeleton -->\n            <ion-card *ngIf=\"c==1\">\n                <ion-skeleton-text animated>\n                </ion-skeleton-text>\n                <p>\n                    <ion-skeleton-text animated>\n                    </ion-skeleton-text>\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</div>\n\n<!-- For Home-8 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"round\" *ngIf=\"type=='roundImage'\">\n    <ion-slides class=\"animate-item\" [options]=\"sliderConfig2\">\n        <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n            <!-- For Real Products -->\n            <ion-card *ngIf=\"c!=1\" class=\"card-h8\">\n                <ion-avatar>\n                    <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n                    <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n                </ion-avatar>\n                <ion-text>\n                    <h6>{{c.name}}</h6>\n                    <!-- <p>{{c.count}} Products</p> -->\n                </ion-text>\n\n            </ion-card>\n            <!-- For Skeleton -->\n            <ion-card *ngIf=\"c==1\" class=\"card-skeleton-h8\">\n                <ion-avatar>\n                    <ion-skeleton-text class=\"skeleton-h8\" animated>\n                    </ion-skeleton-text>\n                </ion-avatar>\n                <p>\n                    <ion-skeleton-text animated>\n                    </ion-skeleton-text>\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</div>\n\n<!-- // For Home-9 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"grid\" *ngIf=\"type=='grid'\">\n    <ion-grid class=\"ion-no-padding categories-grid\">\n        <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" *ngFor=\"let c of shared.categories | slice:0:6;\" (click)=\"openSubCategories(c)\">\n                <ion-card class=\"card-h9\">\n                    <ion-avatar class=\"avatar-h9\">\n                        <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n                        <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n                    </ion-avatar>\n                    <ion-text>\n                        <h6>{{c.name}}</h6>\n                        <!-- <p>{{c.count}} Products</p> -->\n                    </ion-text>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-component animate-item\">\n    <!-- skeleton text until data not loaded -->\n    <div *ngIf=\"p==1\" style=\"padding-left: 10px;\" class=\"ion-text-center\">\n        <ion-skeleton-text animated style=\"width: 100%; height: 130px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%; height: 15px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 15px;\">\n        </ion-skeleton-text>\n    </div>\n\n    <div *ngIf=\"p!=1\" class=\"animated fadeIn\">\n        <div *ngIf=\"type=='normal' || type=='recent' || type=='wishList'\">\n\n            <!---------------------------------------------------------  style default -------------------------------->\n            <ion-card class=\"default\" *ngIf=\"config.productCardStyle==1\">\n                <div>\n                    <div *ngIf=\"p.on_sale==true\">{{ 'Sale' | translate }}</div>\n                    <div *ngIf=\"p.featured\">{{'Featured' | translate }}</div>\n                </div>\n                <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"10\" class=\"ion-no-padding\">\n                            <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n                            <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='normal'\">\n                        <ion-button [color]=\"getButtonColor()\" (click)=\"buttonClick()\">{{getButtonText()|translate}}\n                        </ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n\n\n            <!---------------------------------------------------------  style 1-------------------------------->\n            <ion-card class=\"style21 ion-text-center\" *ngIf=\"config.productCardStyle==21\">\n\n                <div class=\"main-img\"><img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\"></div>\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n\n            <!---------------------------------------------------------  style 2 -------------------------------->\n            <ion-card class=\"style11 ion-text-center\" *ngIf=\"config.productCardStyle==11\">\n                <div class=\"main-img\"><img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\"></div>\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n            </ion-card>\n\n\n            <!---------------------------------------------------------  style  -------------------------------->\n            <ion-card class=\"default\" *ngIf=\"config.productCardStyle==2\">\n                <div>\n                    <div *ngIf=\"p.on_sale==true\">{{ 'Sale' | translate }}</div>\n                    <div *ngIf=\"p.featured\">{{'Featured' | translate }}</div>\n                </div>\n                <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"10\" class=\"ion-no-padding\">\n                            <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n                            <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style3 ion-text-start\" *ngIf=\"config.productCardStyle==3\">\n\n                <div class=\"main-image\">\n                    <ion-badge color=\"primary\" class=\"ion-text-start\" mode=ios *ngIf=\"pDiscount()\">Discounted\n\n                    </ion-badge>\n\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                            <!-- <p class=\"category\">({{getCategoryName()}})</p> -->\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\" style=\"height:45px; background:#FEFFFF;\">\n                        <ion-col size=\"10\">\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"ion-float-end\" [name]=\"getHeartName()\">\n                            </ion-icon>\n                            <ion-icon (click)=\"buttonClick()\" class=\"ion-float-end\" [color]=\"getButtonColor()\" name=\"basket\">\n                            </ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'Remove Item'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style6 ion-text-start\" *ngIf=\"config.productCardStyle==6\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                    <ion-fab-button size=small color=\"danger\">\n                        <ion-icon (click)=\"buttonClick()\" name=\"basket\">\n                        </ion-icon>\n                    </ion-fab-button>\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding colum-2\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                            <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style8 ion-text-start\" *ngIf=\"config.productCardStyle==8\">\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n                <div class=\"rating-value\">({{getParsedRating()}})</div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n            </ion-card>\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style9 ion-text-start\" *ngIf=\"config.productCardStyle==9\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                    <ion-fab-button size=small color=\"danger\">\n                        <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\">\n                        </ion-icon>\n                    </ion-fab-button>\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=6>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=6>\n                            <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n\n            <!---------------------------------------------------------  style  -------------------------------->\n            <ion-card class=\"style12\" *ngIf=\"config.productCardStyle==12\">\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name ion-text-start\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price ion-text-end\"></span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n            </ion-card>\n\n\n            <!---------------------------------------------------------  style  -------------------------------->\n\n            <ion-card class=\"style5 ion-text-center\" *ngIf=\"config.productCardStyle==5\">\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"2\">\n                            <ion-icon (click)=\"clickWishList()\" color=\"secondary\" [name]=\"getHeartName()\">\n                            </ion-icon>\n                        </ion-col>\n                        <ion-col size=\"8\">\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <ion-icon (click)=\"buttonClick()\" [color]=\"getButtonColor()\" name=\"basket\">\n                            </ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n\n            <!---------------------------------------------------------  style  -------------------------------->\n            <ion-card class=\"style7\" *ngIf=\"config.productCardStyle==7\">\n                <div class=\"floating-tags\">\n                    <span class=\"ion-no-padding ion-text-left\" *ngIf=\"p.on_sale\">\n            <ion-badge color=\"secondary\" class=\"first\">\n              {{ 'Sale' | translate }}</ion-badge>\n          </span>\n                    <span class=\"ion-no-padding ion-text-left\" *ngIf=\"p.featured\">\n            <ion-badge color=\"danger\" class=\"second\">\n              {{'Featured' | translate }}</ion-badge>\n          </span>\n                </div>\n                <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"10\" class=\"ion-no-padding\">\n                            <h4 [innerHTML]=\"p.price_html\" class=\"price\"></h4>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n                            <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style13 ion-text-center\" *ngIf=\"config.productCardStyle==13\">\n\n                <ion-badge color=\"light\" class=\"heart-top-right price\">\n                    <span [innerHTML]=\"p.price_html\" class=\"innerprice\"></span>\n                </ion-badge>\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                    <ion-grid class=\"floating-tags\">\n                        <ion-row class=\"ion-no-padding\" *ngIf=\"p.on_sale==true\">\n                            <ion-badge color=\"secondary\">\n                                {{ 'Sale' | translate }}</ion-badge>\n                        </ion-row>\n                        <ion-row class=\"ion-no-padding\" *ngIf=\"p.featured\">\n                            <ion-badge color=\"danger\">\n                                {{'Featured' | translate }}</ion-badge>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding paddingb5\">\n                        <ion-col>\n                            <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style15 ion-text-center\" *ngIf=\"config.productCardStyle==15\">\n\n                <ion-row class=\"ion-no-padding\">\n                    <ion-col>\n                        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                    </ion-col>\n                </ion-row>\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col class=\"rating-colum\">\n                            <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n\n\n            </ion-card>\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style16 ion-text-start\" *ngIf=\"config.productCardStyle==16\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n\n\n                    <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-no-padding\">\n                            <ion-col>\n                                <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-row class=\"ion-no-padding\">\n                            <ion-col>\n                                <span class=\"product-ratings ion-float-left\" *ngIf=\"p.reviews_allowed\">\n                  <div class=\"stars-outer\">\n                    <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                  </div>\n                </span>\n\n                                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"ion-float-right\" [name]=\"getHeartName()\">\n                                </ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                                {{'REMOVE'|translate}}</ion-button>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n            <!---------------------------------------------------------  style default -------------------------------->\n            <ion-card class=\"default style17\" *ngIf=\"config.productCardStyle==17\">\n\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=8 class=\"ion-no-padding\">\n                            <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n                        </ion-col>\n                        <ion-col size=4 class=\"ion-text-center ion-no-padding\">\n                            <ion-text class=\"price\">\n                                <ion-icon name=\"star\"></ion-icon>{{getParsedRating()}}\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='normal'\">\n                        <ion-button [color]=\"getButtonColor()\" (click)=\"buttonClick()\">{{getButtonText()|translate}}\n                        </ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style3 style18 ion-text-start\" *ngIf=\"config.productCardStyle==18\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                            <p class=\"category\">({{getCategoryName()}})</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=7>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=5 class=\"cart\">\n                            <ion-icon name=\"remove\" (click)=\"removingToCart()\"></ion-icon>\n                            <ion-text>\n                                <p>{{cartQuantity}}</p>\n                            </ion-text>\n                            <ion-icon name=\"add\" (click)=\"addingToCart()\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style9 style19 ion-text-start\" *ngIf=\"config.productCardStyle==19\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                    <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                    </ion-icon>\n                    <ion-grid class=\"floating-tags\">\n                        <ion-row class=\"ion-no-padding\" *ngIf=\"p.on_sale==true\">\n                            <ion-badge>\n                                {{ 'Sale' | translate }}</ion-badge>\n                        </ion-row>\n                        <ion-row class=\"ion-no-padding\" *ngIf=\"p.featured\">\n                            <ion-badge>\n                                {{'Featured' | translate }}</ion-badge>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                            <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n            <!---------------------------------------------------------  style  -------------------------------->\n\n            <ion-card class=\"style4 ion-text-center\" *ngIf=\"config.productCardStyle==4\">\n\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"6\">\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-badge [color]=\"getButtonColor()\" (click)=\"buttonClick()\" class=\"ellipsis\">\n                                <span>{{getButtonText()|translate}}</span>\n                            </ion-badge>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n            <!---------------------------------------------------------  style -------------------------------->\n            <ion-card class=\"style20 ion-text-center\" *ngIf=\"config.productCardStyle==20\">\n                <div class=\"main-img\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n\n                    <div class=\"buttons-img\">\n\n                        <ion-button size=\"small\" [color]=\"getButtonColor()\" (click)=\"buttonClick()\">\n                            {{getButtonText()|translate}}\n                            <ion-icon slot=\"end\" name=\"basket\"></ion-icon>\n                        </ion-button>\n                        <ion-button size=\"small\" color=\"secondary\" (click)=\"clickWishList()\">\n                            <ion-icon slot=\"icon-only\" [name]=\"getHeartName()\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </div>\n                <p class=\"category\">{{getCategoryName()}}</p>\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style3 style18 ion-text-start\" *ngIf=\"config.productCardStyle==22\">\n\n                <div class=\"main-image\">\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                            <p class=\"category\">({{getCategoryName()}})</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=7>\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                        <ion-col size=5 class=\"cart\">\n                            <ion-icon name=\"remove-circle\" (click)=\"removingToCart()\"></ion-icon>\n                            <ion-text>\n                                <p>{{cartQuantity}}</p>\n                            </ion-text>\n                            <ion-icon name=\"add-circle\" (click)=\"addingToCart()\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n            <!--------------------------------------------------------- style   -------------------------------->\n\n            <ion-card class=\"style10 ion-text-center\" *ngIf=\"config.productCardStyle==10\">\n\n                <div class=\"main-image\">\n                    <ion-badge color=\"light\" mode=ios [innerHTML]=\"p.price_html\" class=\"price\">\n                    </ion-badge>\n                    <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                </div>\n\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col>\n                            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                            <p class=\"category\">({{getCategoryName()}})</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n\n            <!---------------------------------------------------------  style  -------------------------------->\n            <ion-card class=\"default style14 ion-text-center\" *ngIf=\"config.productCardStyle==14\">\n                <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n                <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row class=\"ion-no-padding\">\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\n                            <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n                        <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n                            {{'REMOVE'|translate}}</ion-button>\n                    </ion-row>\n                </ion-grid>\n                <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </ion-row>\n            </ion-card>\n\n            <!------------------------------------------- end of simple card styles------------------------------------------ -->\n        </div>\n\n\n        <!-- //====================================  list view for shop page ==================================== -->\n        <ion-item lines=\"none\" *ngIf=\"type=='list'\" class=\"list-product-design\">\n            <ion-thumbnail slot=\"start\">\n                <ion-img class=\"badge-img\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n                <img *ngIf=\"p.images.length!=0\" src=\"{{p.images[0].src}}\" (click)=\"showProductDetail()\">\n                <img *ngIf=\"p.images.length==0\" src=\"assets/woocommerce-placeholder.png\" (click)=\"showProductDetail()\">\n            </ion-thumbnail>\n            <ion-label>\n                <p (click)=\"showProductDetail()\">{{p.name}}</p>\n                <p [innerHTML]=\"p.price_html\"></p>\n                <ion-row>\n                    <ion-col>\n                        <ion-button color=\"secondary\" id=\"config.cartButton==1 && p.stock_status=='instock' && p.type =='simple'\" (click)=\"addToCart(p)\" item-start>{{'ADD TO CART'|translate}}</ion-button>\n                        <ion-button color=\"secondary\" (click)=\"showProductDetail()\" id=\"config.cartButton==1 && p.stock_status=='instock' && p.type!='simple'\" item-start>\n                            {{'DETAILS'|translate}}</ion-button>\n                        <ion-button color=\"danger\" id=\"config.cartButton==1 && p.stock_status!='instock'\" item-start>\n                            {{'OUT OF STOCK'|translate}}</ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked==0\" (click)=\"clickWishList()\" name=\"heart-outline\"></ion-icon>\n                <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked!=0\" (click)=\"clickWishList()\" name=\"heart\"></ion-icon>\n            </ion-label>\n\n            <div class=\"img-div\">\n                <div *ngIf=\"p.on_sale==true\" class=\"sale\">{{'SALE'|translate}}</div>\n                <div *ngIf=\"p.featured\" class=\"featured\">{{'Featured'|translate}}</div>\n            </div>\n            <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\n            </ion-row>\n        </ion-item>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n        <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n            <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n<ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsSlidingTabsSlidingTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sliding-tabs\">\n  <ion-slides *ngIf=\"type!='image'\" [options]=\"sliderConfig\">\n    <ion-slide class=\"first-slide\" [class.selected]=\"selected==0\" *ngIf=\"shared.allCategories!=null\"\n      (click)=\"changeTab('0')\">\n      {{'All'|translate}}</ion-slide>\n    <ion-slide [class.selected]=\"selected==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- Home-2 For Segments With Image -->\n  <ion-slides *ngIf=\"type=='image'\" [options]=\"sliderConfig\">\n    <ion-slide class=\"first-slide\" [class.selected]=\"selected==0\" *ngIf=\"shared.allCategories!=null\"\n      (click)=\"changeTab('0')\">\n      <img src=\"assets/home-page/category.png\">\n      {{'All'|translate}}</ion-slide>\n    <ion-slide [class.selected]=\"selected==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n      <img *ngIf=\"c.image\" src=\"{{c.image.src}}\">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n  <!-- scrollable segment divisions -->\n  <div [ngSwitch]=\"selected\">\n  </div>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- infinite scroll -->\n  <ion-infinite-scroll threshold=\"10px\" #infinite (ionInfinite)=\"getProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsVendorListVendorListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"config.showVendorInfo || config.showWcVendorInfo\">\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      {{'Featured Vendors'|translate}}\n    </ion-button>\n  </ion-row>\n  <div *ngIf=\"shared.vendors.length!=0 && shared.vendors[0]!=1\" class=\"module\">\n    <!-- vendor list swipe slider -->\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n        <ion-card>\n          <img src=\"{{c.banner}}\" />\n          <p>{{c.name}}</p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <!-- skeleton text until data not loaded -->\n  <ion-slides [options]=\"sliderConfig\" *ngIf=\"shared.vendors[0]==1\">\n    <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n      <ion-card *ngIf=\"c==1\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./src/components/banner/banner.component.scss":
  /*!*****************************************************!*\
    !*** ./src/components/banner/banner.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsBannerBannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner-component ion-slides {\n  --bullet-background: var(--ion-color-primary);\n  --bullet-background-active: var(--ion-color-secondary);\n  --progress-bar-background: var(--ion-color-secondary-contrast);\n  --progress-bar-background-active: var(--ion-color-secondary);\n  min-height: 180;\n}\n.banner-component .squareBullets .swiper-pagination-bullet {\n  width: 12px;\n  border-radius: 3px;\n}\n.banner-component .bottomBulletsWhiteBackground .swiper-pagination-bullet {\n  padding: 6px;\n}\n.banner-component .bottomBulletsWhiteBackground .swiper-pagination-bullets {\n  position: unset;\n  margin-top: 10px;\n  margin-left: 50%;\n  margin-right: auto;\n}\n.banner-component .progressBar .swiper-pagination-progressbar {\n  top: auto;\n  bottom: 0;\n}\n.banner-component .verticalRightBullets .swiper-pagination-bullet {\n  display: block;\n  margin: 5px;\n  border-radius: 3px;\n  padding: 8px 0;\n}\n.banner-component .verticalRightBullets .swiper-pagination-bullets {\n  left: auto;\n  right: 5px;\n  width: auto;\n  bottom: auto;\n  margin: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner-component .verticalLeftBullets .swiper-pagination-bullet {\n  display: block;\n  margin: 5px;\n  border-radius: 3px;\n  padding: 8px 0;\n}\n.banner-component .verticalLeftBullets .swiper-pagination-bullets {\n  left: 5px;\n  width: auto;\n  bottom: auto;\n  margin: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner-component .numberBullets .swiper-pagination-bullet {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  opacity: 1;\n  color: var(--ion-color-medium-contrast);\n  background: var(--ion-color-medium);\n}\n.banner-component .numberBullets .swiper-pagination-bullet-active {\n  color: var(--ion-color-secondary-contrast);\n  background: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZDQUFBO0VBQ0Esc0RBQUE7RUFDQSw4REFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtBQ0FKO0FES0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNITjtBRE9JO0VBQ0UsWUFBQTtBQ0xOO0FET0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTE47QURTSTtFQUNFLFNBQUE7RUFDQSxTQUFBO0FDUE47QURZSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDVk47QURZSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0FDVk47QURlSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDYk47QURlSTtFQUNFLFNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUNkTjtBRG1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtBQ2pCTjtBRG1CSTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7QUNqQk4iLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItY29tcG9uZW50IHtcbiAgaW9uLXNsaWRlcyB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgbWluLWhlaWdodDogMTgwO1xuICAgIC8vYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLnNxdWFyZUJ1bGxldHMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG4gIC5ib3R0b21CdWxsZXRzV2hpdGVCYWNrZ3JvdW5kIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICB9XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIC5wcm9ncmVzc0JhciB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudmVydGljYWxSaWdodEJ1bGxldHMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgfVxuXG4gIC52ZXJ0aWNhbExlZnRCdWxsZXRzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICB9XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgLy9yaWdodDogNXB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICB9XG5cbiAgLm51bWJlckJ1bGxldHMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi5iYW5uZXItY29tcG9uZW50IGlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWluLWhlaWdodDogMTgwO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnNxdWFyZUJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYmFubmVyLWNvbXBvbmVudCAuYm90dG9tQnVsbGV0c1doaXRlQmFja2dyb3VuZCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgcGFkZGluZzogNnB4O1xufVxuLmJhbm5lci1jb21wb25lbnQgLmJvdHRvbUJ1bGxldHNXaGl0ZUJhY2tncm91bmQgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5iYW5uZXItY29tcG9uZW50IC5wcm9ncmVzc0JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbn1cbi5iYW5uZXItY29tcG9uZW50IC52ZXJ0aWNhbFJpZ2h0QnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnZlcnRpY2FsUmlnaHRCdWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnZlcnRpY2FsTGVmdEJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5iYW5uZXItY29tcG9uZW50IC52ZXJ0aWNhbExlZnRCdWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgbGVmdDogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uYmFubmVyLWNvbXBvbmVudCAubnVtYmVyQnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmJhbm5lci1jb21wb25lbnQgLm51bWJlckJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/banner/banner.component.ts":
  /*!***************************************************!*\
    !*** ./src/components/banner/banner.component.ts ***!
    \***************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent(shared, navCtrl, config, http, loading, applicationRef) {
        _classCallCheck(this, BannerComponent);

        this.shared = shared;
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.slideOpts = {
          autoplay: {
            delay: 2500
          }
        }; //===============================================================================================
        //on click image banners

        this.bannerClick = function (image) {
          //  console.log(image);
          if (image.type == 'category') {
            this.navCtrl.navigateForward(this.config.currentRoute + "/products/" + image.banners_url + "/0/newest");
          } else if (image.type == 'product') {
            this.getSingleProductDetail(parseInt(image.banners_url));
          } else {
            this.navCtrl.navigateForward(this.config.currentRoute + "/products/0/0/" + image.type);
          }
        };
      }

      _createClass(BannerComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {} //===============================================================================================
        //getting single product data

      }, {
        key: "getSingleProductDetail",
        value: function getSingleProductDetail(id) {
          var _this = this;

          this.loading.show(); //if (this.type == 'recent' || this.type == 'wishList') {

          this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            //this.shared.showAlert("loaded");
            _this.loading.hide();

            _this.shared.singleProductPageData.push(data);

            _this.navCtrl.navigateForward(_this.config.currentRoute + "/product-detail/" + data.id);

            _this.shared.addToRecent(data);
          }, function (err) {
            _this.loading.hide();

            _this.shared.showAlert("Item not Available!");

            console.log(err);
          });
        }
      }, {
        key: "applyFlipEffect",
        value: function applyFlipEffect() {
          this.slideOpts = {
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                var overwriteParams = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  spaceBetween: 0,
                  virtualTranslate: true
                };
                swiper.params = Object.assign(swiper.params, overwriteParams);
                swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var $ = swiper.$,
                    slides = swiper.slides,
                    rtl = swiper.rtlTranslate;

                for (var i = 0; i < slides.length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var progress = $slideEl[0].progress;

                  if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                  }

                  var offset$$1 = $slideEl[0].swiperSlideOffset;
                  var rotate = -180 * progress;
                  var rotateY = rotate;
                  var rotateX = 0;
                  var tx = -offset$$1;
                  var ty = 0;

                  if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                  } else if (rtl) {
                    rotateY = -rotateY;
                  }

                  $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                  if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                      shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
                      $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                      shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                  }

                  $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                var slides = swiper.slides,
                    activeIndex = swiper.activeIndex,
                    $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

                if (swiper.params.virtualTranslate && duration !== 0) {
                  var eventTriggered = false; // eslint-disable-next-line

                  slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                      $wrapperEl.trigger(triggerEvents[i]);
                    }
                  });
                }
              }
            }
          };
        }
      }, {
        key: "applyCubeEffect",
        value: function applyCubeEffect() {
          this.slideOpts = {
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                var overwriteParams = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: false,
                  virtualTranslate: true
                };
                this.params = Object.assign(this.params, overwriteParams);
                this.originalParams = Object.assign(this.originalParams, overwriteParams);
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var $el = swiper.$el,
                    $wrapperEl = swiper.$wrapperEl,
                    slides = swiper.slides,
                    swiperWidth = swiper.width,
                    swiperHeight = swiper.height,
                    rtl = swiper.rtlTranslate,
                    swiperSize = swiper.size;
                var params = swiper.params.cubeEffect;
                var isHorizontal = swiper.isHorizontal();
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var wrapperRotate = 0;
                var $cubeShadowEl;

                if (params.shadow) {
                  if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                      $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                      $wrapperEl.append($cubeShadowEl);
                    }

                    $cubeShadowEl.css({
                      height: "".concat(swiperWidth, "px")
                    });
                  } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                      $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                      $el.append($cubeShadowEl);
                    }
                  }
                }

                for (var i = 0; i < slides.length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideIndex = i;

                  if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                  }

                  var slideAngle = slideIndex * 90;
                  var round = Math.floor(slideAngle / 360);

                  if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                  }

                  var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                  var tx = 0;
                  var ty = 0;
                  var tz = 0;

                  if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                  } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                  } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                  } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                  }

                  if (rtl) {
                    tx = -tx;
                  }

                  if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                  }

                  var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

                  if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                  }

                  $slideEl.transform(transform$$1);

                  if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                      shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                      shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                  }
                }

                $wrapperEl.css({
                  '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
                });

                if (params.shadow) {
                  if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
                  } else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset$$1 = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
                  }
                }

                var zFactor = swiper.browser.isSafari ? -swiperSize / 2 : 0;
                $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                var $el = swiper.$el,
                    slides = swiper.slides;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                  $el.find('.swiper-cube-shadow').transition(duration);
                }
              }
            }
          };
        }
      }, {
        key: "applyCoverFlowEffect",
        value: function applyCoverFlowEffect() {
          this.slideOpts = {
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var swiperWidth = swiper.width,
                    swiperHeight = swiper.height,
                    slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl,
                    slidesSizesGrid = swiper.slidesSizesGrid,
                    $ = swiper.$;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform$$1 = swiper.translate;
                var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth; // Each slide offset from center

                for (var i = 0, length = slides.length; i < length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideSize = slidesSizesGrid[i];
                  var slideOffset = $slideEl[0].swiperSlideOffset;
                  var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                  var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                  var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                  var translateZ = -translate * Math.abs(offsetMultiplier);
                  var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                  var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

                  if (Math.abs(translateX) < 0.001) translateX = 0;
                  if (Math.abs(translateY) < 0.001) translateY = 0;
                  if (Math.abs(translateZ) < 0.001) translateZ = 0;
                  if (Math.abs(rotateY) < 0.001) rotateY = 0;
                  if (Math.abs(rotateX) < 0.001) rotateX = 0;
                  var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
                  $slideEl.transform(slideTransform);
                  $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                  if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                      $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                      $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                  }
                } // Set correct perspective for IE10


                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                  var ws = $wrapperEl[0].style;
                  ws.perspectiveOrigin = "".concat(center, "px 50%");
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              }
            }
          };
        }
      }, {
        key: "applyFadeEffect",
        value: function applyFadeEffect() {
          this.slideOpts = {
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
                var overwriteParams = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  spaceBetween: 0,
                  virtualTranslate: true
                };
                swiper.params = Object.assign(swiper.params, overwriteParams);
                swiper.params = Object.assign(swiper.originalParams, overwriteParams);
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var slides = swiper.slides;

                for (var i = 0; i < slides.length; i += 1) {
                  var $slideEl = swiper.slides.eq(i);
                  var offset$$1 = $slideEl[0].swiperSlideOffset;
                  var tx = -offset$$1;
                  if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                  var ty = 0;

                  if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                  }

                  var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                  $slideEl.css({
                    opacity: slideOpacity
                  }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                var slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration);

                if (swiper.params.virtualTranslate && duration !== 0) {
                  var eventTriggered = false;
                  slides.transitionEnd(function () {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                      $wrapperEl.trigger(triggerEvents[i]);
                    }
                  });
                }
              }
            }
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.config.bannerAnimationEffect == 'fade') this.applyFadeEffect();else if (this.config.bannerAnimationEffect == 'cube') this.applyCubeEffect();else if (this.config.bannerAnimationEffect == 'flip') this.applyFlipEffect();else if (this.config.bannerAnimationEffect == 'coverFlow') this.applyCoverFlowEffect();

          if (this.config.bannerStyle == "bottomBulletsWhiteBackground") {
            this.slideOpts.pagination = {
              el: '.swiper-pagination',
              dynamicBullets: true
            };
          }

          if (this.config.bannerStyle == "progressBar") {
            this.slideOpts.pagination = {
              el: '.swiper-pagination',
              type: 'progressbar',
              progressbarOpposite: false
            };
          }

          if (this.config.bannerStyle == "numberBullets") {
            this.slideOpts.pagination = {
              el: '.swiper-pagination',
              renderBullet: function renderBullet(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
            };
          }
        }
      }]);

      return BannerComponent;
    }();

    BannerComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./banner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./banner.component.scss */
      "./src/components/banner/banner.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], BannerComponent);
    /***/
  },

  /***/
  "./src/components/categories/categories.component.scss":
  /*!*************************************************************!*\
    !*** ./src/components/categories/categories.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name .swiper-slide {\n  width: 40%;\n}\n.name ion-card {\n  margin-right: 2px !important;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  margin-right: 0px;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name ion-card img {\n  width: 100%;\n}\n.name ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #000;\n}\n.name ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: #747474;\n}\n.name .skeleton-name {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name .skeleton-name ion-skeleton-text {\n  height: 90px;\n}\n.name .skeleton-name p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name .skeleton-name ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round .swiper-slide {\n  width: 40%;\n}\n.round ion-slides ion-slide ion-card {\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.round ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  height: 90px;\n}\n.round ion-slides ion-slide ion-card p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: black;\n}\n.round ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: grey;\n}\n.name-count .swiper-slide {\n  width: 40%;\n}\n.name-count ion-slides ion-slide ion-card {\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name-count ion-slides ion-slide ion-card:nth-child(2) {\n  background: none;\n}\n.name-count ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  height: 90px;\n}\n.name-count ion-slides ion-slide ion-card:last-child p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.name-count ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.name-count ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n}\n.grid ion-card {\n  min-height: 144px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.grid ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.grid ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.grid ion-card img {\n  width: 100%;\n}\n.grid ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: #000;\n}\n.grid ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  margin-top: 0;\n  color: #747474;\n}\n.card-h7 {\n  margin-right: 0 !important;\n}\n.card-h8 {\n  background: none !important;\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 {\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 .skeleton-h8 {\n  height: 90% !important;\n}\n.card-h9 {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.card-h9 .avatar-h9 {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.card-h9 h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n}\n.card-h9 p {\n  white-space: nowrap;\n  margin-top: 0;\n}\n.name {\n  font-size: var(--heading-font-size) !important;\n}\n.count {\n  font-size: var(--sub-heading-font-size) !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FDQVI7QURFSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQ1E7RUFDSSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ1o7QURDUTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ1o7QURLSTtFQUNJLFVBQUE7QUNGUjtBRE1ZO0VBTUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBY0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdEJoQjtBRERnQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dwQjtBREVnQjtFQUNJLFlBQUE7QUNBcEI7QURFZ0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FwQjtBREVnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0FwQjtBREtnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDSHBCO0FES2dCO0VBQ0ksV0FBQTtBQ0hwQjtBREtnQjtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hwQjtBREtnQjtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0hwQjtBRFdJO0VBQ0ksVUFBQTtBQ1JSO0FEWVk7RUE0QkksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDckNoQjtBRFFnQjtFQUNJLGdCQUFBO0FDTnBCO0FEUWdCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTnBCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ05wQjtBRE9vQjtFQUNJLFlBQUE7QUNMeEI7QURPb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0x4QjtBRE9vQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0x4QjtBRFdnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDVHBCO0FEV2dCO0VBQ0ksV0FBQTtBQ1RwQjtBRFdnQjtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVHBCO0FEV2dCO0VBQ0ksdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNUcEI7QURpQkk7RUFDSSxpQkFBQTtFQU1BLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNuQlI7QURVUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JaO0FEZVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2JaO0FEZVE7RUFDSSxXQUFBO0FDYlo7QURlUTtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2JaO0FEZVE7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNiWjtBRGtCQTtFQUNJLDBCQUFBO0FDZko7QURrQkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ2ZKO0FEa0JBO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDZko7QURnQkk7RUFDSSxzQkFBQTtBQ2RSO0FEa0JBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRGdCSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZFI7QURnQkk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNkUjtBRGtCQTtFQUNJLDhDQUFBO0FDZko7QURrQkE7RUFDSSxrREFBQTtFQUNBLGdCQUFBO0FDZkoiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xyXG4gICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAjZWVlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNrZWxldG9uLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XHJcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3VuZCB7XHJcbiAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcclxuICAgICAgICAgICAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmFtZS1jb3VudCB7XHJcbiAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE0NHB4O1xyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNlZWU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaDcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWg4IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtc2tlbGV0b24taDgge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLnNrZWxldG9uLWg4IHtcclxuICAgICAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1oOSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC5hdmF0YXItaDkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiLm5hbWUgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4ubmFtZSBpb24tY2FyZCB7XG4gIG1hcmdpbi1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uYW1lIGlvbi1jYXJkIGlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYW1lIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUgaW9uLWNhcmQgaDYge1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5uYW1lIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuLm5hbWUgLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xufVxuLm5hbWUgLnNrZWxldG9uLW5hbWUgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSBwIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucm91bmQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmFtZS1jb3VudCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQ6bGFzdC1jaGlsZCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogOTBweDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQ6bGFzdC1jaGlsZCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCBoNiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmdyaWQgaW9uLWNhcmQge1xuICBtaW4taGVpZ2h0OiAxNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAjZWVlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmdyaWQgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZ3JpZCBpb24tY2FyZCBpb24taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZCBpb24tY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ncmlkIGlvbi1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4uZ3JpZCBpb24tY2FyZCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuXG4uY2FyZC1oNyB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1oOCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtc2tlbGV0b24taDgge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtc2tlbGV0b24taDggLnNrZWxldG9uLWg4IHtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaDkge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY2FyZC1oOSAuYXZhdGFyLWg5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkLWg5IGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWg5IHAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/categories/categories.component.ts":
  /*!***********************************************************!*\
    !*** ./src/components/categories/categories.component.ts ***!
    \***********************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcComponentsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent(config, shared, nav, appEventsService) {
        _classCallCheck(this, CategoriesComponent);

        this.config = config;
        this.shared = shared;
        this.nav = nav;
        this.appEventsService = appEventsService; //for product slider after banner

        this.sliderConfig = {
          slidesPerView: 2.2,
          spaceBetween: 0
        };
        this.sliderConfig2 = {
          slidesPerView: 3.5,
          spaceBetween: 0
        };
      }

      _createClass(CategoriesComponent, [{
        key: "openSubCategories",
        value: function openSubCategories(parent) {
          var count = 0;

          var _iterator = _createForOfIteratorHelper(this.shared.subCategories),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var val = _step.value;
              if (val.parent == parent.id) count++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (count == 0) this.nav.navigateForward(this.config.currentRoute + "/products/" + parent.id + "/" + parent.name + "/newest");else {
            this.appEventsService.publish("openSubcategoryPage", parent);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoriesComponent.prototype, "type", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.scss */
      "./src/components/categories/categories.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/components/product/product.component.scss":
  /*!*******************************************************!*\
    !*** ./src/components/product/product.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.product-component .default {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .default div div {\n  text-transform: uppercase;\n  position: absolute;\n  z-index: 1;\n  font-size: 0.6875rem;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  right: 0px;\n  width: auto;\n  top: 0px;\n  border-radius: 2px;\n  padding: 2px 4px;\n}\n.product-component .default div div:nth-child(2) {\n  top: 20px;\n}\n.product-component .default #newimage {\n  height: 52px;\n  position: absolute;\n  z-index: 1;\n  left: 0px !important;\n  width: 30%;\n  top: -4px;\n  margin-left: -4.2px;\n}\n.product-component .default #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .default .name {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.product-component .default .price {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-component .default ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .default ion-grid ion-row ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .list-product-design {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n.product-component .list-product-design ion-thumbnail {\n  margin: 0;\n  height: 100px;\n  width: 100px;\n}\n.product-component .list-product-design ion-thumbnail .badge-img {\n  position: absolute;\n  z-index: 1;\n  height: 45px;\n  width: 45px;\n  left: 9px;\n  top: 9px;\n}\n.product-component .list-product-design ion-thumbnail img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n.product-component .list-product-design #list-heart-icon {\n  margin-bottom: 0;\n  position: absolute;\n  top: 60px;\n  right: 10px;\n  font-size: 25px;\n  color: var(--ion-color-secondary);\n}\n.product-component .list-product-design ion-label {\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n.product-component .list-product-design ion-label p {\n  margin-top: 10px;\n}\n.product-component .list-product-design .sale {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: var(--ion-color-secondary-contrast);\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component .list-product-design .featured {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: var(--ion-color-secondary-contrast);\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component .list-product-design .img-div {\n  font-size: 12px;\n}\n.product-component .list-product-design .img-div :nth-child(1) {\n  top: 0;\n}\n.product-component .list-product-design .img-div :nth-child(2) {\n  top: 25px;\n}\n.product-component .style21, .product-component .style12, .product-component .style5, .product-component .style11 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .style21 .name, .product-component .style12 .name, .product-component .style5 .name, .product-component .style11 .name {\n  margin-top: 0px;\n}\n.product-component .style21 .main-img, .product-component .style12 .main-img, .product-component .style5 .main-img, .product-component .style11 .main-img {\n  padding: 3px;\n}\n.product-component .style21 #image, .product-component .style12 #image, .product-component .style5 #image, .product-component .style11 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style21 ion-grid ion-row ion-icon, .product-component .style12 ion-grid ion-row ion-icon, .product-component .style5 ion-grid ion-row ion-icon, .product-component .style11 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style11 .price * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style3 {\n  margin-top: 2px !important;\n  margin-bottom: 2px !important;\n  margin-right: 0px !important;\n  margin-left: 1px !important;\n  height: auto;\n  border-radius: 0px 0px 0 0;\n  border: 1px #d4d1c1 solid;\n  background-color: #fff !important;\n}\n.product-component .style3 .main-image {\n  position: relative;\n  min-height: 120px;\n  max-height: 120px;\n}\n.product-component .style3 .main-image ion-badge {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 10;\n  font-size: 10px;\n  padding: 5px 8px;\n  border-radius: 0;\n  display: inline-grid;\n}\n.product-component .style3 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style3 .name {\n  margin-top: 5px;\n  margin-bottom: 4px;\n}\n.product-component .style3 .main-img {\n  padding: 3px;\n}\n.product-component .style3 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style3 ion-grid ion-row ion-icon {\n  color: var(--ion-color-secondary);\n  margin-top: 5px;\n  margin-right: 3px;\n  font-size: 16px !important;\n}\n.product-component .style3 ion-grid ion-row ion-col {\n  background-color: #fff !important;\n}\n.product-component .style6 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n}\n.product-component .style6 .main-image {\n  position: relative;\n}\n.product-component .style6 .main-image ion-fab-button {\n  position: absolute;\n  bottom: -10px;\n  right: 0px;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  margin: 3px;\n}\n.product-component .style6 .main-image ion-fab-button ion-icon {\n  font-size: inherit;\n}\n.product-component .style6 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style6 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style6 .colum-2 {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.product-component .style6 .price {\n  max-width: 50%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  float: left;\n}\n.product-component .style6 .main-img {\n  padding: 3px;\n}\n.product-component .style6 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style7 {\n  border-radius: 10px;\n  position: relative;\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n}\n.product-component .style7 .floating-tags {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: 0;\n  z-index: 1;\n  display: inline-grid;\n}\n.product-component .style7 .floating-tags ion-badge {\n  font-size: 9px;\n  margin-bottom: 2px;\n  z-index: 4;\n}\n.product-component .style7 .floating-tags .first {\n  border-radius: 10px 0px 3px 0;\n  padding: 5px 5px;\n}\n.product-component .style7 .floating-tags .second {\n  border-radius: 0px 3px 3px 0px;\n  padding: 5px 5px;\n}\n.product-component .style7 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style7 ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style7 ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style8 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n}\n.product-component .style8 .product-ratings {\n  display: flex;\n}\n.product-component .style8 .product-ratings .rating-value {\n  font-size: 10px;\n  padding-top: 2px;\n}\n.product-component .style8 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style8 .heart-top-right {\n  top: 5px;\n  right: 5px;\n}\n.product-component .style8 .price {\n  margin-top: 3px;\n  margin-bottom: 2px;\n}\n.product-component .style8 .main-img {\n  padding: 3px;\n}\n.product-component .style8 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .style9 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px;\n}\n.product-component .style9 .main-image {\n  position: relative;\n}\n.product-component .style9 .main-image ion-fab-button {\n  position: absolute;\n  bottom: -10px;\n  right: 2px;\n  z-index: 10;\n  width: 25px;\n  height: 25px;\n  margin: 3px;\n}\n.product-component .style9 .main-image ion-fab-button ion-icon {\n  font-size: 17px;\n}\n.product-component .style9 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style9 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style9 .price {\n  max-width: 50%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style9 .main-img {\n  padding: 3px;\n}\n.product-component .style9 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .style10 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px;\n}\n.product-component .style10 .main-image {\n  position: relative;\n}\n.product-component .style10 .main-image ion-badge {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 10;\n  font-size: 10px;\n  padding: 8px 10px;\n  border-radius: 10px 10px 10px 0;\n  margin: 0;\n}\n.product-component .style10 .name {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.product-component .style10 .category {\n  margin-bottom: 5px;\n}\n.product-component .style10 .main-img {\n  padding: 3px;\n}\n.product-component .style10 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style10 ion-grid ion-row ion-icon {\n  color: var(--ion-color-secondary);\n  margin-top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style14 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  min-height: 185px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: none;\n  border: solid 1px #dad7d7;\n  --background: var(--ion-background-color);\n}\n.product-component .style14 .heart-top-right {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 20px;\n}\n.product-component .style14 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style14 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .style14 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style14 ion-grid ion-row ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style4 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  box-shadow: none;\n  border-radius: 0;\n  --background: var(--ion-background-color);\n}\n.product-component .style4 .heart-top-right {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 20px;\n}\n.product-component .style4 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style4 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n  border-radius: 10px 10px 0 0;\n}\n.product-component .style4 .name {\n  margin-bottom: 5px;\n}\n.product-component .style4 ion-badge {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n.product-component .style4 ion-badge span {\n  font-size: 9px;\n  vertical-align: sub;\n}\n.product-component .style4 .price {\n  width: 100%;\n}\n.product-component .style4 ion-button {\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style13 {\n  border-radius: 0px;\n  margin-top: 0px !important;\n  margin-right: 0px;\n  height: auto;\n}\n.product-component .style13 .heart-top-right {\n  right: 5px;\n  top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style13 .floating-tags {\n  position: absolute;\n  top: 5px;\n  left: 0px;\n  padding: 0;\n}\n.product-component .style13 .floating-tags ion-badge {\n  border-radius: 0 3px 3px 0;\n  font-size: 9px;\n  margin-bottom: 2px;\n  padding: 3px 5px;\n}\n.product-component .style13 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style13 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style13 .innerprice {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.product-component .style13 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-radius: 100%;\n  width: 45px;\n  height: 45px;\n}\n.product-component .style13 .price .woocommerce-Price-amount {\n  font-size: 10px;\n}\n.product-component .style13 .main-img {\n  padding: 3px;\n}\n.product-component .style13 #image {\n  width: auto;\n  height: auto;\n}\n.product-component .style13 .woocommerce-Price-amount {\n  margin-left: 0px !important;\n}\n.product-component .style13 .woocs_price_code {\n  display: block !important;\n}\n.product-component .style13 .paddingb5 {\n  padding-bottom: 5px;\n}\n.product-component .style15 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n  padding-top: 5px;\n}\n.product-component .style15 .name {\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.product-component .style15 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style15 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style15 .rating-colum {\n  padding-bottom: 5px;\n}\n.product-component .style15 .main-img {\n  padding: 3px;\n}\n.product-component .style15 #image {\n  width: auto;\n  height: auto;\n}\n.product-component .style16 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  border-radius: 0px;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  box-shadow: none;\n  --background: var(--ion-background-color);\n}\n.product-component .style16 ion-grid {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  width: 92%;\n  background-color: var(--ion-background-color);\n  border-radius: 10px;\n  border-radius: 6px;\n  padding-top: 5px;\n  z-index: 2;\n  margin-top: -25px;\n  position: relative;\n}\n.product-component .style16 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style16 .product-ratings {\n  padding-bottom: 5px;\n}\n.product-component .style16 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style16 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style16 .main-img {\n  padding: 3px;\n}\n.product-component .style16 ion-icon {\n  padding: 0 5px;\n}\n.product-component .style16 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  border-radius: 10px;\n  height: auto;\n  z-index: 1;\n}\n.product-component .style16 ion-button {\n  --border-radius: 0 0 6px 6px !important;\n}\n.product-component .style17 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style17 .heart-top-right {\n  right: 5px;\n  top: 5px;\n}\n.product-component .style17 .price {\n  margin-top: 2px;\n}\n.product-component .style17 ion-grid ion-icon {\n  font-size: inherit !important;\n  color: #f8ce0b !important;\n}\n.product-component .style19 {\n  border-radius: 0px;\n}\n.product-component .style19 .heart-top-right {\n  right: 5px;\n  top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style19 .floating-tags {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  padding: 0;\n}\n.product-component .style19 ion-badge {\n  border-radius: 0;\n  font-size: 9px;\n  margin-bottom: 2px;\n  padding: 2px 5px;\n  background: transparent;\n  border: 1px solid black;\n  color: black;\n}\n.product-component .style5 .name {\n  margin-top: 5px;\n}\n.product-component .style5 .price {\n  width: 100%;\n  padding: 0;\n}\n.product-component .style5 ion-icon {\n  margin-top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style12 .name {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.product-component .style12 .price {\n  margin-top: 0px;\n}\n.product-component .style12 .price * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style12 .cart-button {\n  height: 100%;\n  margin: 0px;\n  --border-radius: 0px;\n  font-size: 1vw;\n}\n.product-component .style18 {\n  border-radius: 0;\n}\n.product-component .style18 .cart {\n  display: flex;\n  padding-right: 2px;\n  padding-left: 2px;\n}\n.product-component .style18 .cart ion-text {\n  margin: auto;\n}\n.product-component .style18 .cart ion-text p {\n  margin: auto;\n  margin: auto 4px;\n}\n.product-component .style18 .cart .price {\n  width: 100%;\n}\n.product-component .style20 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .style20 .main-img {\n  position: relative;\n}\n.product-component .style20 .main-img .buttons-img {\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n}\n.product-component .style20 .main-img .buttons-img ion-button {\n  margin-right: 0px;\n  font-size: 2vw;\n  --border-radius: 0px;\n}\n.product-component .style20 .main-img .buttons-img ion-button ion-icon {\n  font-size: 3vw;\n}\n.product-component .style20 .name {\n  margin-top: 0px;\n}\n.product-component .style20 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style20 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .product-ratings {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.product-component .product-ratings .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 12px;\n}\n.product-component .product-ratings .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.product-component .product-ratings .stars-outer .stars-inner {\n  font-size: 12px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .product-ratings .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.product-component .category {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin: 0;\n  color: var(--ion-text-color);\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .heart-top-right {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 22px;\n}\n.product-component .name {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: var(--ion-text-color);\n  font-size: 12px !important;\n  font-weight: bold !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .price {\n  display: inline-block;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-component .price .woocommerce-Price-amount {\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n}\n.product-component .price .woocs_price_code {\n  display: flex;\n}\n.product-component .price del .woocommerce-Price-amount {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  text-decoration: line-through;\n}\n.product-component .price ins {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  text-decoration: none;\n}\n.product-component .price ins .woocommerce-Price-amount {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--ion-color-danger);\n  margin-left: 5px;\n}\n.product-component .bottom-big-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n  z-index: 10;\n}\n.product-component .card-add-cart {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n.product-component .card-add-cart:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 110%;\n  height: 102%;\n  background-color: var(--ion-background-color);\n  opacity: 0.8;\n}\n.product-component .card-add-cart ion-icon {\n  position: unset;\n  margin: auto;\n  font-size: 2.5rem !important;\n  color: var(--ion-color-secondary);\n  z-index: 10;\n}\n[dir=rtl] ion-card p {\n  text-align: right !important;\n}\n[dir=rtl] ins .woocommerce-Price-amount {\n  margin-left: 0px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ1o7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQ1I7QUNDWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUVBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREFoQjtBQ0NnQjtFQUNJLFNBQUE7QURDcEI7QUNHUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0dRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUREWjtBQ0dRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRERaO0FDR1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERFo7QUNLZ0I7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QURIcEI7QUNNZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBREpwQjtBQ1VJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURSUjtBQ1NRO0VBU0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEZlo7QUNLWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QURIaEI7QUNRWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUROaEI7QUNTUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRFBaO0FDU1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FEUFo7QUNRWTtFQUNJLGdCQUFBO0FETmhCO0FDU1E7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURQWjtBQ1NRO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEUFo7QUNTUTtFQUNJLGVBQUE7QURQWjtBQ1FhO0VBQ0csTUFBQTtBRE5oQjtBQ1FhO0VBQ0csU0FBQTtBRE5oQjtBQ1dJO0VBT0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRGZSO0FDTVE7RUFDSSxlQUFBO0FESlo7QUNNUTtFQUNJLFlBQUE7QURKWjtBQ1VRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURSWjtBQ1lnQjtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBRFZwQjtBQ2tCUTtFQUNJLHlDQUFBO0FEaEJaO0FDb0JJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FEbEJSO0FDbUJRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEakJaO0FDa0JZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FEaEJoQjtBQ2tCWTtFQUNJLGVBQUE7QURoQmhCO0FDbUJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEakJaO0FDbUJRO0VBQ0ksWUFBQTtBRGpCWjtBQ21CUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEakJaO0FDcUJnQjtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QURuQnBCO0FDcUJnQjtFQUNJLGlDQUFBO0FEbkJwQjtBQ3lCSTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUR2QlI7QUN3QlE7RUFDSSxrQkFBQTtBRHRCWjtBQ3VCWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEckJoQjtBQ3NCZ0I7RUFDSSxrQkFBQTtBRHBCcEI7QUN1Qlk7RUFDSSxlQUFBO0FEckJoQjtBQ3dCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHRCWjtBQ3dCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHRCWjtBQ3dCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEdEJaO0FDd0JRO0VBQ0ksWUFBQTtBRHRCWjtBQ3dCUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEdEJaO0FDeUJJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FEdkJSO0FDd0JRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUR0Qlo7QUN1Qlk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEckJoQjtBQ3VCWTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QURyQmhCO0FDdUJZO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBRHJCaEI7QUN3QlE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHRCWjtBQ3dCUTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBRHRCWjtBQ3dCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FEdEJaO0FDMEJJO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHhCUjtBQ3lCUTtFQUNJLGFBQUE7QUR2Qlo7QUN3Qlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUR0QmhCO0FDeUJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEdkJaO0FDeUJRO0VBQ0ksUUFBQTtFQUNBLFVBQUE7QUR2Qlo7QUN5QlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUR2Qlo7QUN5QlE7RUFDSSxZQUFBO0FEdkJaO0FDeUJRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR2Qlo7QUMyQkk7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEekJSO0FDMEJRO0VBQ0ksa0JBQUE7QUR4Qlo7QUN5Qlk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRHZCaEI7QUN3QmdCO0VBQ0ksZUFBQTtBRHRCcEI7QUN5Qlk7RUFDSSxlQUFBO0FEdkJoQjtBQzBCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHhCWjtBQzBCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR4Qlo7QUMwQlE7RUFDSSxZQUFBO0FEeEJaO0FDMEJRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR4Qlo7QUM0Qkk7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEMUJSO0FDMkJRO0VBQ0ksa0JBQUE7QUR6Qlo7QUMwQlk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBRHhCaEI7QUMyQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUR6Qlo7QUMyQlE7RUFDSSxrQkFBQTtBRHpCWjtBQzJCUTtFQUNJLFlBQUE7QUR6Qlo7QUMyQlE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHpCWjtBQzZCZ0I7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBRDNCcEI7QUNpQ0k7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7QUQvQlI7QUNnQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRDlCWjtBQ2dDUTtFQUNJLHlDQUFBO0FEOUJaO0FDZ0NRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRDlCWjtBQ2tDZ0I7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QURoQ3BCO0FDbUNnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FEakNwQjtBQ3VDSTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FEckNSO0FDc0NRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURwQ1o7QUNzQ1E7RUFDSSx5Q0FBQTtBRHBDWjtBQ3NDUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QURwQ1o7QUNzQ1E7RUFDSSxrQkFBQTtBRHBDWjtBQ3NDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURwQ1o7QUNxQ1k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QURuQ2hCO0FDc0NRO0VBQ0ksV0FBQTtBRHBDWjtBQ3NDUTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBRHBDWjtBQ3dDSTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUR0Q1I7QUN1Q1E7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FEckNaO0FDdUNRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURyQ1o7QUNzQ1k7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEcENoQjtBQ3VDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHJDWjtBQ3VDUTtFQUNJLHlDQUFBO0FEckNaO0FDdUNRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FEckNaO0FDdUNRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURyQ1o7QUNzQ1k7RUFDSSxlQUFBO0FEcENoQjtBQ3VDUTtFQUNJLFlBQUE7QURyQ1o7QUN1Q1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRHJDWjtBQ3VDUTtFQUNJLDJCQUFBO0FEckNaO0FDdUNRO0VBQ0kseUJBQUE7QURyQ1o7QUN1Q1E7RUFDSSxtQkFBQTtBRHJDWjtBQ3lDSTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRHZDUjtBQ3dDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHRDWjtBQ3dDUTtFQUNJLHlDQUFBO0FEdENaO0FDd0NRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRHRDWjtBQ3dDUTtFQUNJLG1CQUFBO0FEdENaO0FDd0NRO0VBQ0ksWUFBQTtBRHRDWjtBQ3dDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEdENaO0FDMENJO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EseUNBQUE7QUR6Q1I7QUMwQ1E7RUFDSSx5SEFBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEeENaO0FDMENRO0VBQ0kseUNBQUE7QUR4Q1o7QUMwQ1E7RUFDSSxtQkFBQTtBRHhDWjtBQzBDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBRHhDWjtBQzBDUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR4Q1o7QUMwQ1E7RUFDSSxZQUFBO0FEeENaO0FDMENRO0VBQ0ksY0FBQTtBRHhDWjtBQzBDUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEeENaO0FDMENRO0VBQ0ksdUNBQUE7QUR4Q1o7QUM2Q1E7RUFDSSx5Q0FBQTtBRDNDWjtBQzZDUTtFQUNJLFVBQUE7RUFDQSxRQUFBO0FEM0NaO0FDNkNRO0VBQ0ksZUFBQTtBRDNDWjtBQzhDWTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7QUQ1Q2hCO0FDaURJO0VBQ0ksa0JBQUE7QUQvQ1I7QUNnRFE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FEOUNaO0FDZ0RRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUQ5Q1o7QUNnRFE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUQ5Q1o7QUNvRFE7RUFDSSxlQUFBO0FEbERaO0FDb0RRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QURsRFo7QUNvRFE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QURsRFo7QUN3RFE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUR0RFo7QUN3RFE7RUFDSSxlQUFBO0FEdERaO0FDd0RRO0VBQ0kseUNBQUE7QUR0RFo7QUN3RFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRHREWjtBQ3lESTtFQUNJLGdCQUFBO0FEdkRSO0FDd0RRO0VBQ0ksYUFBQTtFQVdBLGtCQUFBO0VBQ0EsaUJBQUE7QURoRVo7QUNxRFk7RUFDSSxZQUFBO0FEbkRoQjtBQ29EZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURsRHBCO0FDcURZO0VBQ0ksV0FBQTtBRG5EaEI7QUMwREk7RUFzQkksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRDdFUjtBQ3FEUTtFQUNJLGtCQUFBO0FEbkRaO0FDb0RZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRGxEaEI7QUNtRGdCO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QURqRHBCO0FDa0RvQjtFQUNJLGNBQUE7QURoRHhCO0FDcURRO0VBQ0ksZUFBQTtBRG5EWjtBQ3lEUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEdkRaO0FDMkRnQjtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBRHpEcEI7QUMrREk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FEN0RSO0FDOERRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ1RFo7QUM2RFk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUQzRGhCO0FDNkRZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEM0RoQjtBQzREZ0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUQxRHBCO0FDK0RJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUQ3RFI7QUMrREk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDdEUjtBQytESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUQ3RFI7QUNnRUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDlEUjtBQytEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQ3RFo7QUMrRFE7RUFDSSxhQUFBO0FEN0RaO0FDZ0VZO0VBQ0ksMkNBQUE7RUFDQSw2QkFBQTtBRDlEaEI7QUNpRVE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRC9EWjtBQ2dFWTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUQ5RGhCO0FDa0VJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEaEVSO0FDbUVJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRGpFUjtBQ2tFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7QURoRVo7QUNrRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FEaEVaO0FDc0VJO0VBQ0ksNEJBQUE7QURuRVI7QUNzRVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FEcEVaIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5kZWZhdWx0IGRpdiBkaXYge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCBkaXYgZGl2Om50aC1jaGlsZCgyKSB7XG4gIHRvcDogMjBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCAjbmV3aW1hZ2Uge1xuICBoZWlnaHQ6IDUycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMCU7XG4gIHRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IC00LjJweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCAubmFtZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5kZWZhdWx0IC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5kZWZhdWx0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCBpb24tZ3JpZCBpb24tcm93IGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlO1xuICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIGlvbi10aHVtYm5haWwgLmJhZGdlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgbGVmdDogOXB4O1xuICB0b3A6IDlweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduICNsaXN0LWhlYXJ0LWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIGlvbi1sYWJlbCBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiAuc2FsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiAuZmVhdHVyZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gLmltZy1kaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gLmltZy1kaXYgOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiAuaW1nLWRpdiA6bnRoLWNoaWxkKDIpIHtcbiAgdG9wOiAyNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIxLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTIsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1LCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTEge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMSAubmFtZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5uYW1lLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNSAubmFtZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTExIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIxIC5tYWluLWltZywgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5tYWluLWltZywgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgLm1haW4taW1nLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTEgLm1haW4taW1nIHtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIxICNpbWFnZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyICNpbWFnZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgI2ltYWdlLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTEgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMSBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTIgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTExIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMSAucHJpY2UgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMge1xuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDAgMDtcbiAgYm9yZGVyOiAxcHggI2Q0ZDFjMSBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgLm1haW4taW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUzIC5tYWluLWltYWdlIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgLm1haW4taW1hZ2Ugc3BhbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUzIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMyAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMyAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMyBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5tYWluLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTYgLm1haW4taW1hZ2UgaW9uLWZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5tYWluLWltYWdlIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTYgLm1haW4taW1hZ2Ugc3BhbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAuY29sdW0tMiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTYgLnByaWNlIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2ICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcgLmZsb2F0aW5nLXRhZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcgLmZsb2F0aW5nLXRhZ3MgaW9uLWJhZGdlIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgei1pbmRleDogNDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3IC5mbG9hdGluZy10YWdzIC5maXJzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDNweCAwO1xuICBwYWRkaW5nOiA1cHggNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcgLmZsb2F0aW5nLXRhZ3MgLnNlY29uZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3ICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU4IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLnByb2R1Y3QtcmF0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOCAucHJvZHVjdC1yYXRpbmdzIC5yYXRpbmctdmFsdWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOCAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLmhlYXJ0LXRvcC1yaWdodCB7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOCAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOCAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTkgLm1haW4taW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSAubWFpbi1pbWFnZSBpb24tZmFiLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgcmlnaHQ6IDJweDtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTkgLm1haW4taW1hZ2UgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSAubWFpbi1pbWFnZSBzcGFuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTkgLm5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IC5wcmljZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5ICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIC5tYWluLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIC5tYWluLWltYWdlIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwO1xuICBtYXJnaW46IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTAgLm5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMCAuY2F0ZWdvcnkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTAgLm1haW4taW1nIHtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTAgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDE4NXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkYWQ3ZDc7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE0IC5oZWFydC10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTQgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNCAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTQgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IC5oZWFydC10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCBpbnMgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTQgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IC5uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTQgaW9uLWJhZGdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IGlvbi1iYWRnZSBzcGFuIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCAucHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5oZWFydC10b3AtcmlnaHQge1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgLmZsb2F0aW5nLXRhZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgLmZsb2F0aW5nLXRhZ3MgaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgLm5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyBpbnMgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5pbm5lcnByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAucHJpY2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5wcmljZSAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAjaW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgLndvb2NzX3ByaWNlX2NvZGUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5wYWRkaW5nYjUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE1IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE1IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTUgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSAucHJpY2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE1IC5yYXRpbmctY29sdW0ge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE1IC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSAjaW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IGlvbi1ncmlkIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbiAgd2lkdGg6IDkyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiAucHJvZHVjdC1yYXRpbmdzIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IC5wcmljZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgLm1haW4taW1nIHtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IGlvbi1pY29uIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE3IGlucyAqIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTcgLmhlYXJ0LXRvcC1yaWdodCB7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE3IC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNyBpb24tZ3JpZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4Y2UwYiAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE5IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE5IC5oZWFydC10b3AtcmlnaHQge1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTkgLmZsb2F0aW5nLXRhZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTkgaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNSAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1IC5wcmljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTIgLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5wcmljZSAqIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTIgLmNhcnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXZ3O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE4IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxOCAuY2FydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTggLmNhcnQgaW9uLXRleHQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTggLmNhcnQgaW9uLXRleHQgcCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luOiBhdXRvIDRweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxOCAuY2FydCAucHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIwIC5tYWluLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMCAubWFpbi1pbWcgLmJ1dHRvbnMtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIwIC5tYWluLWltZyAuYnV0dG9ucy1pbWcgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBmb250LXNpemU6IDJ2dztcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAgLm1haW4taW1nIC5idXR0b25zLWltZyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzdnc7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAgLm5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMCBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByb2R1Y3QtcmF0aW5ncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcm9kdWN0LXJhdGluZ3MgLnN0YXJzLW91dGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYhuKYhuKYhuKYhuKYhlwiO1xuICBjb2xvcjogI2NjYztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlciAuc3RhcnMtaW5uZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcm9kdWN0LXJhdGluZ3MgLnN0YXJzLW91dGVyIC5zdGFycy1pbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIXimIXimIXimIVcIjtcbiAgY29sb3I6ICNmOGNlMGI7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmNhdGVnb3J5IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5oZWFydC10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubmFtZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAucHJpY2UgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcmljZSAud29vY3NfcHJpY2VfY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByaWNlIGRlbCAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByaWNlIGlucyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByaWNlIGlucyAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuYm90dG9tLWJpZy1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXJkLWFkZC1jYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmNhcmQtYWRkLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDEwMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgb3BhY2l0eTogMC44O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXJkLWFkZC1jYXJ0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgei1pbmRleDogMTA7XG59XG5cbltkaXI9cnRsXSBpb24tY2FyZCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSBpbnMgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIi5wcm9kdWN0LWNvbXBvbmVudCB7XG4gICAgLmRlZmF1bHQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI25ld2ltYWdlIHtcbiAgICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQuMnB4O1xuICAgICAgICB9XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9wYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3IgcHJvZHVjdCBsaXN0XG4gICAgLmxpc3QtcHJvZHVjdC1kZXNpZ24ge1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgLmJhZGdlLWltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNsaXN0LWhlYXJ0LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zYWxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5mZWF0dXJlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLWRpdiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlIDEgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTIxIHtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWltZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgMiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLnN0eWxlMTEge1xuICAgICAgICBAZXh0ZW5kIC5zdHlsZTIxO1xuICAgICAgICAucHJpY2UgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGUzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwIDA7XG4gICAgICAgIGJvcmRlcjogMXB4ICNkNGQxYzEgc29saWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgLm1haW4taW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4taW1nIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC5tYWluLWltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bS0yIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1pbWcge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB9XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zdHlsZTcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgLmZsb2F0aW5nLXRhZ3Mge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maXJzdCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggM3B4IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWNvbmQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGU4IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAucmF0aW5nLXZhbHVlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1pbWcge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB9XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGU5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAubWFpbi1pbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4taW1nIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLnN0eWxlMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5tYWluLWltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWltZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTE0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWluLWhlaWdodDogMTg1cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIxOCwgMjE1LCAyMTUpO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5zICoge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9wYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGU0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5zICoge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTEzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZmxvYXRpbmctdGFncyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnMgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuaW5uZXJwcmljZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4taW1nIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLndvb2NzX3ByaWNlX2NvZGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucGFkZGluZ2I1IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLnN0eWxlMTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnMgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXRpbmctY29sdW0ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1pbWcge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB9XG4gICAgICAgICNpbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGUxNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAvL292ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnMgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4taW1nIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgfVxuICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGUxNyB7XG4gICAgICAgIGlucyAqIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFydC10b3AtcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjhjZTBiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTE5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mbG9hdGluZy10YWdzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSA1ICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGU1IHtcbiAgICAgICAgQGV4dGVuZCAuc3R5bGUyMTtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSA2ICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAuc3R5bGUxMiB7XG4gICAgICAgIEBleHRlbmQgLnN0eWxlMjE7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSAqIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJ0LWJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN0eWxlMTgge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAuY2FydCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlIDcgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC5zdHlsZTIwIHtcbiAgICAgICAgLm1haW4taW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5idXR0b25zLWltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgI2ltYWdlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gY29tbW9uIGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgLnN0YXJzLW91dGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcIjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGFycy1pbm5lciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmOGNlMGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC8vcHJpY2VcbiAgICAucHJpY2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLndvb2NzX3ByaWNlX2NvZGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBkZWwge1xuICAgICAgICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbnMge1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYm90dG9tLWJpZy1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICAvL2FkZCB0byBjYXJ0IGhpZ2hsaWdodGVyXG4gICAgLmNhcmQtYWRkLWNhcnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTEwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAyJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbltkaXI9XCJydGxcIl0ge1xuICAgIGlvbi1jYXJkIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpbnMge1xuICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/product/product.component.ts":
  /*!*****************************************************!*\
    !*** ./src/components/product/product.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(config, shared, navCtrl, modalCtrl, appEventsService, storage, loading) {
        var _this2 = this;

        _classCallCheck(this, ProductComponent);

        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.appEventsService = appEventsService;
        this.storage = storage;
        this.loading = loading;
        this.isLiked = 0;
        this.wishArray = [];
        this.cartQuantity = 0; //============================================================================================  

        this.qunatityPlus = function (p) {
          if (p.stock_quantity == p.quantity) this.shared.showAlert("Product Quantity is Limited!");else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
            p.quantity++;
            p.subtotal = p.subtotal + parseFloat(p.price);
            p.total = p.total + parseFloat(p.price);
            this.updateCart();
          }
        }; //============================================================================================  
        //function decreasing the quantity


        this.qunatityMinus = function (p) {
          if (p.quantity != 1) {
            p.quantity--;
            p.subtotal = parseFloat(p.price) * p.quantity;
            p.total = parseFloat(p.price) * p.quantity;
            this.updateCart();
          }

          if (p.quantity == 1) {
            this.removeCartItem(p.cart_id);
            this.cartQuantity = 0;
          }
        };

        var wishListUpdate = this.appEventsService.subscribe("wishListUpdate");
        wishListUpdate.subscriptions.add(wishListUpdate.event.subscribe(function (data) {
          if (data.id == _this2.p.id) _this2.isLiked = data.value;
        }));
        this.storage.get('wishListProducts').then(function (val) {
          _this2.wishArray = val;

          _this2.checkWishList();
        });
      }

      _createClass(ProductComponent, [{
        key: "checkWishList",
        value: function checkWishList() {
          //getting wishList items from local storage
          var count = 0;

          if (this.wishArray != null) {
            var _iterator2 = _createForOfIteratorHelper(this.wishArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var value = _step2.value;
                if (value.id == this.p.id) count++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (count != 0) this.isLiked = 1;else this.isLiked = 0;
        }
      }, {
        key: "pDiscount",
        value: function pDiscount() {
          if (!this.p.on_sale) return false;
          var rtn = "";
          var p1 = parseInt(this.p.regular_price);
          var p2 = parseInt(this.p.price);

          if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            return false;
          }

          var result = Math.abs((p1 - p2) / p1 * 100);
          result = parseInt(result.toString());

          if (result == 0) {
            return false;
          }

          rtn = result + '%';
          return rtn;
        }
      }, {
        key: "showProductDetail",
        value: function showProductDetail() {
          this.shared.singleProductPageData.push(this.p);
          this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + this.p.id);

          if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
          }
        }
      }, {
        key: "checkProductNew",
        value: function checkProductNew() {
          var pDate = new Date(this.p.date_created);
          var date = pDate.getTime() + this.config.newProductDuration * 86400000;
          var todayDate = new Date().getTime();
          if (date > todayDate) return true;else return false;
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.shared.addToCart(this.p, null, null, null); //this.navCtrl.push(CartPage); 
        }
      }, {
        key: "isInCart",
        value: function isInCart() {
          var found = false;

          var _iterator3 = _createForOfIteratorHelper(this.shared.cartProducts),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var value = _step3.value;

              if (value.product_id == this.p.id) {
                found = true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (found == true) return true;else return false;
        }
      }, {
        key: "removeRecent",
        value: function removeRecent() {
          this.shared.removeRecent(this.p);
        }
      }, {
        key: "clickWishList",
        value: function clickWishList() {
          // this.loading.autoHide(500);
          if (this.isLiked == 0) {
            this.addWishList();
          } else {
            this.removeWishList();
          }
        }
      }, {
        key: "getProductImage",
        value: function getProductImage() {
          if (this.p.images.length != 0) return this.p.images[0].src;else return "assets/woocommerce-placeholder.png";
        }
      }, {
        key: "getHeartName",
        value: function getHeartName() {
          if (this.isLiked == 0) return "heart-outline";else return "heart";
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(type) {
          if (type == "recent") {
            this.removeRecent();
          } else if (type == "wishList") {
            this.removeWishList();
          }
        }
      }, {
        key: "getButtonText",
        value: function getButtonText() {
          var r = "";
          if (this.p.stock_status == 'instock' && this.p.type == 'simple') r = 'ADD TO CART';
          if (this.p.stock_status == 'instock' && this.p.type != 'simple') r = 'DETAILS';
          if (this.p.stock_status != 'instock') r = 'OUT OF STOCK';
          return r;
        }
      }, {
        key: "buttonClick",
        value: function buttonClick() {
          if (this.getButtonText() == 'ADD TO CART') this.addToCart();
          if (this.getButtonText() == 'DETAILS') this.showProductDetail();
        }
      }, {
        key: "getButtonColor",
        value: function getButtonColor() {
          if (this.getButtonText() == 'ADD TO CART') return 'secondary';else if (this.getButtonText() == 'DETAILS') return 'secondary';else if (this.getButtonText() == 'OUT OF STOCK') return 'danger';
        }
      }, {
        key: "getCategoryName",
        value: function getCategoryName() {
          if (this.p.categories.length != 0) return this.p.categories[0].name;
        }
      }, {
        key: "addWishList",
        value: function addWishList() {
          this.shared.addWishList(this.p);
        }
      }, {
        key: "removeWishList",
        value: function removeWishList() {
          this.shared.removeWishList(this.p);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getRating",
        value: function getRating() {
          return this.p.average_rating / 0.05 + '%';
        }
      }, {
        key: "getParsedRating",
        value: function getParsedRating() {
          return parseInt(this.p.average_rating).toFixed(1);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this3 = this;

          this.shared.cartProducts.forEach(function (element) {
            if (element.product_id == _this3.p.id) {
              _this3.cartQuantity = element.quantity;
            }
          });
        }
      }, {
        key: "addingToCart",
        value: function addingToCart() {
          var _this4 = this;

          if (this.getButtonText() == "ADD TO CART") {
            if (this.cartQuantity == 0) {
              this.addToCart();
            } else {
              this.shared.cartProducts.forEach(function (element) {
                if (element.product_id == _this4.p.id) {
                  _this4.qunatityPlus(element);
                }
              });
            }
          } else {
            this.buttonClick();
          }
        }
      }, {
        key: "removingToCart",
        value: function removingToCart() {
          var _this5 = this;

          this.shared.cartProducts.forEach(function (element) {
            if (element.product_id == _this5.p.id) {
              _this5.qunatityMinus(element);
            }
          });
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(id) {
          var _this6 = this;

          this.shared.cartProducts.forEach(function (value, index) {
            if (value.cart_id == id) {
              _this6.shared.cartProducts.splice(index, 1);

              console.log("removing" + id);
            }
          });
          this.shared.removeCart(this.shared.cartProducts);
        }
      }, {
        key: "updateCart",
        value: function updateCart() {
          this.shared.removeCart(this.shared.cartProducts);
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__["AppEventsService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductComponent.prototype, "p", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductComponent.prototype, "type", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.scss */
      "./src/components/product/product.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__["AppEventsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iLCJpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ScrollingFeaturedProductsComponent */

  /***/
  function srcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingFeaturedProductsComponent", function () {
      return ScrollingFeaturedProductsComponent;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ScrollingFeaturedProductsComponent = /*#__PURE__*/function () {
      function ScrollingFeaturedProductsComponent(config, shared) {
        _classCallCheck(this, ScrollingFeaturedProductsComponent);

        this.config = config;
        this.shared = shared; // For products

        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
      }

      _createClass(ScrollingFeaturedProductsComponent, [{
        key: "getProducts",
        value: function getProducts() {
          var _this7 = this;

          if (this.loadingServerData) return 0;

          if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
          }

          this.loadingServerData = true;
          var query = 'products?' + 'page=' + this.page;
          if (this.selected != '') query = 'products?page=' + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;
          this.config.getWoo(query).then(function (data) {
            var dat = data;
            _this7.infinite.disabled = false;

            if (_this7.page == 1) {
              _this7.products = new Array();
            }

            if (dat.length != 0) {
              _this7.page++;

              var _iterator4 = _createForOfIteratorHelper(dat),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var value = _step4.value;

                  _this7.products.push(value);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            if (dat.length == 0) {
              _this7.infinite.disabled = true;
            }

            _this7.loadingServerData = false;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }]);

      return ScrollingFeaturedProductsComponent;
    }();

    ScrollingFeaturedProductsComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])], ScrollingFeaturedProductsComponent.prototype, "infinite", void 0);
    ScrollingFeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scrolling-featured-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scrolling-featured-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scrolling-featured-products.component.scss */
      "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])], ScrollingFeaturedProductsComponent);
    /***/
  },

  /***/
  "./src/components/share/share.module.ts":
  /*!**********************************************!*\
    !*** ./src/components/share/share.module.ts ***!
    \**********************************************/

  /*! exports provided: ShareModule */

  /***/
  function srcComponentsShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
      return ShareModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/components/banner/banner.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/components/product/product.component.ts");
    /* harmony import */


    var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../vendor-list/vendor-list.component */
    "./src/components/vendor-list/vendor-list.component.ts");
    /* harmony import */


    var _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sliding-tabs/sliding-tabs.component */
    "./src/components/sliding-tabs/sliding-tabs.component.ts");
    /* harmony import */


    var _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../scrolling-featured-products/scrolling-featured-products.component */
    "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../categories/categories.component */
    "./src/components/categories/categories.component.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); //for home banner
    //for home footer segment
    // for product
    //for vendor list
    //for sliding tab
    //for featrued product scrolling
    //for categories


    var ShareModule = function ShareModule() {
      _classCallCheck(this, ShareModule);
    };

    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"], _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"], _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]],
      exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"], _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"], _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]]
    })], ShareModule);
    /***/
  },

  /***/
  "./src/components/sliding-tabs/sliding-tabs.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/components/sliding-tabs/sliding-tabs.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSlidingTabsSlidingTabsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sliding-tabs .first-slide {\n  width: 80px !important;\n}\n.sliding-tabs ion-slides {\n  background-color: var(--ion-background-color);\n}\n.sliding-tabs ion-slides ion-slide {\n  height: auto;\n  display: inline-grid;\n  text-align: center;\n  width: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 12px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: transparent;\n  color: var(--ion-text-color);\n  text-transform: uppercase;\n  min-height: 56px;\n}\n.sliding-tabs ion-slides ion-slide img {\n  width: 32px;\n  height: 36px;\n  padding: 6px;\n  margin: auto;\n}\n.sliding-tabs ion-slides .selected {\n  border-bottom-color: var(--ion-primary-color);\n  background-color: var(accent-color);\n}\n.sliding-tabs ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy9zbGlkaW5nLXRhYnMvc2xpZGluZy10YWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvc2xpZGluZy10YWJzL3NsaWRpbmctdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0FDQVI7QURFSTtFQUNJLDZDQUFBO0FDQVI7QURDUTtFQU9JLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTFo7QURoQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDa0JoQjtBRENRO0VBQ0ksNkNBQUE7RUFDQSxtQ0FBQTtBQ0NaO0FESVE7RUFDSSxrQkFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NsaWRpbmctdGFicy9zbGlkaW5nLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGluZy10YWJzIHtcclxuICAgIC5maXJzdC1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICBpb24tc2xpZGUge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihhY2NlbnQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnNsaWRpbmctdGFicyAuZmlyc3Qtc2xpZGUge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xufVxuLnNsaWRpbmctdGFicyBpb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuLnNsaWRpbmctdGFicyBpb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLWhlaWdodDogNTZweDtcbn1cbi5zbGlkaW5nLXRhYnMgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2xpZGluZy10YWJzIGlvbi1zbGlkZXMgLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0taW9uLXByaW1hcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoYWNjZW50LWNvbG9yKTtcbn1cbi5zbGlkaW5nLXRhYnMgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/sliding-tabs/sliding-tabs.component.ts":
  /*!***************************************************************!*\
    !*** ./src/components/sliding-tabs/sliding-tabs.component.ts ***!
    \***************************************************************/

  /*! exports provided: SlidingTabsComponent */

  /***/
  function srcComponentsSlidingTabsSlidingTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidingTabsComponent", function () {
      return SlidingTabsComponent;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var SlidingTabsComponent = /*#__PURE__*/function () {
      function SlidingTabsComponent(shared, config, loading, applicationRef) {
        _classCallCheck(this, SlidingTabsComponent);

        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.sliderConfig = {
          slidesPerView: "auto"
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '0';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
      }

      _createClass(SlidingTabsComponent, [{
        key: "getProducts",
        value: function getProducts(infiniteScroll) {
          var _this8 = this;

          if (this.loadingServerData) return 0;

          if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
          }

          this.loadingServerData = true;
          var query = 'products?' + 'page=' + this.page;
          if (this.selected != '0') query = 'products?category=' + this.selected + '&page=' + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;

            _this8.infinite.complete();

            if (_this8.page == 1) {
              _this8.products = new Array();
            }

            if (dat.length != 0) {
              _this8.page++;

              var _iterator5 = _createForOfIteratorHelper(dat),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var value = _step5.value;

                  _this8.products.push(value);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            if (dat.length < 10) {
              _this8.infinite.disabled = true;
            }

            _this8.loadingServerData = false;

            _this8.applicationRef.tick();
          });
        } //changing tab

      }, {
        key: "changeTab",
        value: function changeTab(c) {
          this.infinite.disabled = false;
          this.page = 1;
          if (c == '0') this.selected = c;else this.selected = c.id;
          this.getProducts(null); //this.loading.autoHide(700);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts(null);
        }
      }]);

      return SlidingTabsComponent;
    }();

    SlidingTabsComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], SlidingTabsComponent.prototype, "infinite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sliding-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sliding-tabs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sliding-tabs.component.scss */
      "./src/components/sliding-tabs/sliding-tabs.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], SlidingTabsComponent);
    /***/
  },

  /***/
  "./src/components/vendor-list/vendor-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/components/vendor-list/vendor-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsVendorListVendorListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swiper-slide {\n  width: 40%;\n}\n\nion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n\nion-card ion-img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n}\n\nion-card p {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: black;\n}\n\nion-card {\n  width: 100%;\n}\n\nion-skeleton-text {\n  height: 80px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9FVkVSWURBWS1GQVJNUy9ldmVyZGF5X25ldy9zcmMvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGlvbi1pbWcge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4iLCIuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmlvbi1jYXJkIGlvbi1pbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jYXJkIHAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/vendor-list/vendor-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/components/vendor-list/vendor-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: VendorListComponent */

  /***/
  function srcComponentsVendorListVendorListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorListComponent", function () {
      return VendorListComponent;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var VendorListComponent = /*#__PURE__*/function () {
      function VendorListComponent(navCtrl, config, shared, loading, http, applicationRef) {
        _classCallCheck(this, VendorListComponent);

        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef; //for product slider after banner

        this.sliderConfig = {
          slidesPerView: 2.5,
          spaceBetween: 0
        };
      }

      _createClass(VendorListComponent, [{
        key: "openVendorPage",
        value: function openVendorPage(c) {
          var _this9 = this;

          if (this.config.showVendorInfo) {
            this.loading.show();
            this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + c.user_id).then(function (data) {
              _this9.loading.hide();

              var d = data;

              _this9.shared.storePageData.push(d);

              var id;
              if (d.ID) id = d.ID;
              if (d.id) id = d.id;

              _this9.navCtrl.navigateForward(_this9.config.currentRoute + "/store/" + id);

              _this9.applicationRef.tick();
            });
          } else if (this.config.showWcVendorInfo) {
            //this.loading.show();
            this.shared.storePageData.push(c);
            console.log(this.shared.storePageData);
            var id;
            if (c.ID) id = c.ID;
            if (c.id) id = c.id;
            if (c.user_id) id = c.user_id;
            this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id); // this.http.get(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + c.user_id).map(res => res.json()).subscribe(data => {
            //   this.loading.hide();
            //   this.applicationRef.tick();
            // });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VendorListComponent;
    }();

    VendorListComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    VendorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-list.component.scss */
      "./src/components/vendor-list/vendor-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], VendorListComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32-es5.js.map