import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shippment-prices',
  templateUrl: './shippment-prices.component.html',
  styleUrls: ['./shippment-prices.component.css']
})
export class ShippmentPricesComponent implements OnInit {

  prices;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.prices = this.cartService.getShippmentPrices();
  }

}