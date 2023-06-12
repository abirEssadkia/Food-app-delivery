import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './restau/list/list.component';
import { RestauModule } from './restau/restau.module';
import { FooterComponent } from './home-page/footer/footer.component';

  

const routes: Routes = [{ path: 'home', component: HomePageComponent },
                        { path: '', redirectTo:'/home' , pathMatch:'prefix'},
                        { path: 'restaurants', component: ListComponent , pathMatch:'prefix' },
                        // { path: '', redirectTo:'/restaurants' , pathMatch:'prefix'},         
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }                            
