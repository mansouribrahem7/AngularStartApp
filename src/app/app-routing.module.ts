import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { OrderComponent } from './Component/order/order.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },

  { path: 'login', component: UserLoginComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
