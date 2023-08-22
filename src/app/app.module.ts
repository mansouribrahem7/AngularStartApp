import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StylingDirective } from './Directives/styling.directive';
import { OrderComponent } from './Component/order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    StylingDirective,
    OrderComponent,
    NotFoundComponent,
    MainLayoutComponent,
    UserLoginComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
