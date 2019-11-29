import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.api.getAllProducts();
  }

  getAllProductsByCategory(idCategory: string): Observable<Product[]> {
    return this.api.getAllProductsByCategory(idCategory);
  }

  getProductById(idProduct): Observable<Product> {
    return this.api.getAllProductsById(idProduct);
  }

}
