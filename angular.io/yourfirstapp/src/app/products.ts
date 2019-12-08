export class Product{
  constructor(public name: string, public price: number, public description: string){}
}

export const products: Array<Product> = [
  new Product
  (
    'iPhone XL',
    799,
    'A large phone with one of the best screens'
  ),
  new Product
  (
    'iPhone Mini',
    699,
    'A great phone with one of the best cameras'
  ), new Product
  (
    'iPhone Standard',
    299,
    ''
  )
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/