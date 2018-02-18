import { Injectable } from '@angular/core';

@Injectable()


export class ProdutList{

public ProductDetail:any ={
  product1:{
      label:"Apple",
      Image:"apple.jpg",
      Qty:1,
      price:25,
      uid:"Apple"
  },

  product2:{
      label:"Kiwi",
      Image:"kiwi.jpg",
      Qty:1,
      price:85,
      uid:"Kiwi"
  },

  product3:{
      label:"Orange",
      Image:"orange.jpg",
      Qty:1,
      price:30,
      uid:"Orange"
  },

  product4:{
      label:"Grapes",
      Image:"Grapes.jpg",
      Qty:1,
      price:55,
      uid:"Grapes"
  },

  product5:{
      label:"Banana",
      Image:"banana.jpg",
      Qty:1,
      price:5,
      uid:"Banana"
  },

  product6:{
      label:"Pineapple",
      Image:"pineapple.jpg",
      Qty:1,
      price:50,
      uid:"Pineapple"
  },
}


}
