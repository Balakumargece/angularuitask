import { Injectable } from "@angular/core";

import {Http, Response} from '@angular/http';
import { Location } from '@angular/common';
declare const swal: any;

@Injectable()

export class httpService {

  public LiveHttp: string = "https://intra.vikatan.in:3100/tv/";
// public LiveHttp: string = "http://localhost:3100/tv/";
  constructor(private http: Http,public location: Location,) { }
  pageRefresh() {
    
    swal({
    title: 'Success!',
    text: 'Tv Contents Added Successfully',
    type: 'success',
    confirmButtonClass: 'btn btn-success'
  })
  location.reload();
}

  tvpushh(params){
    this.pageRefresh();
this.http.get(this.LiveHttp + 'tv_router/tvpush', {
    params: params
 }).subscribe(data => {
    console.log(data) 
  
})
  }
  // addBusiness(person_name, business_name, business_gst_number) {
  //   const obj = {
  //     person_name: person_name,
  //     business_name: business_name,
  //     business_gst_number: business_gst_number
  //   };
  //   console.log(obj);
  //   this.http.post(`${this.uri}/add`, obj)
  //       .subscribe(res => console.log('Done'));
  // }
}