import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      console.log(rta);
      this.products = this.products.filter((prod) => prod.id !== id);
    });
  }
}
