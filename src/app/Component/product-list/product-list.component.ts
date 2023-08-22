import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges, AfterViewInit {
  @Output() totalPriceChanged: EventEmitter<number>;
  selectedCatId: number = 0;
  @Input() changableCatId: number = 0;
  prodList: Iproduct[];
  selectedProductList: Iproduct[];
  categories: Icategory[];
  totalPrice: number = 0;
  buy(price: number, userQty: string) {
    if (userQty) {
      this.totalPrice += price * parseInt(userQty);
      this.totalPriceChanged.emit(this.totalPrice);
    }
  }

  filteredProds(selectedCattId: number) {
    this.selectedProductList = this.productService.getByCatId(selectedCattId);
  }

  constructor(private productService: ProductService) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.selectedProductList = this.productService.getAll();
  }
  ngAfterViewInit() {}
  ngOnChanges() {
    this.filteredProds(this.changableCatId);
  }
}
