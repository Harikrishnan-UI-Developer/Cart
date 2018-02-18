import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { productFileCls } from './Pages/Product/Product_file';
import { ProdutList } from './Model/productList';
import { billingcls } from './Pages/Billing/Bill_file';
import { cart_ser } from './Service/cart.service';
import { StorageService } from './Service/Stoage.service';


const appRoutes: Routes = [
  //{ path: 'mycart', component:AppComponent},
  { path: 'Product/Product_file', component: productFileCls },
  { path: 'Billing/Bill_file', component: billingcls },
//  { path: '', component: PaymentListpage },
  { path: '',
    redirectTo: '/Product/Product_file',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot( appRoutes,
     { enableTracing: false, useHash:false} // <-- debugging purposes only
   ) ],
  declarations: [ AppComponent, productFileCls, billingcls ],
  bootstrap:    [ AppComponent ],
  providers: [ ProdutList, StorageService , cart_ser ]
})
export class AppModule { }
