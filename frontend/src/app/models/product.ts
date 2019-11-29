import {Category} from "./category";

export class Product {
  _id: string;
  name = '';
  unit_price: number;
  description ='';
  created_at = '';
  images:Object[]=[];
  categories:Category[]=[];
  score:number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
