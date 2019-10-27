import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApirestaurantService {
  url='/api/info?place=';
  account:any;
  constructor(private _http:HttpClient) { }

  getUsers(namecity){
    return this._http.get<any>(this.url+namecity);
  }
  setRest(profile:any)
  {
    this.account=profile;
  }
}
