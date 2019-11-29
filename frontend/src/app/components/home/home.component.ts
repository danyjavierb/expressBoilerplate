import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from "../../services/product.service";
import {map} from "rxjs/operators";
import {Category} from "../../models/category";
import {Product} from "../../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];
  slide = [{url:"http://assets.sbnation.com/assets/2386105/1.jpg"},{url:"https://www.euronics.cz/image/productdescription/900x1000/923508.jpg"},{url:"https://i2.wp.com/www.kickz.com/blog/wp-content/uploads/2016/09/Adidas-Harden-Blog-Header1.jpg?fit=900%2C350&ssl=1"}];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(products => {
      this.products=products
    })
  }

  getAllProductsByCategory(idCategoria:string){
    this.productService.getAllProductsByCategory(idCategoria).subscribe(products => {
      this.products=products
    })
  }

  ngOnInit() {
    this.route.data.pipe(
      map((data) => data['categories']),
    )
      .subscribe(
        (cats) => {
          this.categories = cats;
        }
      );
    this.route.data.pipe(
      map((data) => data['products']),
    )
      .subscribe(
        (prods) => {
          this.products = prods;
        }
      );
  }
}
