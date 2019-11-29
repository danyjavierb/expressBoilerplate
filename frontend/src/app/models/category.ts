export class Category {
  _id: string;
  name = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
