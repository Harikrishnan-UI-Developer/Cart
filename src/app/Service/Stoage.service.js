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
var StorageService = (function () {
    function StorageService() {
        this.datas = {};
        this.localStorageInit();
    }
    StorageService.prototype.localStorageInit = function () {
        //localStorage.clear();
        var obj = localStorage.getItem('ProductDet');
        if (obj == '' || obj == '[]' || obj == null || obj == undefined) {
            this.datas = {};
        }
        else {
            this.datas = JSON.parse(obj);
        }
    };
    StorageService.prototype.set = function (obj) {
        var _this = this;
        var obj_keys = Object.keys(obj);
        (obj_keys).forEach(function (item) {
            _this.datas[item] = obj[item];
        });
        this.localStorageStore(this.datas);
    };
    StorageService.prototype.localStorageStore = function (obj) {
        localStorage.setItem('ProductDet', JSON.stringify(obj));
    };
    // addvalue(obj:any){
    //   let obj_keys = Object.keys(obj);
    //    (obj_keys).forEach( (item:string)=>{
    //     this.datas[item] = obj[item];
    //     } );
    //   localStorage.setItem('calculatePrice',JSON.stringify(obj));
    // }
    StorageService.prototype.get = function (key) {
        //alert('key'+key);
        if (key == '') {
            return this.datas;
        }
        else {
            if (this.datas[key])
                return this.datas[key];
            else
                return {};
        }
    };
    StorageService.prototype.remove = function () {
        // delete (' ')[key];
        localStorage.clear();
        // this.localStorageStore( this.datas );
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=Stoage.service.js.map