import { Component , OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any;
  // from here
filterCategory:any;

  constructor(private api:ApiService , private cartApi:CartapiService){}

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category === `women's clothing`){
          a.category = 'women'
        }
        if(a.category === `men's clothing`){
          a.category = 'men'
        }
        Object.assign(a , {quantity:1 , total:a.price})
      });
    })
  }

  addToCart(item:any){
    this.cartApi.addToCart(item)
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a
      }
    })
  }
}
