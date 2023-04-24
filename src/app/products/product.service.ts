import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductsAPIList } from './products.interface';
import { delay } from 'rxjs';

const PRODUCTAPI = 'https://codingfactory.ddns.net/api/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http
      .get<ProductsAPIList>(`${PRODUCTAPI}/findall`)
      .pipe(delay(1000));
  }

  insertProduct(product: Product) {
    return this.http.post<ProductsAPIList>(`${PRODUCTAPI}/create`, product);
  }
}
