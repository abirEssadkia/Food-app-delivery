import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ClientLocComponent } from './client-loc/client-loc.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NearbyComponent } from './nearby/nearby.component';



@NgModule({
  declarations: [
    MapComponent,
    ClientLocComponent,
    TrackingComponent,
    NearbyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
