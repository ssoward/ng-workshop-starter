import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Product} from "./product.model";

@Injectable()
export class ProductService {
  baseUrl = '/api/admin/product';
  constructor(private http: HttpClient) { }

  query(findText?: string) : Observable<Array<Product>> {
    let url = this.baseUrl;
    if(findText) {
      url += `?findText=${encodeURI(findText)}`;
    }
    return this.http.get<Array<Product>>(url);
  }

  get(id: number) : Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }
  add(product: Product) : Observable<any> {
    return this.http.post(this.baseUrl, product);
  }
  update(product: Product) : Observable<any> {
    return this.http.put(this.baseUrl + '/' + product.id, product);
  }
  delete(product: Product) : Observable<any> {
    return this.http.delete(this.baseUrl + '/' + product.id);
  }
}
