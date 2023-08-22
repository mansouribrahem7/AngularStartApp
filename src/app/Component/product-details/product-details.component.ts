import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prodId: number;
  selectedProduct: Iproduct;

  goBack() {
    this.location.back();
  }
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private prodServ: ProductService
  ) {}
  ngOnInit(): void {
    this.prodId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedProduct = this.prodServ.getByProdId(this.prodId);
  }
}
