import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, ProductAdded } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsAdded: Array<ProductAdded>;
  checkOutFormModel;

  constructor(public cartService: CartService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productsAdded = this.cartService.getItems();
    this.checkOutFormModel = this.formBuilder.group({
      'name': {value: '', disabled: false},
      'address': ''
    });
  }

  onSubmit(checkOutModel){
    alert('form is submitted!! (' + checkOutModel.name + ', ' + checkOutModel.address + ')');
    this.cartService.clear();
    this.checkOutFormModel.reset();
  }
}