import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectedName: string;
  prodList: Iproduct[];
  categories: Icategory[];
  totalPrice: number = 0;
  buy(price: number, userQty: string) {
    if (userQty) {
      this.totalPrice += price * parseInt(userQty);
    }
  }

  constructor() {
    this.prodList = [
      {
        id: 1,
        name: 'IPhone',
        price: 2500,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 1,
      },
      {
        id: 2,
        name: 'Huawi',
        price: 2500,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 1,
      },
      {
        id: 3,
        name: 'Dell',
        price: 2500,
        quantity: 4,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 2,
      },
      {
        id: 4,
        name: 'lenovo',
        price: 2520,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 2,
      },
      {
        id: 5,
        name: 'hp',
        price: 5000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 2,
      },
      {
        id: 6,
        name: 'mac',
        price: 50000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 2,
      },
      {
        id: 7,
        name: 'premium',
        price: 50000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        categeoryId: 1,
      },
    ];
    this.categories = [
      { id: 1, name: 'Phones' },
      { id: 2, name: 'Laptops' },
    ];
  }
}
