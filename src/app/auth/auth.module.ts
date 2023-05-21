import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    LoginComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
