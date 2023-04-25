import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsInsertComponent } from './products-insert/products-insert.component';
import { ProductService } from './product.service';
import { WelcomeComponent } from '../public/welcome/welcome.component';

const routes: Routes = [
  { path: 'list', component: ProductsListComponent },
  { path: 'insert', component: ProductsInsertComponent },
  { path: 'delete', component: WelcomeComponent },
  { path: 'update', component: WelcomeComponent },
];

@NgModule({
  declarations: [ProductsListComponent, ProductsInsertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
})
export class ProductsModule {}
