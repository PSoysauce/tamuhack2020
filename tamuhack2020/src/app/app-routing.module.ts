import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component'


const routes: Routes = [
  {path:'', pathMatch: 'full', component: OrderPageComponent },
  {path: '**',component: OrderPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
