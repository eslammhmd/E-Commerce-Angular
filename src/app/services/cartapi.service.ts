import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartDataList:any=[];
  productList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }

  // get product
  getProductData(){
    return this.productList.asObservable()
  }

  // set product data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  // add to cart detalis
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount()
  }

  // get total amount
  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total
    }) 
  }

  // remove one cart
  removeCartData(product:any){
    this.cartDataList.map((a:any , index:any)=>{
      if(product.id  === a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList)
  }

  // remove all carts
  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }
}
