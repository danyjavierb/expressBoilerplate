import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(prod => {
      this.product=prod;
    })
  }
}
