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
var CartService = (function () {
    function CartService() {
    }
    CartService.prototype.cartAdd = function (cart, pid) {
        if (cart == undefined || cart == '' || cart == null) {
            cart = {};
        }
        if (cart[pid] == undefined) {
            cart[pid] = 1;
        }
        else {
            cart[pid] = cart[pid] + 1;
        }
        return cart;
    };
    CartService.prototype.cartDelete = function (cart, pid) {
        delete cart[pid];
        return cart;
    };
    CartService.prototype.cartUpdate = function (cart, pid, sign) {
        if (sign == '-') {
            cart[pid] = cart[pid] - 1;
            if (cart[pid] <= 0) {
                delete cart[pid];
            }
        }
        if (sign == '+') {
            cart[pid] = cart[pid] + 1;
        }
        return cart;
    };
    CartService.prototype.viewCart = function (cartStorage, prductModel) {
        //console.log(Object.keys(cartStorage).length,cartStorage);
        if (cartStorage == undefined || cartStorage == '' || cartStorage == null) {
            cartStorage = {};
        }
        var cartItems = {};
        var payAmount = 0;
        Object.keys(cartStorage).forEach(function (item) {
            payAmount += (cartStorage[item] * prductModel[item].Price);
            cartItems[item] = {
                Total: cartStorage[item] * prductModel[item].Price,
                qty: cartStorage[item],
                label: prductModel[item].label
            };
            ;
        });
        return {
            cartLists: cartItems,
            amount: payAmount
        };
        //console.log(cartItems);
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map