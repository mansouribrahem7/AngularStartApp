import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  selectedCatIdToSend: number = 0;
  totalPriceTosubmit: number = 0;

  categories: Icategory[];

  onChaigingPrice(price: number) {
    console.log(price);

    this.totalPriceTosubmit = price;
  }
  constructor() {
    this.categories = [
      { id: 1, name: 'Phones' },
      { id: 2, name: 'Laptops' },
    ];
  }
}
