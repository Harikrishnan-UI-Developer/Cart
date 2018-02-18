"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var Product_file_1 = require("./Pages/Product/Product_file");
var productList_1 = require("./Model/productList");
var Bill_file_1 = require("./Pages/Billing/Bill_file");
var cart_service_1 = require("./Service/cart.service");
var Stoage_service_1 = require("./Service/Stoage.service");
var appRoutes = [
    //{ path: 'mycart', component:AppComponent},
    { path: 'Product/Product_file', component: Product_file_1.productFileCls },
    { path: 'Billing/Bill_file', component: Bill_file_1.billingcls },
    //  { path: '', component: PaymentListpage },
    { path: '',
        redirectTo: '/Product/Product_file',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: false } // <-- debugging purposes only
            )],
        declarations: [app_component_1.AppComponent, Product_file_1.productFileCls, Bill_file_1.billingcls],
        bootstrap: [app_component_1.AppComponent],
        providers: [productList_1.ProdutList, Stoage_service_1.StorageService, cart_service_1.cart_ser]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map