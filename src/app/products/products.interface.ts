export interface ProductsAPIList {
  status: boolean;
  data: Product[];
}

export interface Product {
  product: string;
  cost: number;
  description: string;
  quantity: number;
}
