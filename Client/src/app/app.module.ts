import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {HttpClientModule} from '@angular/common/http';
import {ApirestaurantService} from './apirestaurant.service';
import {FormsModule} from '@angular/forms';
import { RestProfileComponentComponent } from './rest-profile-component/rest-profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestProfileComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApirestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
