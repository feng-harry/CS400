import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {PRICE} from "../models/itemPrice";


@Injectable({
  providedIn: 'root'
})
export class PriceService {
  // priceInfo: PRICE;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };



  // callApi(url): Observable<PRICE> {
  //   return this.http.get<PRICE>(url, this.httpOptions);
  // }

  // getPrice(itemId): PRICE{
  //   const apiUrl = "http://localhost:3000/price?id=" + itemId;
  //   this.callApi(apiUrl).subscribe((data: PRICE) => {
  //     this.priceInfo = {price: data['price']};
  //     console.log(this.priceInfo);
  //   });
  //   return this.priceInfo;
  // }

  getPrice(itemId): Observable<PRICE>{
    const apiUrl = "http://localhost:3000/price?id=" + itemId;
    return this.http.get<PRICE>(apiUrl, this.httpOptions);
  }

  constructor(private http: HttpClient) { }


}
