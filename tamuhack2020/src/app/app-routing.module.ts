import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './myprofile/shopping-cart/shopping-cart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {AuthService } from './services/auth-service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
