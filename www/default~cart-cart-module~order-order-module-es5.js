function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~order-order-module"], {
  /***/
  "./src/providers/coupon/coupon.service.ts":
  /*!************************************************!*\
    !*** ./src/providers/coupon/coupon.service.ts ***!
    \************************************************/

  /*! exports provided: CouponService */

  /***/
  function srcProvidersCouponCouponServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponService", function () {
      return CouponService;
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


    var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var CouponService = /*#__PURE__*/function () {
      function CouponService(shared) {
        _classCallCheck(this, CouponService);

        this.shared = shared; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All below services are used for coupon >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //========================================================================================================
        //=============================== service to calculate line items total ==============================

        this.lineItemTotalService = function (lineItems) {
          var total = 0;

          var _iterator = _createForOfIteratorHelper(lineItems),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              // console.log(value);
              var subtotal = parseFloat(value.total);
              total = total + subtotal;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return total;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkOnSaleService = function (lineItems, coupon) {
          if (coupon.exclude_sale_items == false) return false;
          var found = false;
          lineItems.some(function (value, index) {
            if (value.on_sale == true) found = true;
          });
          if (found && coupon.discount_type == 'fixed_cart') return true;else if (found && coupon.discount_type == 'percent') return true;else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.emailCheckService = function (emailList) {
          if (emailList.length == 0) return false;
          var found = false;

          var _iterator2 = _createForOfIteratorHelper(emailList),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;

              if (value == this.shared.customerData.email) {
                found = true;
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return found;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkCategoriesService = function (value, coupon) {
          // console.log(value);
          // console.log(coupon.product_categories);
          if (coupon.product_categories.length == 0 && coupon.excluded_product_categories.length == 0) return true;
          var found = 0;

          var _iterator3 = _createForOfIteratorHelper(coupon.product_categories),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var y = _step3.value;

              var _iterator5 = _createForOfIteratorHelper(value.categories),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var z = _step5.value;
                  console.log("product_categories x = " + z.id + " y=" + y);

                  if (z.id == y) {
                    found++;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (coupon.product_categories.length == 0) {
            found++;
          }

          var found2 = 0; //for excluded categries

          var _iterator4 = _createForOfIteratorHelper(coupon.excluded_product_categories),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _y = _step4.value;

              var _iterator6 = _createForOfIteratorHelper(value.categories),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _z = _step6.value;
                  console.log("excluded_product_categories x = " + _z.id + " y=" + _y);

                  if (_z.id == _y) {
                    found2++;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            } //  console.log('found ' + found + ' found2 ' + found2);

          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (found != 0 && found2 == 0) return true;else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.couponApplyOnProductService = function (value, coupon) {
          if (coupon.product_ids.length == 0 && coupon.excluded_product_ids.length == 0) return true;
          var id = value.product_id;
          var found = 0; //checking in allowed products

          var _iterator7 = _createForOfIteratorHelper(coupon.product_ids),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _value = _step7.value;

              //  console.log("id = " + id + "vid" + vId + " value =" + value);
              if (id == _value) {
                found++;
                return true;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          if (coupon.product_ids.length == 0) {
            found++;
          }

          var found2 = 0; //checking in excluded products

          var _iterator8 = _createForOfIteratorHelper(coupon.excluded_product_ids),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _value2 = _step8.value;

              if (id == _value2) {
                found2++;
                return true;
              }
            } // console.log('found ' + found + ' found2 ' + found2);

          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          if (found != 0 && found2 == 0) {
            return true;
          } else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkAlreadyAppliedService = function (coupon, couponLines) {
          if (couponLines.length == 0) return false;
          var found = false;

          var _iterator9 = _createForOfIteratorHelper(couponLines),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var value = _step9.value;
              if (value.code == coupon.code) found = true;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return found;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkUserUsageService = function (coupon) {
          if (coupon.used_by.length == 0) return false;
          if (coupon.usage_limit == null && coupon.usage_limit_per_user == null) return false;

          if (coupon.usage_limit == null) {} else if (coupon.usage_count >= coupon.usage_limit) return true; //console.log($rootScope.customerData);


          var id = this.shared.customerData.customers_email_address;
          if (this.shared.customerData != null) var id2 = this.shared.customerData.customers_id;
          var count = 0;

          var _iterator10 = _createForOfIteratorHelper(coupon.used_by),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var value = _step10.value;
              if (value == id || value == id2) count++;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          if (count >= coupon.usage_limit_per_user) return true;else return false;
        }; //========================================================================================================
        //=============================== service to check ==============================


        this.checkNoItemInCartService = function (lineItems, coupon) {
          var productIds = coupon.product_ids;
          var ExProductIds = coupon.excluded_product_ids;
          var pCategory = coupon.product_categories;
          var ExPCategory = coupon.excluded_product_categories;
          if (productIds.length == 0 && ExProductIds.length == 0 && pCategory.length == 0 && ExPCategory.length == 0) return true; // var pFound = 0;
          // var ExPfound = 0;

          var result = false; //checking in products ids

          if (productIds.length != 0) {
            var _iterator11 = _createForOfIteratorHelper(lineItems),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var x = _step11.value;
                //upper loop
                var id = x.product_id;
                var vId = -1;
                if (x.variation_id != undefined) vId = x.variation_id;

                var _iterator12 = _createForOfIteratorHelper(productIds),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var y = _step12.value;

                    //lower loop 
                    if (id == y || vId == y) {
                      result = true;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          } else {
            result = true;
          } //checking in excluded products ids


          if (ExProductIds.length != 0) {
            var _iterator13 = _createForOfIteratorHelper(lineItems),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _x = _step13.value;
                //upper loop  
                var _id = _x.product_id;

                var _vId = -1;

                if (_x.variation_id != undefined) _vId = _x.variation_id;

                var _iterator14 = _createForOfIteratorHelper(ExProductIds),
                    _step14;

                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var _y2 = _step14.value;

                    //lower loop  
                    if (_id == _y2 || _vId == _y2) {
                      result = false;
                    }
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          var result2 = false; //checking in products categories

          if (pCategory.length != 0) {
            var _iterator15 = _createForOfIteratorHelper(lineItems),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var w = _step15.value;

                //upper loop 
                var _iterator16 = _createForOfIteratorHelper(w.categories),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _x2 = _step16.value;

                    //midddle loop 
                    var _iterator17 = _createForOfIteratorHelper(pCategory),
                        _step17;

                    try {
                      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                        var _y3 = _step17.value;

                        //lower loop 
                        // console.log("x " + x.id + " y " + y);
                        if (_x2.id == _y3) {
                          result2 = true;
                        }
                      }
                    } catch (err) {
                      _iterator17.e(err);
                    } finally {
                      _iterator17.f();
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          } else {
            result2 = true;
          }

          if (ExPCategory.length != 0) {
            var _iterator18 = _createForOfIteratorHelper(lineItems),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _w = _step18.value;

                //upper loop 
                var _iterator19 = _createForOfIteratorHelper(_w.categories),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _x3 = _step19.value;

                    //midddle loop 
                    var _iterator20 = _createForOfIteratorHelper(pCategory),
                        _step20;

                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                        var _y4 = _step20.value;

                        //lower loop 
                        // console.log("x " + x.id + " y " + y);
                        if (_x3.id == _y4) {
                          result2 = false;
                        }
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          } //console.log("result " + result + " result2 " + result2);


          if (result == true && result2 == true && coupon.discount_type != 'fixed_cart') return true;else if (result == true && result2 == true && coupon.discount_type != 'percent') return true;else if (result == true && result2 == false && coupon.discount_type == 'fixed_product') return true;else if (result == true && result2 == false && coupon.discount_type == 'percent_product') return true;else if (result == false && result2 == true && coupon.discount_type == 'percent_product') return true;else if (result == false && result2 == true && coupon.discount_type == 'fixed_product') return true;else return false;
        }; //========================================================================================================
        //=============================== service to check the validity of coupon  ==============================


        this.validateCouponService = function (coupon, lineItems, couponLines) {
          var expDate = new Date(coupon.date_expires);
          var todayDate = new Date(); //checking coupon expire or not

          if (expDate <= todayDate && coupon.date_expires != null) {
            this.shared.showAlert("Sorry Coupon is Expired");
            return false;
          } // if cart amount is lower than the coupon minimum limit
          else if (this.lineItemTotalService(lineItems) <= coupon.minimum_amount) {
              this.shared.showAlert("Sorry your Cart total is low than coupon min limit!");
              return false;
            } // if cart amount is higher than the coupon minimum limit
            else if (this.lineItemTotalService(lineItems) >= coupon.maximum_amount && coupon.maximum_amount != 0) {
                this.shared.showAlert("Sorry your Cart total is Higher than coupon Max limit!");
                return false;
              } else if (this.emailCheckService(coupon.email_restrictions) == true) {
                this.shared.showAlert("Sorry, this coupon is not valid for this email address!");
                return false;
              } //============================================================== further checking
              else if (this.checkOnSaleService(lineItems, coupon) == true) {
                  this.shared.showAlert("Sorry, this coupon is not valid for sale items.");
                  return false;
                } else if (this.checkAlreadyAppliedService(coupon, couponLines) == true) {
                  this.shared.showAlert("Coupon code already applied!");
                  return false;
                } else if (couponLines != 0 && couponLines[0].individual_use == true) {
                  this.shared.showAlert('Sorry Individual Use Coupon is already applied any other coupon cannot be applied with it !');
                  return false;
                } else if (this.checkUserUsageService(coupon) == true) {
                  this.shared.showAlert('Coupon usage limit has been reached.');
                  return false;
                } else if (this.checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) == false) {
                  this.shared.showAlert('Sorry Coupon Cannot be Applied on these Products!');
                  return false;
                } // else if (checkNoItemInCartService(lineItems, coupon) == false) {
                //   this.shared.showAlert('Sorry, this coupon is not applicable to your cart contents.');
                //   return false;
                // }
                else return true;
        }; //========================================================================================================
        //=============================== service to apply check coupon ==============================


        this.apply = function (coupon, lineItems) {
          var _this = this;

          console.log("apply coupon called");
          var productLimit = coupon.limit_usage_to_x_items; // if (productLimit == 0) productLimit = null;

          var product_qty_flag = 0; //fixed cart applying on line items

          if (coupon.discount_type == 'fixed_cart') {
            var cartTotal = parseFloat(this.lineItemTotalService(lineItems));
            var discount = parseFloat((coupon.amount / cartTotal).toString()); //console.log("discount  " + discount + "   cartTotal  " + cartTotal);

            lineItems.forEach(function (value, index) {
              if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                var result = value.total - parseFloat((discount * value.total).toString());
                if (result < 0) result = 0;
                value.total = result; // console.log("insdir coupe== " + value.total);
                // console.log(lineItems);
              }
            }); //console.log('fixed_cart'); //console.log(lineItems);

            return lineItems;
          } //percent cart applying on line items
          else if (coupon.discount_type == 'percent_old') {
              lineItems.forEach(function (value, index) {
                var amount = parseFloat(coupon.amount);
                var subtotal = parseFloat(value.subtotal);
                var total = parseFloat(value.total);
                var discount = subtotal / 100 * amount;
                value.total = parseFloat((total - discount).toString());
                if (value.total < 0) value.total = 0;
              }); // console.log('percent'); console.log(lineItems);

              return lineItems;
            } //fixed product applying on specific line items
            else if (coupon.discount_type == 'fixed_product') {
                var amount = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                  if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                    var quantity = value.quantity;
                    var total = parseFloat(value.total);

                    if (productLimit > 0) {
                      for (var l = 1; l <= quantity; l++) {
                        if (product_qty_flag < productLimit) {
                          total = parseFloat((total - amount).toString());
                          product_qty_flag = product_qty_flag + 1;
                        }
                      }

                      value.total = total;
                    } else {
                      value.total = parseFloat((total - amount * quantity).toString());
                    }

                    if (value.total < 0) {
                      value.total = 0;
                    }
                  }
                }); // console.log('fixed_product');

                return lineItems;
              } //percent product applying on specific line items
              else if (coupon.discount_type == 'percent') {
                  var _amount = parseFloat(coupon.amount);

                  lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                      var total = parseFloat(value.total);

                      if (productLimit > 0) {
                        for (var l = 1; l <= value.quantity; l++) {
                          var discount = parseFloat((value.price / 100 * _amount).toString());

                          if (product_qty_flag < productLimit) {
                            total = parseFloat((total - discount).toString());
                            product_qty_flag = product_qty_flag + 1;
                          }
                        }

                        value.total = total;
                      } else {
                        value.total = parseFloat((total - total / 100 * _amount).toString());
                      }

                      if (value.total < 0) value.total = 0;
                    }
                  }); //console.log('percent_product');

                  return lineItems;
                } // else return lineItems;

        };
      } //========================================================================================================
      //=============================== service to check coupon will apply on cart or not  ==============================


      _createClass(CouponService, [{
        key: "checkCouponApplyOrNotOnCurrentProducts",
        value: function checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) {
          console.log(coupon.product_categories.length);
          var found = 0;

          if (coupon.product_categories.length == 0) {
            found++;
          }

          var _iterator21 = _createForOfIteratorHelper(coupon.product_categories),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var y = _step21.value;

              var _iterator23 = _createForOfIteratorHelper(lineItems.categories),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var z = _step23.value;
                  console.log("product_categories x = " + z.id + " y=" + y);

                  if (z.id == y) {
                    found++;
                  }
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          var found2 = 0; //for excluded categries

          var _iterator22 = _createForOfIteratorHelper(coupon.excluded_product_categories),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _y5 = _step22.value;

              var _iterator24 = _createForOfIteratorHelper(lineItems.categories),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _z2 = _step24.value;
                  console.log("excluded_product_categories x = " + _z2.id + " y=" + _y5);

                  if (_z2.id == _y5) {
                    found2++;
                  }
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }

          if (found2 != 0) return false;else if (found == 0) return false;else return true;
        }
      }]);

      return CouponService;
    }();

    CouponService.ctorParameters = function () {
      return [{
        type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }];
    };

    CouponService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])], CouponService);
    /***/
  }
}]);
//# sourceMappingURL=default~cart-cart-module~order-order-module-es5.js.map