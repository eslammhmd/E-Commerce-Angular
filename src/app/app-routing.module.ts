import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path : '' , redirectTo :'home' , pathMatch:'full'},
  {path:'header' , component:HeaderComponent},
  {path:'home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'cart' , component:CartComponent},
  {path:'footer' , component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
