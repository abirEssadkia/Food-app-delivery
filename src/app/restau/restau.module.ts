import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchBarreComponent } from './search-barre/search-barre.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    FiltersComponent,
    SearchBarreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestauModule { }
