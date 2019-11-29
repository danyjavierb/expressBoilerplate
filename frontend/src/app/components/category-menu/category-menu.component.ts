import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  @Input() categories: Category[];

  @Output()
  getAllProductsEmitter: EventEmitter<null> = new EventEmitter();

  @Output()
  getProductsByCategoryEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getProductsByCategory(idCategory:string){
    this.getProductsByCategoryEmitter.emit(idCategory)
  }
  getAllProducts(){
    this.getAllProductsEmitter.emit()
  }

}
