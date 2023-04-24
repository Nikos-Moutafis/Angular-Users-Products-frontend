import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, ProductsAPIList } from '../products.interface';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  subsciption: Subscription | undefined;
  productList: Product[] = [];
  loading = false;

  productNameSortType: 'asc' | 'desc' = 'asc';
  productCostSortType: 'asc' | 'desc' = 'asc';
  descriptionSortType: 'asc' | 'desc' = 'asc';
  quantitySortType: 'asc' | 'desc' = 'asc';

  sortDirectionProduct: 'asc' | 'desc' = 'asc';
  sortDirectionCost: 'asc' | 'desc' = 'asc';
  sortDirectionDescription: 'asc' | 'desc' = 'asc';
  sortDirectionQuantity: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    this.loading = true;

    this.productService.findAll().subscribe({
      next: (apidata: ProductsAPIList) => {
        const { status, data } = apidata;
        this.productList = data;
        console.log(status, data);
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
      complete: () => {
        console.log('Call completed');
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subsciption?.unsubscribe;
  }

  toggleSort(key: string) {
    switch (key) {
      case 'product':
        this.productNameSortType =
          this.productNameSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionProduct =
          this.sortDirectionProduct === 'asc' ? 'desc' : 'asc';
        this.productList = orderBy(
          this.productList,
          [key],
          [this.productNameSortType]
        );
        break;

      case 'cost':
        this.productCostSortType =
          this.productCostSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionCost =
          this.sortDirectionCost === 'asc' ? 'desc' : 'asc';
        this.productList = orderBy(
          this.productList,
          [key],
          [this.productCostSortType]
        );
        break;

      case 'description':
        this.descriptionSortType =
          this.descriptionSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionDescription =
          this.sortDirectionDescription === 'asc' ? 'desc' : 'asc';
        this.productList = orderBy(
          this.productList,
          [key],
          [this.descriptionSortType]
        );
        break;
      case 'quantity':
        this.quantitySortType =
          this.quantitySortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionQuantity =
          this.sortDirectionQuantity === 'asc' ? 'desc' : 'asc';
        this.productList = orderBy(
          this.productList,
          [key],
          [this.quantitySortType]
        );
        break;

      default:
        break;
    }
  }
}
