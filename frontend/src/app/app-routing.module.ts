import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from "./components/home/home.component";
import {CategoryResolver} from "./resolvers/categories.resolver";
import {ProductsResolver} from "./resolvers/products.resolver";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      categories: CategoryResolver,
      products : ProductsResolver
    }
  },
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CategoryResolver,
    ProductsResolver
  ]
})
export class AppRoutingModule {
}
