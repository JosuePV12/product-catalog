import { Injectable } from '@angular/core';
import { Product } from '../../model/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1,'Phone', 3500,200 ),
    new Product(2,'Laptop', 3000,300 ),
    new Product(3,'Mouse', 100,23 ),
    new Product(4,'Keyboard', 500,4 )
  ]

  getProducts(): Product[] {
    return this.products;
  }

}
