import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      /*  this.product = this.productsService.getProduct(id); */
    });
  }

  fetchProduct(id: string) {
    this.productsService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
  createProduct() {
    const newProduct: Product = {
      id: '22236',
      title: 'nuevo desde aqui',
      image: 'assets/images/banner-2.jpg',
      description: 'Ensayo desde aqui',
      price: 9.99,
    };
    this.productsService
      .createProduct(newProduct)
      .subscribe((product) => console.log(product));
  }
  updateProduct() {
    const updatedProduct: Partial<Product> = {
      description: 'updated product',
      price: 99.099,
    };
    this.productsService
      .updateProduct('2', updatedProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }
  deleteProduct() {
    this.productsService.deleteProduct('12569').subscribe((product) => {
      console.log(product);
    });
  }
}
