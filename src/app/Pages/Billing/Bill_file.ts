import { Component } from '@angular/core';


import { ProdutList } from './../../Model/productList';
import { StorageService } from './../../Service/Stoage.service';
import { cart_ser } from './../../Service/cart.service';

@Component({
selector:'',
template:`
    <div class="jumbotron">
        <h2 class="text-center">Billing Page</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
      <div class="panel">
        <div class="col-md-8">
        <form>
            <div class="form-group">
            <label>Name:</label>
            <input type="email" class="form-control" placeholder="Enter Name">
            </div>
            <div class="form-group">
            <label>Deleivery Address:</label>
            <textarea class="form-control" rows="5"></textarea>
            </div>
            <div class="form-group">
            <label>Mobile Number:</label>
            <input class="form-control" placeholder="Enter Mobile Number">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>

        </div>
        </div>
        <div class="col-md-4">
        <table class="table bg-info">
            <tr>
              <td>Product</td>
              <td>Quandity</td>
              <td>Price</td>
            </tr>
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
        </div>
      </div>
    </div>
`,
styles:[`
textarea{
  resize:none;
}


  `]



})

export class billingcls{

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
alert('vcart');
  this.ordersummary = this.cart.viewcart(this.storage.get('cart'),this.products.ProductDetail);
  console.log(this.ordersummary);
}

cartaddclk(pid:string){
alert('add');
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
