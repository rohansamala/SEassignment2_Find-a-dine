import { Component, OnInit } from '@angular/core';
import { ApirestaurantService } from '../apirestaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  namecity: string;
  rests: any;
  prof: boolean;
  curr: any;

  constructor(private restaurantService:ApirestaurantService) { }

  ngOnInit() {
  }
  search()
  {
    this.restaurantService.getUsers(this.namecity).subscribe((data)=>{
      this.rests=data['results'];
    });
  }
  showprofile(restaurant)
  {
    this.prof=true;
    this.curr=restaurant;
    this.restaurantService.setRest(this.curr);
  }
}
