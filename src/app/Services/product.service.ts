import { Iproduct } from 'src/app/Models/iproduct';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private prodList: Iproduct[];
  filteredByCatId: Iproduct[];
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
  }

  getByCatId(catId: number) {
    if (catId == 0) {
      return this.prodList;
    } else {
      this.filteredByCatId = this.prodList.filter((prod) => {
        return prod.categeoryId == catId;
      });
      console.log(this.filteredByCatId);

      return this.filteredByCatId;
    }
  }
  getByProdId(prodId: number): Iproduct | null {
    let result = this.prodList.find((prod) => prod.id == prodId);
    return result;
  }

  getAll() {
    return this.prodList;
  }
}
