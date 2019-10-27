import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestProfileComponentComponent } from './rest-profile-component/rest-profile-component.component';


const routes: Routes = [
  {path:'',component:RestaurantComponent},
  {path:'profile',component:RestProfileComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
