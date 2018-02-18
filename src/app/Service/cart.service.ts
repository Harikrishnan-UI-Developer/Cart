import { Injectable } from '@angular/core';

@Injectable()

export class cart_ser {
constructor(){

}


// doubt
cartAdd(localStorage:any, pid:string){
  if(localStorage==undefined || localStorage=='' || localStorage==null){
      localStorage = {};
   }

   if(localStorage[pid]==undefined){
       //datas.push({'applee':1});
       localStorage[pid]=1;
    }else{
        localStorage[pid] = localStorage[pid]+1;
    }
     return localStorage;
   }


viewcart(localStorage:any, ProductMod:any){

  if(localStorage==undefined || localStorage=='' || localStorage==null){
      localStorage = {};
  }

  let cartItem={};
  let GrandAmount:number=0;
  Object.keys(localStorage).forEach(item=>{
    console.log('item:'+item);
   console.log("===>",item,ProductMod,"promode",ProductMod[item])
    GrandAmount += (localStorage[item] * ProductMod[item].price);
    cartItem[item]={
      order_price: localStorage[item] * ProductMod[item].price,
        order_quandity: localStorage[item],
        order_label:  ProductMod[item].label
     };
;
});

return{
  ordercartlist: cartItem,
  ordertotalmount: GrandAmount
};
}

cartDelete(localStorage:any, pid:string){
    delete localStorage[pid];
    return localStorage;
}



cartUpdate(localStorage:any,pid:string,sign:string){
  if(sign=='+'){
    localStorage[pid]=localStorage[pid]+1;

  }

  if(sign=='-'){
    localStorage[pid]=localStorage[pid]-1;
    if(localStorage[pid]<=0){
      delete localStorage[pid];
    }

  }
return localStorage;
}

}
