import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
/*
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
*/

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  
  imports: [
    /*CommonModule,*/
    /*FormsModule,*/

    RouterModule.forChild([
      { path : 'products', component : ProductListComponent },
      { path : 'products/:id', component : ProductDetailComponent, canActivate:[ProductDetailGuard] }

    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    /*ConvertToSpacesPipe,
    StarComponent*/
  ]
})
export class ProductModule { }
