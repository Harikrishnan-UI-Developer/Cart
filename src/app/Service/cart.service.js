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
var cart_ser = (function () {
    function cart_ser() {
    }
    // doubt
    cart_ser.prototype.cartAdd = function (localStorage, pid) {
        if (localStorage == undefined || localStorage == '' || localStorage == null) {
            localStorage = {};
        }
        if (localStorage[pid] == undefined) {
            //datas.push({'applee':1});
            localStorage[pid] = 1;
        }
        else {
            localStorage[pid] = localStorage[pid] + 1;
        }
        return localStorage;
    };
    cart_ser.prototype.viewcart = function (localStorage, ProductMod) {
        if (localStorage == undefined || localStorage == '' || localStorage == null) {
            localStorage = {};
        }
        var cartItem = {};
        var GrandAmount = 0;
        Object.keys(localStorage).forEach(function (item) {
            console.log('item:' + item);
            console.log("===>", item, ProductMod, "promode", ProductMod[item]);
            GrandAmount += (localStorage[item] * ProductMod[item].price);
            cartItem[item] = {
                order_price: localStorage[item] * ProductMod[item].price,
                order_quandity: localStorage[item],
                order_label: ProductMod[item].label
            };
            ;
        });
        return {
            ordercartlist: cartItem,
            ordertotalmount: GrandAmount
        };
    };
    cart_ser.prototype.cartDelete = function (localStorage, pid) {
        delete localStorage[pid];
        return localStorage;
    };
    cart_ser.prototype.cartUpdate = function (localStorage, pid, sign) {
        if (sign == '+') {
            localStorage[pid] = localStorage[pid] + 1;
        }
        if (sign == '-') {
            localStorage[pid] = localStorage[pid] - 1;
            if (localStorage[pid] <= 0) {
                delete localStorage[pid];
            }
        }
        return localStorage;
    };
    return cart_ser;
}());
cart_ser = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], cart_ser);
exports.cart_ser = cart_ser;
//# sourceMappingURL=cart.service.js.map