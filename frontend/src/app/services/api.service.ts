import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from '../models/product';
import {Category} from '../models/category';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

const API_URL = environment.apiUrl;
const BASE = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http
      .get(API_URL + BASE + '/product')
      .pipe(
        map(response => {
          return <Product[]>response
        }),
        catchError(ApiService.handleError)
      )
  }

  public getAllProductsByCategory(idCategory:string): Observable<Product[]> {
    return this.http
      .get(API_URL + BASE + '/product/category/'+idCategory)
      .pipe(
        map(response => {
          return <Product[]>response
        }),
        catchError(ApiService.handleError)
      )
  }
  public getAllProductsById(idProduct:string): Observable<Product> {
    return this.http
      .get(API_URL + BASE + '/product/'+idProduct)
      .pipe(
        map(response => {
          return <Product>response
        }),
        catchError(ApiService.handleError)
      )
  }

  public getAllCategories(): Observable<Category[]> {
    return this.http
      .get(API_URL + BASE + '/category')
      .pipe(
        map(response => {
          return <Category[]>response
        }),
        catchError(ApiService.handleError)
      )
  }

  private static handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
