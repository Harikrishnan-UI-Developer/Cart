"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var productList_1 = require("./../../Model/productList");
var Stoage_service_1 = require("./../../Service/Stoage.service");
var cart_service_1 = require("./../../Service/cart.service");
var productFileCls = (function () {
    function productFileCls(products, storage, cart) {
        this.products = products;
        this.storage = storage;
        this.cart = cart;
        this.ordersummary = [];
    }
    productFileCls.prototype.ngOnInit = function () {
        this.viewcart();
    };
    productFileCls.prototype.arrayKeys = function (obj) {
        return Object.keys(obj);
    };
    productFileCls.prototype.viewcart = function () {
        //alert('vcart');
        this.ordersummary = this.cart.viewcart(this.storage.get('cart'), this.products.ProductDetail);
        console.log(this.ordersummary);
    };
    productFileCls.prototype.cartaddclk = function (pid) {
        alert('pid' + pid);
        var cart = this.cart.cartAdd(this.storage.get('cart'), pid);
        this.storage.set({ 'cart': cart });
        this.viewcart();
    };
    productFileCls.prototype.deletecart = function (pid) {
        alert('delete');
        var cart = this.cart.cartDelete(this.storage.get('cart'), pid);
        this.storage.set({ 'cart': cart });
        this.viewcart();
    };
    productFileCls.prototype.cartUpdate = function (sign, pid) {
        alert('update');
        var cartData = this.cart.cartUpdate(this.storage.get('cart'), pid, sign);
        this.storage.set({ cart: cartData });
        this.viewcart();
    };
    return productFileCls;
}());
productFileCls = __decorate([
    core_1.Component({
        selector: 'ProductPage',
        template: "\n        <html>\n          <body>\n              <div class=\"jumbotron\">\n                  <h3 align=\"center\">Shopping Cart Demo</h3>\n              </div>\n              <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"row\">\n                      <div class=\"col-md-9\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                                <div class=\"panel panel-default panel-demo\">\n                                  <div class=\"panel-heading\">\n                                      <div class=\"panel-title\">Product List</div>\n                                  </div>\n                                  <div class=\"panel-body\">\n                                    <div class=\"row\">\n                                      <div *ngFor=\"let item of arrayKeys(products.ProductDetail)\">\n                                          <div class=\"col-md-4\">\n                                            <div class=\"panel\">\n                                                <h3>{{products.ProductDetail[item].uid}}</h3>\n                                                <div class=\"panel-body\">\n                                                <img class=\"img-responsive img-thumbnail\" src=\"../../assets/images/{{products.ProductDetail[item].Image}}\">\n                                                <p class=\"clearfix\">\n                                                  <span class=\"pull-left\">\n                                                  <Strong class=\"mr-sm\">Price: {{products.ProductDetail[item].price}}</Strong>\n                                                  </span>\n                                                  <span class=\"pull-right\">\n                                                  <Strong>Quandity: {{products.ProductDetail[item].Qty}}</Strong>\n                                                  </span>\n                                                </p>\n                                                </div>\n                                                <button class=\"btn btn-success btn-sm\" (click)=\"cartaddclk(item)\">\n                                                  Add Cart\n                                                </button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 \">\n                            <table class=\"table bg-info\">\n                                <tr>\n                                  <td>Product</td>\n                                  <td>Quandity</td>\n                                  <td>Price</td>\n                                </tr>\n<!-- doubt -->\n                          <tr *ngFor=\"let product_one of arrayKeys(ordersummary.ordercartlist)\">\n                              <td>{{ordersummary.ordercartlist[product_one].order_label}} </td>\n                              <td><button class=\"btn btn-primary btn-xs\" (click)=\"cartUpdate('+',product_one)\"> + </button> {{ordersummary.ordercartlist[product_one].order_quandity}} <button class=\"btn btn-danger btn-xs\" (click)=\"cartUpdate('-',product_one)\">-</button></td>\n                              <td>{{ordersummary.ordercartlist[product_one].order_price}}</td>\n                              <td> <Strong (click)=\"deletecart(product_one)\">X</Strong> </td>\n                          </tr>\n                          <tr>\n                            <td><Strong>Total</Strong></td><td></td>\n                            <td>{{ordersummary.ordertotalmount}}</td>\n                          </tr>\n                          </table>\n\n                          <button [routerLink]=\"['/Billing/Bill_file']\"\n                           class=\"btn btn-sucess btn-md\">Bill Payment</button>\n                      </div>\n                    </div>\n                  </div>\n                  </div>\n              </div>\n          </body>\n        </html>"
    }),
    __metadata("design:paramtypes", [productList_1.ProdutList,
        Stoage_service_1.StorageService,
        cart_service_1.cart_ser])
], productFileCls);
exports.productFileCls = productFileCls;
//# sourceMappingURL=Product_file.js.map