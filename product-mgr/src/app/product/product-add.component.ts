import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {Product} from "./product.model";
import {NgForm} from "@angular/forms";
declare var jQuery: any;

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent {

  @Output() newProduct = new EventEmitter<Product>();
  @ViewChild('f') form: NgForm;

  addProduct(product: Product) {
    this.newProduct.emit(product);
    this.form.reset();

    jQuery('.modal').modal('hide');
  }

}
