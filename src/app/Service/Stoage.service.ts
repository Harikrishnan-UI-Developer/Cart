import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{
  private datas:any={};
   constructor(){
      this.localStorageInit();
   }
   localStorageInit(){
      //localStorage.clear();
     let obj:any = localStorage.getItem('ProductDet');
     if(obj=='' || obj=='[]' || obj==null || obj==undefined){
       this.datas={};
     }else{
       this.datas = JSON.parse(obj);

     }
   }
   set(obj:any){
     let obj_keys = Object.keys(obj);
      (obj_keys).forEach( (item:string)=>{
       this.datas[item] = obj[item];
       } );
     this.localStorageStore( this.datas );
   }
   localStorageStore(obj:any){
     localStorage.setItem('ProductDet',JSON.stringify(obj));
   }
   // addvalue(obj:any){
   //   let obj_keys = Object.keys(obj);
   //    (obj_keys).forEach( (item:string)=>{
   //     this.datas[item] = obj[item];
   //     } );
   //   localStorage.setItem('calculatePrice',JSON.stringify(obj));
   // }

   get(key:string){
     //alert('key'+key);
     if(key==''){
       return this.datas;
     }else{
       if(this.datas[key])
          return this.datas[key];
      else
         return {};
     }
   }

   remove(){
    // delete (' ')[key];
     localStorage.clear();
    // this.localStorageStore( this.datas );
   }
 }
