import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import {RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';



const routes: Routes = [
    
  { path: 'Welcome', component : WelcomeComponent },
  { path : '' , redirectTo: 'Welcome', pathMatch : 'full' },
  { path : '**' , redirectTo: 'Welcome', pathMatch : 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
