import { Component, OnInit } from '@angular/core';
import { ApirestaurantService } from '../apirestaurant.service';

@Component({
  selector: 'app-rest-profile-component',
  templateUrl: './rest-profile-component.component.html',
  styleUrls: ['./rest-profile-component.component.css']
})
export class RestProfileComponentComponent implements OnInit {

  constructor(private restserv:ApirestaurantService) { }

  pic:string;
  restaurant:any;
  ngOnInit() {
    this.restaurant=this.restserv.account;
    this.pic=this.restserv.account.photos[0].photo_reference;
  }

}
