import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Injectable()
export class CategoryResolver implements Resolve<Observable<Category[]>> {
  constructor(
    private categoryService: CategoryService
  ) {
  }
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category[]> {
    return this.categoryService.getAllProducts();
  }
}
