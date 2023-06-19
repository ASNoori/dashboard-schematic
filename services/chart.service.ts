import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}
  getData(): Array<any> {
    return [
      1, 2, 3 ,
     
    ];
  }
  getData1(): Array<any> {
    return [
      47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159,
     
    ];
  }
  getData2(): Array<any> {
    return [
      17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
     
    ];
  }
}
