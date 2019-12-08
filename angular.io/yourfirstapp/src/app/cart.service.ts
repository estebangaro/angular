import { Injectable } from '@angular/core';
import { Product } from '../app/products';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  productsAdded: Array<ProductAdded>;

  constructor(public httpClient: HttpClient) { 
    this.productsAdded = [];
  }

  addItem(product: Product){
    let productAdded: ProductAdded = this.productsAdded.find(function(product_){
      return product_.product.name == product.name && product_.product.description == product.description;
    });
    if(!productAdded){
      productAdded = new ProductAdded();
      productAdded.product = product;
      productAdded.quantity = 1;
      this.productsAdded.push(productAdded);
    }else{
      productAdded.quantity++;
    } 
  }

  clear(){
    this.productsAdded = [];
    this.getItems();
  }

  getItems(){
      return this.productsAdded;
  }

  getShippmentPrices(){
      return this.httpClient.get('/assets/shipping.json');
  }
}

export class ProductAdded{
  product: Product;
  quantity: number; 
}