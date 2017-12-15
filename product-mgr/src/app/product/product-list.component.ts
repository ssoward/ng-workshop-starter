import {Component, OnInit} from '@angular/core';
// import { PRODUCTS } from './product.data';
import {ProductService} from "./product.service";
import {Product} from "./product.model";
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Array<any>;// = this.fetchProducts();//PRODUCTS;
  findText = new FormControl();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.findText = new FormControl();
    this.findText.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.fetchProducts(value);
      });
    this.fetchProducts();
  }

  fetchProducts(findText?: string) {
    this.productService.query(findText)
      .subscribe(products => this.products = products);//subscribe is similar to ng1.0 watch
  }

  randomProduct(){
    this.addProduct({id: Math.random(), name: this.makeName(5), description: this.makeName(100), price: Math.random()})
  }

  addProduct(product: Product) {
    this.productService.add(product)
      .subscribe(r => {
        this.fetchProducts();
      });
  }

  makeName(ll) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";

    for (let i = 0; i < ll; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  deleteProduct(event, prod) {
    this.productService.delete(prod)
      .subscribe(r => {
        this.fetchProducts();
      });
  }
}
