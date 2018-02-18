import { Component } from '@angular/core';

import { ProdutList } from './../../Model/productList';
import { StorageService } from './../../Service/Stoage.service';
import { cart_ser } from './../../Service/cart.service';

@Component({
  selector:'ProductPage',
  template:`
        <html>
          <body>
              <div class="jumbotron">
                  <h3 align="center">Shopping Cart Demo</h3>
              </div>
              <div class="container">
              <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="row">
                          <div class="col-md-12">
                                <div class="panel panel-default panel-demo">
                                  <div class="panel-heading">
                                      <div class="panel-title">Product List</div>
                                  </div>
                                  <div class="panel-body">
                                    <div class="row">
                                      <div *ngFor="let item of arrayKeys(products.ProductDetail)">
                                          <div class="col-md-4">
                                            <div class="panel">
                                                <h3>{{products.ProductDetail[item].uid}}</h3>
                                                <div class="panel-body">
                                                <img class="img-responsive img-thumbnail" src="../../assets/images/{{products.ProductDetail[item].Image}}">
                                                <p class="clearfix">
                                                  <span class="pull-left">
                                                  <Strong class="mr-sm">Price: {{products.ProductDetail[item].price}}</Strong>
                                                  </span>
                                                  <span class="pull-right">
                                                  <Strong>Quandity: {{products.ProductDetail[item].Qty}}</Strong>
                                                  </span>
                                                </p>
                                                </div>
                                                <button class="btn btn-success btn-sm" (click)="cartaddclk(item)">
                                                  Add Cart
                                                </button>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 ">
                            <table class="table bg-info">
                                <tr>
                                  <td>Product</td>
                                  <td>Quandity</td>
                                  <td>Price</td>
                                </tr>
<!-- doubt -->
                          <tr *ngFor="let product_one of arrayKeys(ordersummary.ordercartlist)">
                              <td>{{ordersummary.ordercartlist[product_one].order_label}} </td>
                              <td><button class="btn btn-primary btn-xs" (click)="cartUpdate('+',product_one)"> + </button> {{ordersummary.ordercartlist[product_one].order_quandity}} <button class="btn btn-danger btn-xs" (click)="cartUpdate('-',product_one)">-</button></td>
                              <td>{{ordersummary.ordercartlist[product_one].order_price}}</td>
                              <td> <Strong (click)="deletecart(product_one)">X</Strong> </td>
                          </tr>
                          <tr>
                            <td><Strong>Total</Strong></td><td></td>
                            <td>{{ordersummary.ordertotalmount}}</td>
                          </tr>
                          </table>

                          <button [routerLink]="['/Billing/Bill_file']"
                           class="btn btn-sucess btn-md">Bill Payment</button>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
          </body>
        </html>`
})

export class productFileCls{

public ordersummary:any=[];
constructor(
  public products:ProdutList,
  public storage:StorageService,
  public cart:cart_ser,
){

}

ngOnInit(){
    this.viewcart();
}

arrayKeys(obj:any){  // doubt what it will do..
    return Object.keys(obj);
}


viewcart(){
//alert('vcart');
  this.ordersummary = this.cart.viewcart(this.storage.get('cart'),this.products.ProductDetail);
  console.log(this.ordersummary);
}

cartaddclk(pid:string){
alert('pid'+pid);
let cart = this.cart.cartAdd(this.storage.get('cart'),pid);
this.storage.set({'cart':cart});
this.viewcart();

}


deletecart(pid:string){
alert('delete');
let cart=this.cart.cartDelete(this.storage.get('cart'),pid);
this.storage.set({'cart':cart});
this.viewcart();
}


cartUpdate(sign:string,pid:string){
alert('update');
  let cartData = this.cart.cartUpdate(this.storage.get('cart'),pid,sign);
  this.storage.set({ cart:cartData});
  this.viewcart();
}

}
