import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInsertComponent } from './products-insert.component';

describe('ProductsInsertComponent', () => {
  let component: ProductsInsertComponent;
  let fixture: ComponentFixture<ProductsInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
