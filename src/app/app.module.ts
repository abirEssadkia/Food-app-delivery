import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NaveBarreComponent } from './home-page/nave-barre/nave-barre.component';
import { FooterComponent } from './home-page/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NaveBarreComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
