import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {CategoryService} from "./services/category.service";
import {ProductService} from "./services/product.service";
import {ApiService} from "./services/api.service";
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SliderComponent,
    HomeComponent,
    CategoryMenuComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService,ProductService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
