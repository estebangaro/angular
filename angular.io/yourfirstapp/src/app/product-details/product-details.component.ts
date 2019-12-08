import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    //Para obtener el producto a partir del productId contenido como 
    //querystring.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addProduct(){
    this.cartService.addItem(this.product);
    alert('Producto: ' + this.product.name + ', added!!');
  }

}