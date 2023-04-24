import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../products.interface';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css'],
})
export class ProductsInsertComponent {
  form: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private router: Router
  ) {
    this.form = this.fb.group({
      product: ['', Validators.required],
      cost: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      setTimeout(() => {
        this.router.navigate(['products/list']);
      }, 1500);
      const product = this.form.value as Product;
      this.service.insertProduct(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Not valid');
    }
  }
}
