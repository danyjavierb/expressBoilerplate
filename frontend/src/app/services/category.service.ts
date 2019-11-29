import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private api: ApiService) {}

  getAllProducts(): Observable<Category[]> {
    return this.api.getAllCategories();
  }
}
