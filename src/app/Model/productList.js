"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProdutList = (function () {
    function ProdutList() {
        this.ProductDetail = {
            product1: {
                label: "Apple",
                Image: "apple.jpg",
                Qty: 1,
                price: 25,
                uid: "Apple"
            },
            product2: {
                label: "Kiwi",
                Image: "kiwi.jpg",
                Qty: 1,
                price: 85,
                uid: "Kiwi"
            },
            product3: {
                label: "Orange",
                Image: "orange.jpg",
                Qty: 1,
                price: 30,
                uid: "Orange"
            },
            product4: {
                label: "Grapes",
                Image: "Grapes.jpg",
                Qty: 1,
                price: 55,
                uid: "Grapes"
            },
            product5: {
                label: "Banana",
                Image: "banana.jpg",
                Qty: 1,
                price: 5,
                uid: "Banana"
            },
            product6: {
                label: "Pineapple",
                Image: "pineapple.jpg",
                Qty: 1,
                price: 50,
                uid: "Pineapple"
            },
        };
    }
    return ProdutList;
}());
ProdutList = __decorate([
    core_1.Injectable()
], ProdutList);
exports.ProdutList = ProdutList;
//# sourceMappingURL=productList.js.map