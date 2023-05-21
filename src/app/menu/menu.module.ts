import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
