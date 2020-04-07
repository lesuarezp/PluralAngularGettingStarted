import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../product';




@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('enter detail');
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId' : id,
      'productName' : 'Name',
      'productCode' : '', 'releaseDate' : '', 'price': 20, 'description' : '', 'imageUrl':'', 'starRating' : 3.5
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
