import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }
 getOrderCount(){
    return[
   { "id":34,
    "date":'12.06.2021',
    "name":"noori",
    "status":true,
    "orderTotal":5472,
    "paymentMode":'paypal'},
    { "id":34,
    "date":'12.06.2021',
    "name":"noori",
    "status":true,
    "orderTotal":5472,
    "paymentMode":'paypal'},
    { "id":34,
    "date":'12.06.2021',
    "name":"noori",
    "status":true,
    "orderTotal":5472,
    "paymentMode":'paypal'}
  ]
    // return this.http.post<any>("http://localhost:3000/api/user/login",data)
    // .pipe(map((res: any)=>{
    //   return res;
    // }))
    
  }
}
