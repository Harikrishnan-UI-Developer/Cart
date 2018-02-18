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
var billingcls = (function () {
    function billingcls(products, storage, cart) {
        this.products = products;
        this.storage = storage;
        this.cart = cart;
        this.ordersummary = [];
    }
    billingcls.prototype.ngOnInit = function () {
        this.viewcart();
    };
    billingcls.prototype.arrayKeys = function (obj) {
        return Object.keys(obj);
    };
    billingcls.prototype.viewcart = function () {
        alert('vcart');
        this.ordersummary = this.cart.viewcart(this.storage.get('cart'), this.products.ProductDetail);
        console.log(this.ordersummary);
    };
    billingcls.prototype.cartaddclk = function (pid) {
        alert('add');
        var cart = this.cart.cartAdd(this.storage.get('cart'), pid);
        this.storage.set({ 'cart': cart });
        this.viewcart();
    };
    billingcls.prototype.deletecart = function (pid) {
        alert('delete');
        var cart = this.cart.cartDelete(this.storage.get('cart'), pid);
        this.storage.set({ 'cart': cart });
        this.viewcart();
    };
    billingcls.prototype.cartUpdate = function (sign, pid) {
        alert('update');
        var cartData = this.cart.cartUpdate(this.storage.get('cart'), pid, sign);
        this.storage.set({ cart: cartData });
        this.viewcart();
    };
    return billingcls;
}());
billingcls = __decorate([
    core_1.Component({
        selector: '',
        template: "\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\">Billing Page</h2>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n      <div class=\"panel\">\n        <div class=\"col-md-8\">\n        <form>\n            <div class=\"form-group\">\n            <label>Name:</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Enter Name\">\n            </div>\n            <div class=\"form-group\">\n            <label>Deleivery Address:</label>\n            <textarea class=\"form-control\" rows=\"5\"></textarea>\n            </div>\n            <div class=\"form-group\">\n            <label>Mobile Number:</label>\n            <input class=\"form-control\" placeholder=\"Enter Mobile Number\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n\n        </div>\n        </div>\n        <div class=\"col-md-4\">\n        <table class=\"table bg-info\">\n            <tr>\n              <td>Product</td>\n              <td>Quandity</td>\n              <td>Price</td>\n            </tr>\n      <tr *ngFor=\"let product_one of arrayKeys(ordersummary.ordercartlist)\">\n          <td>{{ordersummary.ordercartlist[product_one].order_label}} </td>\n          <td><button class=\"btn btn-primary btn-xs\" (click)=\"cartUpdate('+',product_one)\"> + </button> {{ordersummary.ordercartlist[product_one].order_quandity}} <button class=\"btn btn-danger btn-xs\" (click)=\"cartUpdate('-',product_one)\">-</button></td>\n          <td>{{ordersummary.ordercartlist[product_one].order_price}}</td>\n          <td> <Strong (click)=\"deletecart(product_one)\">X</Strong> </td>\n      </tr>\n      <tr>\n        <td><Strong>Total</Strong></td><td></td>\n        <td>{{ordersummary.ordertotalmount}}</td>\n      </tr>\n      </table>\n        </div>\n      </div>\n    </div>\n",
        styles: ["\ntextarea{\n  resize:none;\n}\n\n\n  "]
    }),
    __metadata("design:paramtypes", [productList_1.ProdutList,
        Stoage_service_1.StorageService,
        cart_service_1.cart_ser])
], billingcls);
exports.billingcls = billingcls;
//# sourceMappingURL=Bill_file.js.map